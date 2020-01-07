var listaMail = ['pippo430@gmail.com', 'topolino333@gmail.com', 'pluto763@gmail.com', 'minnie888@gmail.com', 'paperino222@gmail.com'];

var emailUtente = prompt('Inserisci la tua e-mail');

var trovato = false;

for (var i = 0; i <= listaMail.length; i++) {
  console.log(listaMail[i]);

  if (emailUtente == listaMail[i]) {
    var trovato = true;
  }
}

if (trovato == true) {
  alert('la sua email é presente nella lista');
} else {
  alert('la sua email non é presente');
}
