const logout = document.getElementById("logout");

window.onload = () => {
    if(sessionStorage.name){
        const name = document.querySelector(".Nombre");
        name.innerText = "Soy " + sessionStorage.name;
    } else {
        window.location.href = "../index.html";
    }
};

logout.addEventListener("click", () => {
    console.log("limpiando storage");
    sessionStorage.clear();
    window.location.href = "../index.html"
})




