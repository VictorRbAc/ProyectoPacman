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
      self.direction = directions[Math.floor(Math.random() * 4)];
  
      console.log(`Enemy${self.number}`)
      //Pisción actual del enemigo cuando llamas a movement
      let positionEnemy = document.querySelector(`.row${self.pos.x} > .col${self.pos.y}`);
  
      let newPosition;
      switch (self.direction) {
        case 'up':
          //Posición a comprobar
          newPosition = document.querySelector(`.row${self.pos.x - 1} > .col${self.pos.y}`);
  
          if (newPosition.classList.contains('pasillo')) {
            //Removemos la clase enemigo de la posicion que está antes de moverse
            positionEnemy.classList.remove(`enemy${self.number}`)
            //Añadimos a la siguiente posición, la clase enemigo correspondiente
            newPosition.classList.add(`enemy${self.number}`)
            //Actualizamos la posición nueva que tiene el enemigo al moverse
            self.pos.x -= 1
          }
          break;
  
        case 'down':
          newPosition = document.querySelector(`.row${self.pos.x + 1} > .col${self.pos.y}`);
          if (newPosition.classList.contains('pasillo')) {
            //Removemos la clase enemigo de la posicion que está antes de moverse
            positionEnemy.classList.remove(`enemy${self.number}`)
            //Añadimos a la siguiente posición, la clase enemigo correspondiente
            newPosition.classList.add(`enemy${self.number}`)
            //Actualizamos la posición nueva que tiene el enemigo al moverse
            self.pos.x += 1
          }
          break;
        case 'left':
          newPosition = document.querySelector(`.row${self.pos.x} > .col${self.pos.y - 1}`);
          if (newPosition.classList.contains('pasillo')) {
            //Removemos la clase enemigo de la posicion que está antes de moverse
            positionEnemy.classList.remove(`enemy${self.number}`)
            //Añadimos a la siguiente posición, la clase enemigo correspondiente
            newPosition.classList.add(`enemy${self.number}`)
            //Actualizamos la posición nueva que tiene el enemigo al moverse
            self.pos.y -= 1
          }
          break;
        case 'right':
          newPosition = document.querySelector(`.row${self.pos.x} > .col${self.pos.y + 1}`);
          if (newPosition.classList.contains('pasillo')) {
            //Removemos la clase enemigo de la posicion que está antes de moverse
            positionEnemy.classList.remove(`enemy${self.number}`)
            //Añadimos a la siguiente posición, la clase enemigo correspondiente
            newPosition.classList.add(`enemy${self.number}`)
            //Actualizamos la posición nueva que tiene el enemigo al moverse
            self.pos.y += 1
          }
          break;
      }
    }
  }

  export {Enemy};