import {Enemy} from './enemy.js';
import {MainCharacter} from './mainCharacter.js';

let map1 = [

  //Leyenda: 0 = muro
  //         1 = bolita
  //         2 = pasillo
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function createMap(map1) {

      let mapContainer = document.querySelector('#mapContainer');
      let table = document.createElement('table');

      map1.forEach(function (row, idx) {
          let tr = document.createElement('tr');
          tr.setAttribute("class", `row${idx}`);
          row.forEach(function (col, idx) {

              let td = document.createElement('td');
              if (col === 1) {
                  td.classList.add(`col${idx}`, 'pasillo', 'bolita');
              } else if (col === 0) {
                  td.classList.add(`col${idx}`, `blue`);
              } else if (col === 2) {
                  td.classList.add(`col${idx}`, `pasillo`);
              }
              tr.appendChild(td);
          });
          table.appendChild(tr);
      });
      mapContainer.appendChild(table);
  }





window.addEventListener('keydown', function (e) { // Cambiamos la propiedad 'direction' de la serpiente según la tecla pulsada.
  switch (e.key) {
    case 'ArrowUp':
      pacman.direction = 'up'
      pacman.movement();
      break
    case 'ArrowDown':
      pacman.direction = 'down'
      pacman.movement();
      break
    case 'ArrowLeft':
      pacman.direction = 'left'
      pacman.movement();
      break
    case 'ArrowRight':
      pacman.direction = 'right'
      pacman.movement();
      break
  }
})
createMap(map1)

//document.getElementsByClassName(`row${mainCharacter.pos.x} bolita`)
let pacman = new MainCharacter();
pacman.insertMc();

let enemy1 = new Enemy(12, 9, 1,pacman);
enemy1.insertEnemy();

let timerId1 = setInterval(enemy1.movement, 1000);

let enemy2 = new Enemy(13, 9, 2,pacman);
enemy2.insertEnemy();
let timerId2 = setInterval(enemy2.movement, 1000);


let enemy3 = new Enemy(12, 11, 3,pacman);
enemy3.insertEnemy();
let timerId3 = setInterval(enemy3.movement, 1000);


let enemy4 = new Enemy(13, 11, 4,pacman);
enemy4.insertEnemy();
let timerId4 = setInterval(enemy4.movement, 1000);