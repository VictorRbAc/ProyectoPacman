//MAIN CHARACTER
function MainCharacter() {
    this.lives = 3;
  
    this.pos = {
      x: 5,
      y: 4
    }
  
    this.maxScore = 0
  
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
            if (newPosition.classList.contains('bolita')) {
              let interfaceScore = document.getElementById('currentScore')
              interfaceScore.innerText = parseInt(interfaceScore.innerText) +100;
            }
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
  
            if (newPosition.classList.contains('bolita')) {
              let interfaceScore = document.getElementById('currentScore')
              interfaceScore.innerText = parseInt(interfaceScore.innerText) +100;
            }
            newPosition.classList.remove('bolita');
            newPosition.classList.add('mainCharacter')
  
            positionMc.classList.remove('mainCharacter');
  
  
            this.pos.x += 1
  
  
          }
          break
        case 'left':
          newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y - 1}`);
  
          if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
  
            if (newPosition.classList.contains('bolita')) {
              let interfaceScore = document.getElementById('currentScore')
              interfaceScore.innerText = parseInt(interfaceScore.innerText) +100;
            }
            positionMc.classList.remove('mainCharacter');
  
  
            this.pos.y -= 1
  
            newPosition.classList.remove('bolita');
            newPosition.classList.add('mainCharacter')
          }
          break
        case 'right':
          newPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y + 1}`);
  
          if (newPosition.classList.contains('bolita') || newPosition.classList.contains('pasillo')) {
  
            if (newPosition.classList.contains('bolita')) {
              let interfaceScore = document.getElementById('currentScore')
              interfaceScore.innerText = parseInt(interfaceScore.innerText) +100;
            }
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

export {MainCharacter};