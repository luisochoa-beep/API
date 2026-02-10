const express = require('express');

const app = express();

app.use(express.json());


const rutasUsuarios = require('./SRC/routes/crud');
const rutasProductos = require('./SRC/routes/productos'); 


app.use("/api/usuarios", rutasUsuarios);
app.use("/api/productos", rutasProductos); 


app.get("/", (req, res) => {
res.send("API funcionando. Usa /api/usuarios o /api/productos"); 
});

app.listen(3000, () => {
console.log("Servidor en http://localhost:3000");
});



/**
const express = require('express');
const app = express();
app.use(express.json());

const db = require("./SRC/models/connection");
const funciones = require('./SRC/controller/crud');
app.use("/API/crud", crudRouters);





/** 
app.get("/api/get1", funciones.get1);
app.get("/api/get2", funciones.get2);
app.post("/api/post1", funciones.post1);
app.put("/api/put", funciones.put);
app.patch("/api/patch", funciones.patch);
app.delete("/api/delete1", funciones.delete1);
*/


/**
app.get("/api/usuarios/:id", async (req, res) => {
const result = await db.query("SELECT id, usuario, email FROM usuarios WHERE id = $1", [req.params.id]);
res.json(result.rows[0]);
});


app.get("/api/usuarios", async (req, res) => {
const result = await db.query("SELECT id, usuario, email FROM usuarios");
res.json(result.rows);
});


app.post("/api/usuarios", async (req, res) => {
const { usuario, password, email } = req.body;
const result = await db.query(
"INSERT INTO usuarios (usuario, password, email) VALUES ($1, $2, $3) RETURNING id, usuario, email",
[usuario, password, email]
);
res.json(result.rows[0]);
});


app.put("/api/usuarios/:id", async (req, res) => {
const { usuario, password, email } = req.body;
const result = await db.query(
"UPDATE usuarios SET usuario = $1, password = $2, email = $3 WHERE id = $4 RETURNING id, usuario, email",
[usuario, password, email, req.params.id]
);
res.json(result.rows[0]);
});


app.patch("/api/usuarios/:id", async (req, res) => {
const { id } = req.params;
if (req.body.password) {
const result = await db.query(
    "UPDATE usuarios SET password = $1 WHERE id = $2 RETURNING id, usuario",
    [req.body.password, id]
);
res.json({ mensaje: "Contraseña actualizada", usuario: result.rows[0] });
}
else if (req.body.email) {
const result = await db.query(
    "UPDATE usuarios SET email = $1 WHERE id = $2 RETURNING id, usuario, email",
    [req.body.email, id]
);
res.json({ mensaje: "Email actualizado", usuario: result.rows[0] });
}
else if (req.body.activo !== undefined) {
const result = await db.query(
    "UPDATE usuarios SET activo = $1 WHERE id = $2 RETURNING id, usuario, activo",
    [req.body.activo, id]
);
res.json({ mensaje: "Estado actualizado", usuario: result.rows[0] });
}
else {
res.status(400).json({ error: "Envía password, email o activo para actualizar" });
}
});

app.delete("/api/usuarios/:id", async (req, res) => {
await db.query("DELETE FROM usuarios WHERE id = $1", [req.params.id]);
res.json({ mensaje: "Usuario eliminado" });
});
*/

app.get("/", (req, res) => {
res.send("Funcionando");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});

/**
app.get("/api/saludo",(reqa,res)=>{
    res.send("hola");
});

app.post("/api/insertar",(req,res)=>{
    //console.log(req.body);

    try{
        const {usuario,password} = req.body;
        const query = "INSERT INTO usuarios VALUES ($1, $2)";
        db.query(query, [usuario,password])
    }catch(err){
        console.error(err);
        res.status(500).send("Esta mal");
    }
    res.send("Datos recibidos");
});

app.put("/api/actualizar/:id",(req,res)=>{
    console.log(req.params.id);
    res.json(
        {mensaje: "recurso actualizado",
        id: req.params.id}
    );
});

app.listen(3000,(err)=> {
    console.log("listening on port 3000")
});

*/