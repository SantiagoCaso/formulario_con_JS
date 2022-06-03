
var dataBase = []

const button = document.getElementById("guardar")
const inputName = document.getElementById("input-name")
const inputAge = document.getElementById("input-age")
const inputBorn = document.getElementById("input-born")
const inputProvincia = document.getElementById("provincia")


function procesarFormulario(){
    let persona = {}

    persona.nombre = inputName.value 
    persona.edad = inputAge.value 
    persona.nacimiento = inputBorn.value 
    persona.provincia = inputProvincia.value

    console.log(persona)

    addPersonDataBase(persona);

}


function mostrarDatosFunction(){

    const tbodyResultado = document.getElementById("datosEnPantalla")

    const tablaFila = document.createElement("tr")

    const tablaCeldaNombre = document.createElement("td")
    const tablaCeldaEdad = document.createElement("td")
    const tablaCeldaNacimiento = document.createElement("td")
    const tablaCeldaProvincia = document.createElement("td")

    tablaCeldaNombre.textContent = dataBase.nombre
    tablaCeldaEdad.textConten = dataBase.edad
    tablaCeldaNacimiento.textConten = dataBase.nacimiento
    tablaCeldaProvincia.textContent = dataBase.provincia

    tablaFila.appendChild(tablaCeldaNombre)
    tablaFila.appendChild(tablaCeldaEdad)
    tablaFila.appendChild(tablaCeldaNacimiento)
    tablaFila.appendChild(tablaCeldaProvincia)

    tbodyResultado.prepend(tablaFila)
}

document.getElementById("mostrarDatos").onclick = function(){
    mostrarDatosFunction();
}

function limpiarDatos(){
    document.getElementById("datosNombre").innerHTML = "";
    document.getElementById("datosEdad").innerHTML = "" ;
    document.getElementById("datosNacimiento").innerHTML = "" ;
    document.getElementById("datosProvincia").innerHTML = "" ;
}

function addPersonDataBase(persona){
    dataBase.push(persona); 

}

