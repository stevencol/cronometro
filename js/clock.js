'use strict';

var milesima =
  localStorage.getItem("milesima") == null
    ? 0
    : parseInt(localStorage.getItem("milesima"));
var segundo =
  localStorage.getItem("segundo") == null
    ? 0
    : parseInt(localStorage.getItem("segundo"));
var minuto =
  localStorage.getItem("minuto") == null
    ? 0
    : parseInt(localStorage.getItem("minuto"));
var hora =
  localStorage.getItem("hora") == null
    ? 0
    : parseInt(localStorage.getItem("hora"));
var segundoP = ":";

var counterBottunStart = 0;
localStorage.setItem("counterBottunStart",counterBottunStart);

var clock;
var dHora = document.getElementById("hora");
var dMinito = document.getElementById("minuto");
var dSegundo = document.getElementById("segundo");
var dMilesima = document.getElementById("milesima");
var segundoP = document.getElementById("segundoP");
var botonStart = document.getElementById("start");
var botonReset = document.getElementById("reset");
var botonPause = document.getElementById("pause");

//Verica valores 
function checkout() {
  if (localStorage.getItem("milesima") == null) {
    localStorage.setItem("milesima", 0);
    localStorage.setItem("segundo", 0);
    localStorage.setItem("minuto", 0);
    localStorage.setItem("hora", 0);
  } else {
    milesima = parseInt(localStorage.getItem("milesima"));
    segundo = parseInt(localStorage.getItem("segundo"));
    minuto = parseInt(localStorage.getItem("minuto"));
    hora = parseInt(localStorage.getItem("hora"));
  }
  dSegundo.innerHTML = parseInt(localStorage.getItem("segundo"));
  segundo;
  dMilesima.innerHTML = parseInt(localStorage.getItem("milesima"));
  dMinito.innerHTML = parseInt(localStorage.getItem("minuto"));
  dHora.innerHTML = parseInt(localStorage.getItem("hora"));
  
}

checkout();

function startTime() {
  checkout();
  milesima = parseInt(localStorage.getItem("milesima")) + 1;
  localStorage.setItem("milesima", milesima);

  if (milesima == 10) {
    segundo = segundo + 1;
    milesima = 0;
    localStorage.setItem("segundo", segundo);
    localStorage.setItem("milesima", milesima);
  

    if (segundo == 60) {
      segundo = 0;
      minuto = minuto + 1;
      localStorage.setItem("segundo", segundo);
      localStorage.setItem("milesima", milesima);
      localStorage.setItem("minuto", minuto);
     
    }

    if (minuto == 60) {
      hora = hora + 1;
      segundo = 0;
      minuto = 0;
      localStorage.setItem("segundo", segundo);
      localStorage.setItem("milesima", milesima);
      localStorage.setItem("minuto", minuto);
      localStorage.setItem("hora", hora);
      
    }
  }
}

function star() {

    if(parseInt(localStorage.getItem("counterBottunStart"))==0){
        localStorage.setItem("counterBottunStart" ,"1");
        clock = setInterval(startTime, 100);
    }else{
        alert("Ya se inicio el contador");
    }

    console.log("star"+counterBottunStart);
    
   
}




botonStart.onclick = star;

function reset() {
  milesima = 0;
  localStorage.setItem("milesima", milesima);
  dMilesima.innerHTML = milesima;

  segundo = 0;
  localStorage.setItem("segundo", segundo);
  dSegundo.innerHTML = segundo;

  minuto = 0;
  localStorage.setItem("minuto", minuto);
  dSegundo.innerHTML = minuto;

  hora = 0;
  localStorage.setItem("hora", hora);
  dHora.innerHTML = hora;
  localStorage.setItem("counterBottunStart", 0);
  clearInterval(clock);
  console.log("reset"+counterBottunStart)
}

function pause() {
    localStorage.setItem("counterBottunStart", 0);
  clearInterval(clock);
  console.log("pause"+counterBottunStart)
}

botonReset.onclick = reset;
botonPause.onclick = pause;
