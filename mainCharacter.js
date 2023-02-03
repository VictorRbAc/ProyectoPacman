//MAIN CHARACTER
function MainCharacter() {
  this.lives = 3;

  this.pos = {
    x: 5,
    y: 4
  }

  let self = this

  this.maxScore = 0

  this.direction = ''

  let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
  startPosition.classList.add('mainCharacter')

  //Función para comprobar siguiente casilla segúna la tecla pulsada
  this.checkNext = function (nextX, nextY, nextDirection) {
    //Posición actual del personaje principal antes de moverse
    let positionMc = document.querySelector(`.row${nextX} > .col${nextY}`);
    //Variables y switch que cambia según la 'direción' pulsada
    let x = 0;
    let y = 0;
    switch (nextDirection) {
      case 'up':
        x -= 1;
        break;
      case 'down':
        x += 1;
        break;
      case 'left':
        y -= 1;
        break;
      case 'right':
        y += 1;
        break;
    }
    //Posición a la que me quiero mover con la variable x e y ya cambiada
    let newPosition = document.querySelector(`.row${self.pos.x + x} > .col${self.pos.y + y}`);
    if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
      if (newPosition.classList.contains('bolita')) {
        let interfaceScore = document.getElementById('currentScore')
        interfaceScore.innerText = parseInt(interfaceScore.innerText) + 100;
      }
      //metodo provisional saber si hay cualquier enemigo
      let aux = newPosition.classList.value;

      if (aux.includes("enemy")) {
        self.lives -= 1
      }
      positionMc.classList.remove('mainCharacter');
      newPosition.classList.remove('bolita');
      newPosition.classList.add('mainCharacter')
      self.pos.x += x;
      self.pos.y += y;
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