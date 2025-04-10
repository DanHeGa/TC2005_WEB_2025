const logout = document.getElementById("logout");

window.onload = () => {
    if(sessionStorage.name){
        const name = document.getElementById("Nombre");
        name.innerText = "Name: " + sessionStorage.name;
    } else {
        window.location.href = "../index.html";
    }
};

logout.addEventListener("click", () => {
    console.log("limpiando storage");
    sessionStorage.clear();
    window.location.href = "../index.html"
})




