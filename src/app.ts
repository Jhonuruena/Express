import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from './routes/authRoutes'
import rutas_ejemplo from './routes/rutas_ejemplo'
//1. Crear un objeto express
const app: Application = express()

//1.1 Emplear rutas
app.use('/',rutas_ejemplo)
app.use('/auth',authRoutes)

//2. Respuesta cuando el recurso no existe
app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({message: "Esta pagina no existe"})
})

//3. Respuesta cuando hay un error de servidor



export default app