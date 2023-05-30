import app from "./app";

//1. Iniciar un servidor para responder a peticiones REST
const PORT = 3000
app.listen(PORT,()=>{ console.log(`El servidor esta escuchando en el puerto ${PORT}`)})