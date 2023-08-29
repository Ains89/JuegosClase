// "use strict";

// //Capturando elementos del DOM para las opciones piedra, papel o tijera
// let botonPiedra = document.querySelector(".piedra");
// let botonPapel = document.querySelector(".papel");
// let botonTijera = document.querySelector(".tijera");

// //Capturando elementos del DOM para el tablero de opciones elegidas por el usuario
// let manoUsuario = document.querySelector(".mano-usuario");
// let manoCompu = document.querySelector(".mano-computadora");

// let puntajeUsuario = document.querySelector(".puntaje-usuaro p");
// let puntajeComputadora = document.querySelector(".puntaje-computadora p");

// let labelResultado = document.querySelector(".resultado");

// let tablero = document.querySelector(".tablero");

// let eleccionUsuario = "";
// let eleccionCompu = "";

// let contUsuario = 0;
// let contCompu = 0;



// /*---------------------
//       Alerts
// -----------------------*/

// const swalInicio = () => {
//   Swal.fire(
//     '¿Jugamos?',
//     'Gana el primero que alcance 3 puntos',
//     'question'
//   )
// }
// swalInicio();

// const swalPerdedor = () => {
//   Swal.fire({
//     icon: 'error',
//     title: 'Oops...',
//     text: 'Sigue intentado',
//     allowOutsideClick: false
//   })
// }

// const swalGanador= () => {
//   Swal.fire({
//     icon: 'success',
//     title: 'Bienvenido a CódigoC13...',
//     text: 'Iniciemos esta historia',
//     confirmButtonText: 'Cool',
//     allowOutsideClick: false
//   })
// }

// const limpiarMarcadores = () => {
//   contUsuario = 0;
//   contCompu = 0;
//   puntajeUsuario.textContent = contUsuario;
//   puntajeComputadora.textContent = contCompu;
// }

// const ganador = (puntajeUser, puntajeMaquina) => {
//   console.log("Usuario: "+puntajeUser, " maquina: "+puntajeMaquina);
//   if(puntajeUser >= 3 && puntajeUser > puntajeMaquina){
//     console.log("Usuario Ganador");
//     swalGanador();
//     setTimeout(limpiarMarcadores, 3000);
//   }else if(puntajeMaquina >= 3 && puntajeUser< puntajeMaquina){
//     console.log("Maquina Ganador");
//     swalPerdedor();
//     setTimeout(limpiarMarcadores, 3000);
//   }

// }

// // esta función no se ejecuta automaticamente, es decir, tengo que invocarla en otro punto del código
// const eleccionComputadora = () => {
//   let opcionAlAzar = Math.floor(Math.random() * 3);

//   //Opción para piedra
//   if (opcionAlAzar == 0) {
//     manoCompu.src = "./assets/piedra_computadora.png";
//     eleccionCompu = "piedra";
//   } else if (opcionAlAzar == 1) {
//     //Opción para papel
//     manoCompu.src = "./assets/papel_computadora.png";
//     eleccionCompu = "papel";
//   } else {
//     //Opción para tijera
//     manoCompu.src = "./assets/tijera_computadora.png";
//     eleccionCompu = "tijera";
//   }
// };


// const resultado = () => {
//   if (eleccionUsuario == "piedra") {
//     if (eleccionCompu == "piedra") {
//       labelResultado.textContent = "Empate!! 😐";
//     }
//     if (eleccionCompu == "papel") {
//       labelResultado.textContent = "Perdiste!! 😥";
//       contCompu++;
//       puntajeComputadora.textContent = contCompu;
//       ganador(contUsuario, contCompu); 
//     }
//     if (eleccionCompu == "tijera") {
//       labelResultado.textContent = "Ganasteee!! 🤩";
//       contUsuario++;
//       puntajeUsuario.textContent = contUsuario;
//       ganador(contUsuario, contCompu);
//     }
//   }

//   if (eleccionUsuario == "papel") {
//     if (eleccionCompu == "piedra") {
//       labelResultado.textContent = "Ganasteee!! 🤩";
//       contUsuario++;
//       puntajeUsuario.textContent = contUsuario;
//       ganador(contUsuario, contCompu);
//     }
//     if (eleccionCompu == "papel") {
//       labelResultado.textContent = "Empate!! 😐";
//     }
//     if (eleccionCompu == "tijera") {
//       labelResultado.textContent = "Perdiste!! 😥";
//       contCompu++;
//       puntajeComputadora.textContent = contCompu;
//       ganador(contUsuario, contCompu);
//     }
//   }

//   if (eleccionUsuario == "tijera") {
//     if (eleccionCompu == "piedra") {
//       labelResultado.textContent = "Perdiste!! 😥";
//       contCompu++;
//       puntajeComputadora.textContent = contCompu;
//       ganador(contUsuario, contCompu);
//     }
//     if (eleccionCompu == "papel") {
//       labelResultado.textContent = "Ganasteee!! 🤩";
//       contUsuario++;
//       puntajeUsuario.textContent = contUsuario;
//       ganador(contUsuario, contCompu);
//     }
//     if (eleccionCompu == "tijera") {
//       labelResultado.textContent = "Empate!! 😐";
//     }
//   }
//   const resultado = () => {
//     if (eleccionUsuario == "piedra") {
//       // Resto del código
//     }
  
//     // Resto del código
  
//     if (eleccionUsuario == "tijera") {
//       // Resto del código
//     }
  
//     // Mostrar mensaje de empate o resultado actualizado
//     labelResultado.textContent = "Empate!! 😐";
//     // O
//     labelResultado.textContent = "Ganasteee!! 🤩";
//     // O
//     labelResultado.textContent = "Perdiste!! 😥";
  
//     // Llamar a la función ganador()
//     ganador(contUsuario, contCompu);
//   }
//   const ganador = (puntajeUser, puntajeMaquina) => {
//     if (puntajeUser >= 3 && puntajeUser > puntajeMaquina) {
//       // Usuario ganador
//     } else if (puntajeMaquina >= 3 && puntajeUser < puntajeMaquina) {
//       // Computadora ganadora
//     }
//   }
// };

// // esta función se ejecuta automaticamente, es decir, no tengo que invocarla en otro punto del código
// botonPiedra.onclick = () => {
//   manoUsuario.src = "./assets/piedra_user.png";
//   manoCompu.src = "./assets/piedra_computadora.png";
//   labelResultado.textContent="...";
//   tablero.classList.add("jugando");
//   setTimeout(() => {
//     eleccionUsuario = "piedra";
//     manoUsuario.src = "./assets/piedra_user.png";
//     eleccionComputadora();
//     resultado();
//     tablero.classList.remove("jugando");
//   }, 2000);
// };

// botonPapel.onclick = () => {
//   manoUsuario.src = "./assets/papel_user.png";
//   manoCompu.src = "./assets/piedra_computadora.png";
//   labelResultado.textContent="...";
//   tablero.classList.add("jugando");
//   setTimeout(() => {
//     eleccionUsuario = "papel";
//     manoUsuario.src = "./assets/papel_user.png";
//     eleccionComputadora();
//     resultado();
//     tablero.classList.remove("jugando");
//   }, 2000);
// };

// botonTijera.onclick = () => {
//   manoUsuario.src = "./assets/tijera_user.png";
//   manoCompu.src = "./assets/piedra_computadora.png";
//   labelResultado.textContent="...";
//   tablero.classList.add("jugando");
//   setTimeout(() => {
//     eleccionUsuario = "tijera";
//     manoUsuario.src = "./assets/tijera_user.png";
//     eleccionComputadora();
//     resultado();
//     tablero.classList.remove("jugando");
//   }, 2000);
// };






