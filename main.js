const main = document.querySelector('main'); /*recupero il main salvandolo in una costante per il reset*/
document.getElementById('play').addEventListener('click', play); /*Recupero il button per evocare la funzione play al click*/


function play(){
  reset(); /*Invoco la funzione reset ogni volta che viene evocata la funzione play*/
  const difficulty = document.getElementById('difficulty').value; /*recupero il value della select*/
  const gridDifficulty = [100, 81, 49]; /*creo un array con i 3 possibili numeri di celle*/
  const cellNumbers = gridDifficulty[difficulty]; /*assegno ad ogni value(0, 1, 2) il corrispondente numero di celle e lo salvo in una costante*/

  generateGrid(cellNumbers); /*funzione che genera la griglia*/
}

function generateGrid(cellNumbers){
  const grid = document.createElement('div'); /*creo il div grid*/
  grid.className = 'grid';  /*assegno al div grid la classe grid*/

  for(let i = 1; i <= cellNumbers; i++){ /*ciclo for per creare le celle*/
    const cell = generateCell(i, cellNumbers); /*evoco una funzione per generare le celle*/
    grid.append(cell); /*appendo l'elemento cell a l'elememto grid*/
  }

  main.append(grid); /*appendo al main l'elemento grid*/
}

function generateCell(i, cellNumbers){
  const cell = document.createElement('div'); /*creo l'elemento cell*/
  cell.className = 'cell'; /*assegno la classe cell all'elemento cell*/
  cell.classList.add('square' + cellNumbers); /*aggiungo la classe square + il numero delle celle (square100 / square81 / square49) */
  cell.innerHTML = `<span>${i}</span>`; /*aggiungo il numero della cella con uno span*/
  cell.addEventListener('click', clickColor); /*al click della cella evoco una funzione che ne cambi il colore*/
  
  return cell;
}


function clickColor(){
  this.classList.add('clicked'); /*aggiungo la classe clicked che cambia il colore*/
}










function reset(){
  main.innerHTML = ''; /*svuoto il main*/
}
