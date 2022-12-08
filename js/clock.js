var milesima = 0;
var segundo = 0;
var minuto = 0;
var hora = 0;
var segundoP = ":";



var dHora = document.getElementById("hora");
var dMinito = document.getElementById("minuto");
var dSegundo = document.getElementById("segundo");
var dMilesima = document.getElementById("milesima");
var segundoP = document.getElementById("segundoP");
var botonStart = document.getElementById("start");
var botonReset = document.getElementById("reset");


dHora.innerHTML = hora;
dMinito.innerHTML = hora;
dSegundo.innerHTML = hora;
dMilesima.innerHTML = hora;



function startTime
    () {
    if (localStorage.getItem("milesima") == null) {
        localStorage.setItem("milesima", milesima);
    }

    milesima = parseInt(localStorage.getItem("milesima")) + 1;
    localStorage.setItem("milesima", milesima);
    dMilesima.innerHTML = milesima;
    console.log(milesima);

}



function star(){
    setInterval(startTime, 1000);
}


botonStart.onclick= star;






 function reset(){
    milesima=0;
    localStorage.setItem("milesima", milesima)
 }

 botonStart.onclick= reset;