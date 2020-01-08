var NumeroCasuale1 = Math.floor(Math.random() * 6 + 1);
document.getElementById('dado1').innerHTML = NumeroCasuale1
var NumeroCasuale2 = Math.floor(Math.random() * 6 + 1);
document.getElementById('dado2').innerHTML = NumeroCasuale2
if (NumeroCasuale1 > NumeroCasuale2) {
  document.getElementById('esito').innerHTML = 'Vince il dado a sinistra';
} else if (NumeroCasuale2 > NumeroCasuale1) {
  document.getElementById('esito').innerHTML = 'Vince il dado a destra';
} else {
  document.getElementById('esito').innerHTML = 'Pareggio';
}
