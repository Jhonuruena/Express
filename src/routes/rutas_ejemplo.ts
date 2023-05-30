import express , { Router, Request, Response } from "express";

const router: Router = Router()

//1.Definir las rutas
//Usualmente las rutas corresponden a acciones CRUD

router.get('/mensaje',(req:Request, res:Response)=>{
    res.send('Probando ruta mensaje')
})

export default router