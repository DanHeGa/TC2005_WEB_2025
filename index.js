import express from "express" //servidor de paginas web 

const app = express() //crear una instancia del servidor

app.use(express.static("public")) //esto es para que todo de la carpeta public se pueda accesar a traves del navegador

const port = 4000;
app.listen(4000, console.log("http://localhost:" + port)) //puerto que el servidor estará escuchando

