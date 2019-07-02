/* Chiedi all’utente la sua email,
controlla che sia nella lista di
chi può accedere e stampa un messaggio
appropriato; */

// Dichiarazione delle variabili
// var trovato, yourmail, email;
//
// // Invocazione delle variabili
//   // Variabile standart "trovato"
// trovato = false
//
//   // Chiediamo all'utente il suo indirizzo Email
// yourmail = prompt("Inserisci il tuo indirizzo email");
//
//   // Lista delle nostre mail
// email = ["alexgam@live.it", "alefra@gmail.com", "alessandrogammieri@gmail.com"];
//
//   // Verifichiamo se l'indirizzo è presente nella nostra lista
// for (var i = 0; i < email.length; i++) {
//   if (email[i] == yourmail) {
//     trovato = true;
//   }
// }
//
//   // Comunichiamo all'utente se sarà o meno invitato alla festa
// if (trovato == true) {
//   document.getElementById('party').innerHTML = "Sei invitato";
// } else {
//   document.getElementById('party').innerHTML = "Sarà per la prossima";
// }

// SECONDA SOLUZIONE -----------------------------------------------------------

// Dichiarazione delle variabili
var sms, yourmail, email;

// Invocazione delle variabili
  // Variabile standart "sms"
sms = "Sarà per la prossima";

  // Chiediamo all'utente il suo indirizzo Email
yourmail = prompt("Inserisci il tuo indirizzo email");

  // Lista delle nostre mail
email = ["alexgam@live.it", "alefra@gmail.com", "alessandrogammieri@gmail.com"];

  // Verifichiamo se l'indirizzo è presente nella nostra lista
for (var i = 0; i < email.length; i++) {
  if (email[i] == yourmail) {
    sms = "Sei invitato";
  }
}

  // Comunichiamo all'utente se sarà o meno invitato alla festa
document.getElementById('party').innerHTML = sms;
