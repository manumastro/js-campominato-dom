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

  for(let i = 1; i <= cellNumbers; i++){ /*ciclo for per creare la griglia in base al numero di celle*/
    const cell = document.createElement('div'); /*creo il div cella*/
    cell.className = 'cell square' + cellNumbers; /*assegno a cell la classe cell, square(con il numero di celle*/
    cell.innerHTML = `<span>${i}</span>`; /*inserisco il numero con uno span per ogni cell*/
    grid.append(cell); /*appendo a grid l'elemento cell*/

  console.log(cell);
  }

  main.append(grid); /*appendo al main l'elemento grid*/
}

function reset(){
  main.innerHTML = ''; /*svuoto il main*/
}