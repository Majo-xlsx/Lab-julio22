let DW = 0;
let JS = 0;
let DB = 0;

function logTotal() {
  let total = DW + JS + DB;
  if (total % 5 === 0) {
    console.log("Total acumulado de votos:", total);
  }
}

function votosDW() {
    alert("¡Gracias por tu voto!");
    DW++;
    document.getElementById("contDW").innerText = DW;
    logTotal();
}
function votosJS() {
    alert("¡Gracias por tu voto!");
    JS++;
    document.getElementById("contJS").innerText = JS;
    logTotal();
}
function votosDB() {
    alert("¡Gracias por tu voto!");
    DB++;
    document.getElementById("contDB").innerText = DB;
    logTotal();
}