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

function createMap(mapa) {
  let mapContainer = document.querySelector('#mapContainer');
  let table = document.createElement('table');

  mapa.forEach(function (row, idx) {
    let tr = document.createElement('tr');
    tr.setAttribute("class", `row${idx}`);
    row.forEach(function (col, idx) {

      //HAY QUE CAMBIAR LO DE CLASS Y USAR CLASSLIST ADD O ALGO ASI
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

//ENEMY
function Enemy(x, y, number) {
  this.pos = {
    x: x,
    y: y
  }

  let self = this

  this.number = number

  this.direction = ''

  this.insertEnemy = function () {
    let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
    startPosition.classList.add(`enemy${this.number}`)
  }

  this.movement = function () {
    let directions = ['up', 'down', 'left', 'right'];
    this.direction = directions[Math.floor(Math.random() * 4)];

    console.log(`Enemy${this.number}`)
    //Pisción actual del enemigo cuando llamas a movement
    let positionEnemy = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
    
    let newPosition;
    switch (this.direction) {
      case 'up':
        //Posición a comprobar
        newPosition = document.querySelector(`.row${this.pos.x - 1} > .col${this.pos.y}`);

        if (newPosition.classList.contains('pasillo') ) {
          //Removemos la clase enemigo de la posicion que está antes de moverse
          positionEnemy.classList.remove(`enemy${this.number}`)
          //Añadimos a la siguiente posición, la clase enemigo correspondiente
          newPosition.classList.add(`enemy${this.number}`)
          //Actualizamos la posición nueva que tiene el enemigo al moverse
          this.pos.x -= 1          
        }
        break;

      case 'down':
        newPosition = document.querySelector(`.row${this.pos.x + 1} > .col${this.pos.y}`);
        if (newPosition.classList.contains('pasillo')) {
          //Removemos la clase enemigo de la posicion que está antes de moverse
          positionEnemy.classList.remove(`enemy${this.number}`)
          //Añadimos a la siguiente posición, la clase enemigo correspondiente
          newPosition.classList.add(`enemy${this.number}`)
          //Actualizamos la posición nueva que tiene el enemigo al moverse
          this.pos.x += 1     
        }
        break;
      case 'left':
        newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y - 1}`);
        if (newPosition.classList.contains('pasillo')) {
          //Removemos la clase enemigo de la posicion que está antes de moverse
          positionEnemy.classList.remove(`enemy${this.number}`)
          //Añadimos a la siguiente posición, la clase enemigo correspondiente
          newPosition.classList.add(`enemy${this.number}`)
          //Actualizamos la posición nueva que tiene el enemigo al moverse
          this.pos.y -= 1   
        }
        break;
      case 'right':
        newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y + 1}`);
        if (newPosition.classList.contains('pasillo')) {
          //Removemos la clase enemigo de la posicion que está antes de moverse
          positionEnemy.classList.remove(`enemy${this.number}`)
          //Añadimos a la siguiente posición, la clase enemigo correspondiente
          newPosition.classList.add(`enemy${this.number}`)
          //Actualizamos la posición nueva que tiene el enemigo al moverse
          this.pos.y += 1   
        }
        break;
    }
  }
}
//MAIN CHARACTER
function MainCharacter() {
  this.pos = {
    x: 5,
    y: 4
  }

  this.direction = ''

  this.insertMc = function () {
    let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
    startPosition.classList.add('mainCharacter')
  }

  this.movement = function () {
    
    let positionMc = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
    let newPosition
    switch (this.direction) {
      case 'up':
        //Cambio la newPosition a la nueva que le he dado con la tecla up,
        // pero no la cambio en el personaje
        newPosition = document.querySelector(`.row${this.pos.x - 1} > .col${this.pos.y}`);
        //Compruebo que si la siguiente casilla tiene la clase bolita, si la tiene , en la actual
        //posicion remuevo la clase mainCharacter y añado la clase pasillo. Luego como ya se que la siguiente
        //me puedo mover, en la nueva posicion le quito la clase bolita y añado la del mainCharacter
        //dando así el efecto de moverse únicamente si en la siguiente casilla hay una bolita
        //¡¡¡¡¡¡¡¡¡NOS FALTA COMPROBAR SI LA SIGUIENTE CASILLA ES PASILLO LIBRE Y SI ES MURO, LO HACEMOS MAÑANA!!!!!
        if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
          positionMc.classList.remove('mainCharacter');


          this.pos.x -= 1

          newPosition.classList.remove('bolita');

          newPosition.classList.add('mainCharacter')
        }
        console.log(newPosition)
        break
      case 'down':
        newPosition = document.querySelector(`.row${this.pos.x + 1} > .col${this.pos.y}`);

        if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
          newPosition.classList.remove('bolita');
          newPosition.classList.add('mainCharacter')

          positionMc.classList.remove('mainCharacter');


          this.pos.x += 1


        }
        break
      case 'left':
        newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y - 1}`);

        if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
          positionMc.classList.remove('mainCharacter');


          this.pos.y -= 1

          newPosition.classList.remove('bolita');
          newPosition.classList.add('mainCharacter')
        }
        break
      case 'right':
        newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y + 1}`);

        if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
          positionMc.classList.remove('mainCharacter');


          this.pos.y += 1

          newPosition.classList.remove('bolita');
          newPosition.classList.add('mainCharacter')
        }
        break
      default:
        'right'
        break;
    }
  }
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

let enemy1 = new Enemy(12, 9, 1);
enemy1.insertEnemy();

let timerId1 = setInterval(enemy1.movement, 1000);

/*let enemy2 = new Enemy(13, 9, 2);
enemy2.insertEnemy();
let timerId2 = setInterval(enemy2.movement, 1000);


let enemy3 = new Enemy(12, 11, 3);
enemy3.insertEnemy();
let timerId3 = setInterval(enemy3.movement, 1000);


let enemy4 = new Enemy(13, 11, 4);
enemy4.insertEnemy();
let timerId4 = setInterval(enemy4.movement, 1000);*/