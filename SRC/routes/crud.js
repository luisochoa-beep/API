const express = require("express");
const router = express.Router();


const funciones = require('../controller/crud');


router.get("/usuarios/:id", funciones.get1);     
router.get("/usuarios", funciones.get2);       
router.post("/usuarios", funciones.post1);        
router.put("/usuarios/:id", funciones.put);       
router.patch("/usuarios/:id", funciones.patch);   
router.delete("/usuarios/:id", funciones.delete1); 

module.exports = router;