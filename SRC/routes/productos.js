const express = require("express");

const router = express.Router();

const productosController = require('../controller/productos');


router.get("/:id", productosController.obtenerPorId);
router.get("/", productosController.obtenerTodos);
router.post("/", productosController.crear);
router.put("/:id", productosController.actualizar);
router.patch("/:id", productosController.actualizarParcial);
router.delete("/:id", productosController.eliminar);

module.exports = router;