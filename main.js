import { Enemy } from './enemy.js';
import { MainCharacter } from './mainCharacter.js';
import { MapCreator } from './mapCreator.js';

let map1 = [

  //Leyenda: 0 = muro
  //         1 = bolita
  //         2 = pasillo
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


window.addEventListener('keydown', function (e) { // Cambiamos la propiedad 'direction' de la serpiente según la tecla pulsada.
  switch (e.key) {
    case 'ArrowUp':
      pacman.direction = 'up'

      break
    case 'ArrowDown':
      pacman.direction = 'down'

      break
    case 'ArrowLeft':
      pacman.direction = 'left'

      break
    case 'ArrowRight':
      pacman.direction = 'right'

      break
  }
})

let mapaAcrear = new MapCreator(map1)
mapaAcrear.createMap();
let pacman = new MainCharacter();
let enemy1 = new Enemy(12, 9, 1, pacman);
let enemy2 = new Enemy(13, 9, 2, pacman);
let enemy3 = new Enemy(12, 11, 3, pacman);
let enemy4 = new Enemy(13, 11, 4, pacman);


function Game() {

  let self = this

  this.play = function () {

    pacman.movement();
    enemy1.movement();
    enemy2.movement();
    enemy3.movement();
    enemy4.movement();
    self.gameOver();
    self.victory();
  }
  //ABIAN
  //Pantalla de inicio (82-92)
  let button = document.getElementById('start-btn')
  let menu = document.getElementById('start-menu')
  let timerId
  button.addEventListener('click', function (e) {
    let button = document.getElementById('start-btn')
    button.style.visibility = 'hidden'
    menu.style.visibility = 'hidden'
    timerId = setInterval(game.play,300);

  })


  //pantalla de Game Over (98-106)
  let gameOverScreen = document.getElementById('game-over-screen')
  let gameOver = document.getElementById('game-over')
  let restartBtn = document.getElementById('restart-btn')
  this.gameOver = function () {
    if (pacman.lives <= 0) {
      gameOverScreen.style.visibility = 'visible'
      gameOver.style.visibility = 'visible'
      restartBtn.style.visibility = 'visible'
      clearInterval(timerId)
    }
    //Boton de Restart tras el Game Over (falta que se reinicie el mapa)
    restartBtn.addEventListener('click', function (e) {
      gameOverScreen.style.visibility = 'hidden'
      gameOver.style.visibiliy = 'hidden'
      restartBtn.style.visibility = 'hidden'
      button.style.visibility = 'visible'
      menu.style.visibility = 'visible'
    })
    /*this.gameOver = function () {
      if (pacman.lives <= 0) {
        clearInterval(timerId)
        window.alert('Game Over')
      }
    }*/
  }
  let victoryContainer = document.getElementById('victory-container')
  console.log(pacman.score)
  this.victory = function() {
    console.log(pacman.score)
    if(pacman.score > 20000){
      
      victoryContainer.style.visibility = 'visible'
      clearInterval(timerId)
    }
  }


}


let game = new Game();

//let timerId = setInterval(game.play, 1000);


/*
mapaAcrear.createMap();

//document.getElementsByClassName(`row${mainCharacter.pos.x} bolita`)
let pacman = new MainCharacter();
//pacman.insertMc();

let enemy1 = new Enemy(12, 9, 1, pacman);
//enemy1.insertEnemy();

//let timerId1 = setInterval(enemy1.movement, 1000);

let enemy2 = new Enemy(13, 9, 2, pacman);
//enemy2.insertEnemy()
//let timerId2 = setInterval(enemy2.movement, 1000);


let enemy3 = new Enemy(12, 11, 3, pacman);
//enemy3.insertEnemy();
//let timerId3 = setInterval(enemy3.movement, 1000);


let enemy4 = new Enemy(13, 11, 4, pacman);
//enemy4.insertEnemy();
//let timerId4 = setInterval(enemy4.movement, 1000);*/