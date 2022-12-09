"use strict";

var clock;
var dHour = document.getElementById("hour");
var dMinute = document.getElementById("minute");
var dSecond = document.getElementById("second");
var dThousandth = document.getElementById("thousandth");
var secondP = document.getElementById("secondP");
var buttonStart = document.getElementById("start");
var botonReset = document.getElementById("reset");
var botonPause = document.getElementById("pause");

var thousandth =
  localStorage.getItem("thousandth") == null
    ? 0
    : parseInt(localStorage.getItem("thousandth"));
var second =
  localStorage.getItem("second") == null
    ? 0
    : parseInt(localStorage.getItem("second"));
var minute =
  localStorage.getItem("minute") == null
    ? 0
    : parseInt(localStorage.getItem("minute"));
var hour =
  localStorage.getItem("hour") == null
    ? 0
    : parseInt(localStorage.getItem("hour"));
var secondP = ":";

var counterBottunStart = 0;
localStorage.setItem("counterBottunStart", counterBottunStart);

//Verica valores
const checkout = () => {
  if (localStorage.getItem("thousandth") == null) {
    localStorage.setItem("thousandth", 0);
    localStorage.setItem("second", 0);
    localStorage.setItem("minute", 0);
    localStorage.setItem("hour", 0);
  } else {
    thousandth = parseInt(localStorage.getItem("thousandth"));
    second = parseInt(localStorage.getItem("second"));
    minute = parseInt(localStorage.getItem("minute"));
    hour = parseInt(localStorage.getItem("hour"));
  }
  dSecond.innerHTML = parseInt(localStorage.getItem("second"));
  second;
  dThousandth.innerHTML = parseInt(localStorage.getItem("thousandth"));
  dMinute.innerHTML = parseInt(localStorage.getItem("minute"));
  dHour.innerHTML = parseInt(localStorage.getItem("hour"));
};




const  startTime=()=> {
  checkout();
  thousandth = parseInt(localStorage.getItem("thousandth")) + 1;
  localStorage.setItem("thousandth", thousandth);

  if (thousandth == 10) {
    second = second + 1;
    thousandth = 0;
    localStorage.setItem("second", second);
    localStorage.setItem("thousandth", thousandth);

    if (second == 60) {
      second = 0;
      minute = minute + 1;
      localStorage.setItem("second", second);
      localStorage.setItem("thousandth", thousandth);
      localStorage.setItem("minute", minute);
    }

    if (minute == 60) {
      hour = hour + 1;
      second = 0;
      minute = 0;
      localStorage.setItem("second", second);
      localStorage.setItem("thousandth", thousandth);
      localStorage.setItem("minute", minute);
      localStorage.setItem("hour", hour);
    }
  }
}

const start=()=> {
  if (parseInt(localStorage.getItem("counterBottunStart")) == 0) {
    localStorage.setItem("counterBottunStart", "1");
    clock = setInterval(startTime, 100);
  } else {
    alert("Ya se inicio el contador");
  }

  console.log("star" + counterBottunStart);
}



const reset=()=> {
  thousandth = 0;
  localStorage.setItem("thousandth", thousandth);
  dThousandth.innerHTML = thousandth;

  second = 0;
  localStorage.setItem("second", second);
  dSecond.innerHTML = second;

  minute = 0;
  localStorage.setItem("minute", minute);
  dSecond.innerHTML = minute;

  hour = 0;
  localStorage.setItem("hour", hour);
  dHour.innerHTML = hour;
  localStorage.setItem("counterBottunStart", 0);
  clearInterval(clock);
  console.log("reset" + counterBottunStart);
}

function pause() {
  localStorage.setItem("counterBottunStart", 0);
  clearInterval(clock);
  console.log("pause" + counterBottunStart);
}



buttonStart.onclick = start;
checkout();
botonReset.onclick = reset;
botonPause.onclick = pause;
