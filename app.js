// CONSTANTES
const menu = document.querySelector(".btn__menu");
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn__menu");

let activate = false;
// FUNCIONES
menu.addEventListener("click", activar);

// FUNCIONES
function activar() {
  nav.classList.toggle("activado");

  

  // if (!activate) {
  //   activate = true;
  // } else {
  //   activate = false;
  // }
  // mostrar
}
// function mostrar (){
//   if (activate){
//     nav.classList.add('activar')
//   } else{
//     nav.classList.remove()
//   }
// }
