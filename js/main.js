// Visualizzare in pagina 5 numeri casuali. 
// facciamo partire un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri
// il software dirà quanti e quali dei numeri da indovinare sono stati individuati.


// aggiungo il tempo (30 sec) per far sparire i numeri 
setTimeout(preGame, 30000);

function preGame(){
    const numeriCausali = document.getElementById('numeriCasuali');
    numeriCausali.classList.add('d-none');

    const risposta = document.getElementById('risposta');
    risposta.classList.remove('d-none');
}

//voglio generare 5 numeri casuali
const numeriRandom =  []; // creo un array vuoto
while (numeriRandom.length < 5) { // ciclo 5 numeri tramite la funzione random
  let randomN = random(1, 100);
  if (numeriRandom.includes(randomN) == false) {//se nell'arrey non è incluso quel numero
    numeriRandom.push(randomN); // lo pusho dentro l array
  }
}

// creo una costante per richiamare tramite id il mio div nell'HTML dove stamperò i 5 numeri casuali
//già che ci sono li stampo anche nella console
console.log(numeriRandom);
const numeriCasuali = document.querySelector('#numeriCasuali');
numeriCasuali.innerHTML = numeriRandom;


let countdown = setTimeout(playGame,31000); // aspetto 31 secondi e poi passo alla funzione Playgame

let numeriUtente = []; // creo array vuoto per i numeri dell utente

function playGame() {
  alert('Sono passati 30 secondi, ora dovrai inserire i numeri che ricordi!');
  for (let i = 0; i < 5; i++) {//ciclo i numeri dell'utente
      let inserisciNumeroUtente = parseInt(prompt('Inserisci il numero ' + (i + 1)));
      if (numeriRandom.includes(inserisciNumeroUtente)) {//se nell'arrey è incluso quel numero
        numeriUtente.push(inserisciNumeroUtente); // pusho in array numeriutente quel numero
      }
    } 
      // stampo i numeri che ho inserito, piu la lunghezza complessiva dei numeri che ho indovinato
    alert(numeriUtente + ' Ti sei ricordato ' +  numeriUtente.length  + ' numeri')
  
}

//funzione genera numeri random
function random(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  }







