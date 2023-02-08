import { Enemy } from './enemy.js';
import { MainCharacter } from './mainCharacter.js';
import { MapCreator } from './mapCreator.js';

// 0 = wall
// 1 = pc
// 2 = hall
let map = [
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
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0],
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
      developer.direction = 'up'

      break
    case 'ArrowDown':
      developer.direction = 'down'

      break
    case 'ArrowLeft':
      developer.direction = 'left'

      break
    case 'ArrowRight':
      developer.direction = 'right'

      break
  }
})

let mapToCreate = new MapCreator(map)
mapToCreate.createMap();
let developer = new MainCharacter();
let enemy1 = new Enemy(12, 9, 1, developer);
let enemy2 = new Enemy(13, 9, 2, developer);
let enemy3 = new Enemy(12, 11, 3, developer);
let enemy4 = new Enemy(13, 11, 4, developer);


function Game() {

  let self = this

  this.backGroundMusic = new Audio('./assets/sounds/backGroundMusic.mp3')

  let scoreHtml = document.getElementById('currentScore')
  let maxScoreHtml = document.getElementById('maxScore')
  let livesHtml = document.getElementById('lives')

  this.restartMap = function () {
    clearInterval(timerId)
    mapToCreate.removeMap();
    mapToCreate.createMap();
    enemy1 = new Enemy(12, 9, 1, developer);
    enemy2 = new Enemy(13, 9, 2, developer);
    enemy3 = new Enemy(12, 11, 3, developer);
    enemy4 = new Enemy(13, 11, 4, developer);


    developer.lives = 3;
    developer.score = 0
    developer.pos = { x: 5, y: 4 }
    let startPosition = document.querySelector(`.row${5} > .col${4}`);
    startPosition.classList.add('mainCharacter')
    lives.innerText = 3;
    scoreHtml.innerText = 0;
    maxScoreHtml.innerText = 0;
    timerId = setInterval(game.play, 1000);
  }

  this.play = function () {

    developer.movement();
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
    self.backGroundMusic.volume = 0.2;
    self.backGroundMusic.play();
    timerId = setInterval(game.play, 1000);
  })


  function visibilityVictory(html,visibility){
    if(visibility === 'visible'){
      html.style.visibility = 'visible';
    }else if(visibility === 'hidden'){
      html.style.visibility = 'hidden';
    }
  }
  function visibilityGameOver(html1,html2,html3,visibility){
    if(visibility === 'visible'){
      html1.style.visibility = 'visible';
      html2.style.visibility = 'visible';
      html3.style.visibility = 'visible';
    }else if(visibility === 'hidden'){
      html1.style.visibility = 'hidden';
      html2.style.visibility = 'hidden';
      html3.style.visibility = 'hidden';
    }
  }



  let gameOverScreen = document.getElementById('game-over-screen');
  let gameOver = document.getElementById('game-over');
  let restartBtn = document.getElementById('restart-btn');

  this.gameOver = function () {
    if (developer.lives <= 0) {
      self.backGroundMusic.pause();
      developer.gameOverSound.play();
      visibilityGameOver(gameOverScreen,gameOver,restartBtn,'visible');
      clearInterval(timerId);
    }

    restartBtn.addEventListener('click', function (e) {
      visibilityGameOver(gameOverScreen,gameOver,restartBtn,'hidden');
      self.restartMap();
      self.backGroundMusic.currentTime = 0;
      self.backGroundMusic.play();
    })
  }

  let victoryContainer = document.getElementById('victory-container');
  let victoryRestartBtn = document.getElementById('victory-restart-btn');

  this.victory = function () {
    if (developer.score === 500) {

      self.backGroundMusic.pause();
      developer.victorySound.play();
      visibilityVictory(victoryContainer,'visible')
      clearInterval(timerId);

      victoryRestartBtn.addEventListener('click', function (e) {

        visibilityVictory(victoryContainer,'hidden');
        self.restartMap();
        self.backGroundMusic.currentTime = 0;
        self.backGroundMusic.play();
      })
    }
  }
}

let game = new Game();