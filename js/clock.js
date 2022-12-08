var milesima = 0;
var segundo = 00;
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
var botonPause = document.getElementById("pause");


dHora.innerHTML = hora;
dMinito.innerHTML = minuto;
dSegundo.innerHTML = segundo;
dMilesima.innerHTML = milesima;



function startTime() {
    if (localStorage.getItem("milesima") == null) {
        localStorage.setItem("milesima", milesima);
        localStorage.setItem("segundo", segundo);
        localStorage.setItem("minuto", minuto);
        localStorage.setItem("hora", hora)
    }else{
         milesima =parseInt(localStorage.getItem("milesima"));
         segundo =parseInt(localStorage.getItem("segundo"));
         minuto =parseInt(localStorage.getItem("minuto"));
         hora =parseInt(localStorage.getItem("hora"));
    }


    milesima = parseInt(localStorage.getItem("milesima")) + 1;
    localStorage.setItem("milesima", milesima);
    dMilesima.innerHTML = milesima;
    console.log(milesima);


    if (milesima == 10) {
        segundo = segundo + 1;
        milesima = 0;
        localStorage.setItem("segundo", segundo);
        localStorage.setItem("milesima", milesima);
        dSegundo.innerHTML = parseInt(localStorage.getItem("segundo"));
        dMilesima.innerHTML =parseInt(localStorage.getItem("milesima"));
       

        if (segundo == 60) {
            segundo = 0;
            minuto = minuto + 1;
            localStorage.setItem("segundo", segundo);
            localStorage.setItem("milesima", milesima);
            localStorage.setItem("minuto", minuto);
            dSegundo.innerHTML = segundo;
            dMilesima.innerHTML = milesima;
            dMinito.innerHTML = minuto;


        }

        if (minuto == 60) {
            hora = hora + 1;
            segundo = 0;
            minuto = 0;
            localStorage.setItem("segundo", segundo);
            localStorage.setItem("milesima", milesima);
            localStorage.setItem("minuto", minuto);
            localStorage.setItem("hora", hora);
            dSegundo.innerHTML = parseInt(localStorage.getItem("segundo"));segundo;
            dMilesima.innerHTML =parseInt(localStorage.getItem("milesima")); ;
            dMinito.innerHTML =parseInt(localStorage.getItem("minuto")); ;
            dHora.innerHTML = parseInt(localStorage.getItem("hora"));;


        }
    }

}



function star() {
    clock = setInterval(startTime, 100);
}


botonStart.onclick = star;






function reset() {
    milesima = 0;
    localStorage.setItem("milesima", milesima)
    dMilesima.innerHTML = milesima;


    segundo = 0;
    localStorage.setItem("segundo", segundo)
    dSegundo.innerHTML = segundo;

    minuto = 0;
    localStorage.setItem("minuto", minuto)
    dSegundo.innerHTML = minuto;

    hora = 0;
    localStorage.setItem("hora", hora)
    hora.innerHTML = hora;

    clearInterval(clock);

}

function pause(){
    clearInterval(clock);
}


botonReset.onclick = reset;
botonPause.onclick = pause;