/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["El perro ", "Mi abuela ", "El correo ", "Mi pajaro "];
  let action = ["comió ", "hizo pis ", "aplastó ", "rompio "];
  let what = ["mi tarea ", "mi telefono ", "el carro "];
  let when = [
    "antes de la clase ",
    "cuando estaba durmiendo ",
    "mientras estaba dormido ",
    "durante el desayuno ",
    "mientras estaba orando "
  ];

  let rd1 = Math.floor(Math.random() * who.length);
  let rd2 = Math.floor(Math.random() * action.length);
  let rd3 = Math.floor(Math.random() * what.length);
  let rd4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[rd1] + action[rd2] + what[rd3] + when[rd4];
};
