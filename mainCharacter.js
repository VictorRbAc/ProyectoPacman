//MAIN CHARACTER
function MainCharacter() {
  this.lives = 3;

  this.pos = {
    x: 5,
    y: 4
  }

  let self = this

  this.score = 0

  this.maxScore = 0

  this.direction = ''
  //Sounds
  this.eatDotSound = new Audio('sounds/pacman_chomp.wav')
  this.deathSound = new Audio('sounds/pacman_death.wav')

  let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
  startPosition.classList.add('mainCharacter')

  let livesHtml = document.getElementById('lives');
  livesHtml.innerText = self.lives;

  //Función para comprobar siguiente casilla segúna la tecla pulsada
  this.checkNext = function (nextX, nextY, nextDirection) {
    //Posición actual del personaje principal antes de moverse
    let positionMc = document.querySelector(`.row${nextX} > .col${nextY}`);
    //Variables y switch que cambia según la 'direción' pulsada
    let x = 0;
    let y = 0;

    let mainC = document.getElementsByClassName('mainCharacter')[0]
    switch (nextDirection) {
      case 'up':
        x -= 1;
        //console.log(mainC);
        //mainC.style.transform = 'rotate(90deg)'; 
        
        break;
      case 'down':
        x += 1;
        break;
      case 'left':
        y -= 1;
        mainC.style.transform = 'scaleX(-1)';
        break;
      case 'right':
        y += 1;
        mainC.style.transform = 'scaleX(1)';
        break;
    }
    //Posición a la que me quiero mover con la variable x e y ya cambiada
    let newPosition = document.querySelector(`.row${self.pos.x + x} > .col${self.pos.y + y}`);
    if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {

      if (newPosition.classList.contains('bolita')) {

        this.eatDotSound.play();
        let interfaceScore = document.getElementById('currentScore')

        this.score = this.score + 100;
        interfaceScore.innerText = this.score;
        
      }
      //metodo provisional saber si hay cualquier enemigo
      let aux = newPosition.classList.value;

      //Se muestren las vidas en el html;



      if (aux.includes("enemy")) {
        this.deathSound.play()
        self.lives -= 1
        livesHtml.innerText = self.lives;

        //ABIAN CAMBIADO
        //Pacman vuelve a su posición original cuando toca a los enemigos (61-64)
        positionMc.classList.remove('mainCharacter')
        newPosition.classList.remove('mainCharacter')
        this.pos.x = 5
        this.pos.y = 4
      } else {
        positionMc.classList.remove('mainCharacter');
        newPosition.classList.remove('bolita');
        newPosition.classList.add('mainCharacter')
        self.pos.x += x;
        self.pos.y += y;
      }

    }
  }


  this.movement = function () {

    switch (self.direction) {

      case 'up':
        self.checkNext(self.pos.x, self.pos.y, 'up')

        break

      case 'down':

        self.checkNext(self.pos.x, self.pos.y, 'down')
        break

      case 'left':

        self.checkNext(self.pos.x, self.pos.y, 'left')
        break

      case 'right':

        self.checkNext(self.pos.x, self.pos.y, 'right')
        break

      default:
        self.direction = 'right'
        break;
    }
  }
  //this.timerId = setInterval(this.movement, 650)
}

export { MainCharacter };