//solo se ejecutan en el navegador
//alert("Errrror");
// confirm("Quieres?")
// prompt("Escribe")

console.log("hola desde javascript");

//referencia a variables en html, es en el html donde referencias el javascript
const boton = document.getElementById("log_button");
const username = document.getElementById("user_write_log");
const pass = document.getElementById("pass_write_log");

//validación de credenciales
const login = () => {
    console.log("Boton de login presionado"); 
    console.log("Username: " + username.value + " " + pass.value)
    if (username.value == "Daniela" && pass.value == "contraseña123"){
        //lleva a la página Home si es el usuario y password adecuada
        sessionStorage.setItem("name", username.value); //crea la variable name y le asigna taall valor
        window.location.href = "./pages/home.html";
    } else {
        alert("Credenciales incorrectas"); 
    }
}

boton.addEventListener("click", login);