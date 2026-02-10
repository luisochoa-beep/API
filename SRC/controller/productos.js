const db = require("../models/connection");


async function obtenerPorId(req, res) {
const resultado = await db.query("SELECT * FROM productos WHERE id = $1", [req.params.id]);
res.json(resultado.rows[0] || {});
}


async function obtenerTodos(req, res) {
const resultado = await db.query("SELECT * FROM productos");
res.json(resultado.rows);
}


async function crear(req, res) {
const { nombre, precio } = req.body;
const resultado = await db.query(
"INSERT INTO productos (nombre, precio) VALUES ($1, $2) RETURNING *",
[nombre, precio]
);
res.json(resultado.rows[0]);
}


async function actualizar(req, res) {
const { nombre, precio } = req.body;
const resultado = await db.query(
"UPDATE productos SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *",
[nombre, precio, req.params.id]
);
res.json(resultado.rows[0] || {});
}

async function actualizarParcial(req, res) {
const { precio } = req.body;
const resultado = await db.query(
"UPDATE productos SET precio = $1 WHERE id = $2 RETURNING id, nombre, precio",
[precio, req.params.id]
);
res.json(resultado.rows[0] || {});
}


async function eliminar(req, res) {
await db.query("DELETE FROM productos WHERE id = $1", [req.params.id]);
res.json({ mensaje: "Producto eliminado" });
}

module.exports = {
obtenerPorId,
obtenerTodos,
crear,
actualizar,
actualizarParcial,
eliminar
};