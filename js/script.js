// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50
var array = [];

for (var i = 0; i < 16; i++){
 var casualNumber = Math.floor(Math.random() * (100 - 1) + 1);
 array.push(casualNumber);

}
console.log(array);


do{
  var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
}while (0 == numeroUtente || 100 < numeroUtente)
console.log(numeroUtente);

for (var i = 0; i < array.length; i++){
  if(numeroUtente == array[i]){
   alert('partita terminata');
 }
}
