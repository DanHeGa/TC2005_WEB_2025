console.log("Hola Mundo")

const colora = ['red', 'blue', 'yellow']
console.log(colora[0])
colora[2] = 'good'
console.log(colora[2])

//asigna  acada elemento el nombre de "color"
colora.forEach((color) => console.log(color))

class Alumno {
    constructor(edad, name){
        this.name = name;
        this.edad = edad
    }

    printing(){
        console.log(this.name + " " + this.edad)
    }
}

/*HERENCIA
class AlumnoForaneo extends Alumno

FUNCIONES
function saludo(){}

llamarla:
saludo();
*/


//function anonima
const saludo = () => {
    console.log("HOla")
};

const persona = (name) => {
    console.log(name)
};

const Luis = new Alumno(10, "Luis")
Luis.printing();
saludo();
persona("Daniela")