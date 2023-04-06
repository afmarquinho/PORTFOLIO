// CONSTANTES
const menu = document.querySelector(".btn__menu");
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn__menu");
const menuImg = document.querySelector("#menuimg");

// FUNCIONES
menu.addEventListener("click", activar);

// FUNCIONES
function activar() {
  nav.classList.toggle("activado");

  if (nav.classList.contains("activado")) {
    menuImg.attributes.src.textContent="./assets/Iconos/close_FILL0_wght400_GRAD0_opsz48.svg";
    return
  } 
  menuImg.attributes.src.textContent="./assets/Iconos/menu_FILL0_wght400_GRAD0_opsz48.svg"

  }

  // if (!activate) {
  //   activate = true;
  // } else {
  //   activate = false;
  // }
  // mostrar

// function mostrar (){
//   if (activate){
//     nav.classList.add('activar')
//   } else{
//     nav.classList.remove()
//   }
// }
