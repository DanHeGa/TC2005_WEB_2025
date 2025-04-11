const chihuahuaImg = document.getElementById("chihuahua");

let originalPict = true;
const changePict = () => {
    if(originalPict){
        chihuahuaImg.src = "../images/perro.jpg";
    } else {
        chihuahuaImg.src = "../images/perro2.jpg";
    }
    originalPict = !originalPict;
}

chihuahuaImg.addEventListener("click", changePict);