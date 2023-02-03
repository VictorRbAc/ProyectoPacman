
//Función para comprobar siguiente casilla segúna la tecla pulsada
this.checkNext = function (nextX, nextY) {
    let directions = ['up', 'down', 'left', 'right'];
    self.direction = directions[Math.floor(Math.random() * 4)];
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
    //Posición a la que me quiero mover con la variable x e y ya cambiada
    /*let newPosition = document.querySelector(`.row${self.pos.x + x} > .col${self.pos.y + y}`);
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
    }*/

    
    newPosition = document.querySelector(`.row${self.pos.x + x} > .col${self.pos.y + y}`);
          if (newPosition.classList.contains('pasillo')) {
            if(newPosition.classList.contains('mainCharacter')){
              mc.lives -= 1
            }
            positionEnemy.classList.remove(`enemy${self.number}`)
            newPosition.classList.add(`enemy${self.number}`)
            self.pos.x += x;
            self.pos.y += y;
          }
    
}