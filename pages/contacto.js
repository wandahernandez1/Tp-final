"use strict"

// Llamo a mis variables y traigo a los Input del form

let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputEmail = document.getElementById("inputEmail");
let inputTelefono = document.getElementById("inputTelefono");
let inputMensaje = document.getElementById("inputMensaje");


//Llamo a mi boton Enviar 

let buttomEnviar = document.getElementById("buttomEnviar");
//Creo un arreglo vacio que va a guardar la informacion
let datosForm = [];

//Cuando haga click quiero que no recargue la pagina
buttomEnviar.addEventListener("click", (e)=>{
    e.preventDefault();
    //lleno el valor de los input en el arreglo datosForm
    datosForm.push(inputNombre.value);
    datosForm.push(inputApellido.value);
    datosForm.push(inputEmail.value);
    datosForm.push(inputTelefono.value);
    datosForm.push(inputMensaje.value);

    let blob = new Blob ([datosForm], {type: "text/plain;charset=utf-8"})
    saveAs(blob, "datosForm.txt")

    
})