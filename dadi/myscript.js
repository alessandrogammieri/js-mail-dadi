/* Gioco dei dadi, chi fa di più vince;
riguarda proprio lo scenario base,
quindi ci saranno 2 lanci di dadi e
poi noi dovremmo stampare a schermo
chi ha vinto, se ha vinto qualcuno. */


// Dichiarazione delle variabili
var x, y, risultato;

// Invocazione delle variabili
  // Lancio
function myFunction() {
  x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("first").innerHTML = x;
  y = Math.floor((Math.random() * 6) + 1);
  document.getElementById("second").innerHTML = y;

  // Si verifica quale numero ha vinto o se c'è stato un pareggio
  if (x > y) {
    risultato = "Il Primo concorrente ha vinto";
  } else if (x == y) {
      risultato = "Pareggio";
    } else {
      risultato = "Il Secondo concorrente ha vinto";
    }

  // Si comunica chi ha vinto o se c'è stato un pareggio
  document.getElementById('vincitore').innerHTML = "Risultato: " + risultato;
}
