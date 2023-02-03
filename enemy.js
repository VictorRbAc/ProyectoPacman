//ENEMY
function Enemy(x, y, number, mc) {
  this.pos = {
    x: x,
    y: y
  }


  let self = this


  this.number = number

  let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
  startPosition.classList.add(`enemy${this.number}`)

  this.direction = ''

  //Función para comprobar siguiente casilla aleatoria del enemigo
  this.checkNext = function (nextX, nextY) {
    let directions = ['up', 'down', 'left', 'right'];
    self.direction = directions[Math.floor(Math.random() * 4)];

    let positionEnemy = document.querySelector(`.row${nextX} > .col${nextY}`);

    let x = 0;
    let y = 0;
    switch (self.direction) {
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

    let newPosition = document.querySelector(`.row${self.pos.x + x} > .col${self.pos.y + y}`);
    if (newPosition.classList.contains('pasillo')) {
      if (newPosition.classList.contains('mainCharacter')) {
        mc.lives -= 1
      }
      positionEnemy.classList.remove(`enemy${self.number}`)
      newPosition.classList.add(`enemy${self.number}`)
      self.pos.x += x;
      self.pos.y += y;
    }
  }

  this.movement = function () {
    let directions = ['up', 'down', 'left', 'right'];
    self.direction = directions[Math.floor(Math.random() * 4)];

    //      console.log(`Enemy${self.number}`)
    //Pisción actual del enemigo cuando llamas a movement
    let positionEnemy = document.querySelector(`.row${self.pos.x} > .col${self.pos.y}`);

    let newPosition;
    switch (self.direction) {

      case 'up':
        self.checkNext(self.pos.x, self.pos.y)
        break;

      case 'down':
        self.checkNext(self.pos.x, self.pos.y)
        break;

      case 'left':
        self.checkNext(self.pos.x, self.pos.y)
        break;

      case 'right':
        self.checkNext(self.pos.x, self.pos.y)
        break;
    }
  }
  //this.timerId = setInterval(this.movement, 1000)

}
export { Enemy }