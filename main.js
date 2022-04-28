const main = document.querySelector('main'); //recupero il main salvandolo in una costante per il reset//
document.getElementById('play').addEventListener('click', play); //Recupero il button per evocare la funzione play al click//
let bombs = [];
let c = 0;

const N_BOMBS = 1;

function play(){
  reset(); //Invoco la funzione reset ogni volta che viene evocata la funzione play//

  const difficulty = document.getElementById('difficulty').value; //recupero il value della select//
  const gridDifficulty = [100, 81, 49]; //creo un array con i 3 possibili numeri di celle//
  const cellNumbers = gridDifficulty[difficulty]; //assegno ad ogni value(0, 1, 2) il corrispondente numero di celle e lo salvo in una costante//

  generateGrid(cellNumbers); //funzione che genera la griglia//

  bombs = generateBombs(cellNumbers); //richiamo una funzione che generi le bombe//
  console.log(bombs);
}

function generateGrid(cellNumbers){
  const grid = document.createElement('div'); //creo il div grid//
  grid.className = 'grid';  //assegno al div grid la classe grid//

  for(let i = 1; i <= cellNumbers; i++){ //ciclo for per creare le celle//
    const cell = generateCell(i, cellNumbers); //evoco una funzione per generare le celle//
    grid.append(cell); //appendo l'elemento cell a l'elememto grid//
  }

  main.append(grid); //appendo al main l'elemento grid//
}

function generateCell(i, cellNumbers){
  const cell = document.createElement('div'); //creo l'elemento cell//
  cell.className = 'cell'; //assegno la classe cell all'elemento cell//
  cell.classList.add('square' + cellNumbers); //aggiungo la classe square + il numero delle celle (square100 / square81 / square49) //
  cell.innerHTML = `<span>${i}</span>`; //aggiungo il numero della cella con uno span//
  cell.myNumber = i;
  cell.addEventListener('click', clickCell); //al click della cella evoco una funzione che scatena dei processi di fine gioco//
  
  return cell;
}


function generateBombs(cellNumbers){
  arrayBombs = []; //dichiaro un'array che conterrà le bombe//

  
  while(arrayBombs.length < N_BOMBS){ //ciclo while in cui vengono generate le bombe fino a quando non sono 16//
    bombs = random(1, cellNumbers); //richiamo una funzione che mi generi randomicamente in numeri delle bombe
    if(!arrayBombs.includes(bombs)){ //se l'array non include già la bomba allora la pusho
        arrayBombs.push(bombs);
      }
    }

  return arrayBombs;
}

function clickCell(){
  if(!bombs.includes(this.myNumber)){
    c++;
    this.classList.add('clicked'); //aggiungo la classe clicked che cambia il colore della cella non bomba
    console.log('ok', this.myNumber);
    const cells = document.getElementsByClassName('cell');
    if(c === cells.length - N_BOMBS){
      console.log('vittoria');
      main.innerHTML = `<h1 class="mt-5">Hai vinto!</h1>`
    }
  }else{
    endGame(this);
  }
}

//funzione che stampa un messaggio quando si perde, e che colora la bomba di marrone
function endGame(b){  
  console.log('fine');
  b.classList.add('bomb');

  main.innerHTML += `<h2 class="mt-5">Numero di tentativi: ${c}</h2>`
  showBombs();
}

function showBombs(){ //funziona che colora tutte le bombe quando ne viene "calpestata" una
  const cells = document.getElementsByClassName('cell');
  for(let i = 0; i < cells.length; i++){
    if(bombs.includes(i + 1)){
      cells[i].classList.add('bomb');
    }
  }
  console.log(cells);
}


function random(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reset(){
  main.innerHTML = ''; //svuoto il main//
}