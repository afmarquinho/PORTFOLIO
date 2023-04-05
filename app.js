// CONSTANTES
const textoEncriptar = document.querySelector("texto");
const formularioEncriptar = document.querySelector(".formulario__encriptar");
const formularioDesencriptar = document.querySelector(
  ".formulario__desencriptar"
);
let mensaje = "";
const key = "54656454sdsdsd";

// EVENTOS
formularioEncriptar.addEventListener("submit", encriptar);
formularioDesencriptar.addEventListener("submit", encriptar);

// FUNCIONES
function encriptar(e) {
  e.preventDefault();
  if (e.target.className === "formulario__encriptar") {
    formularioEncriptar.querySelector('.btn__encriptar').disabled = true;
    formularioDesencriptar.querySelector('.btn__desencriptar').disabled = false;
    mensaje = formularioEncriptar.querySelector(".texto").value; // captura del valor del text area
    let textoEncriptado = encriptarDesencriptar(mensaje, key); //Llamada de la funcion que encripta
    formularioDesencriptar.querySelector(".texto__encriptado").value =
      textoEncriptado;
    formularioEncriptar.querySelector(".texto").value = ""; //Reinicio del formulario
  } else {
    formularioEncriptar.querySelector('.btn__encriptar').disabled = false;
    formularioDesencriptar.querySelector('.btn__desencriptar').disabled = true;
    mensaje = formularioDesencriptar.querySelector(".texto__encriptado").value;
    let textoDesencriptado = encriptarDesencriptar(mensaje, key);
    formularioEncriptar.querySelector(".texto").value = textoDesencriptado;
   formularioDesencriptar.querySelector('.texto__encriptado').value = "" //Reinicio del formulario
  
  }
}

function encriptarDesencriptar(text, key) {
  let resultado = "";
  for (let i = 0; i < text.length; i++) {
    resultado += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return resultado;
}
