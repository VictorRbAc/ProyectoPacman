let map1 = [
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
    [0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0],
    [0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0], 
    [0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0],
    [0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0], 
    [0 , 1 , 1 , 1 , 2 , 1 , 1 , 1 , 1 , 0],
    [0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0], 
    [0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0],
    [0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0], 
    [0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0],
    [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0]
];

function createMap (mapa) {
    let mapContainer = document.querySelector ('#mapContainer');
    let table = document.createElement ('table');
    
    mapa.forEach(function (row, idx) {
        let tr = document.createElement('tr');
        tr.setAttribute("class", `row${idx}`);
        row.forEach(function (col, idx) {

            //HAY QUE CAMBIAR LO DE CLASS Y USAR CLASSLIST ADD O ALGO ASI
            let td = document.createElement('td');
            if(col === 1){
                td.classList.add(`col${idx}`,`bolita`);
            }else if(col === 0){
                td.classList.add(`col${idx}`,`blue`);
            }else if(col === 2){
                td.classList.add(`col${idx}`,`white`);
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    mapContainer.appendChild(table);
}

function MainCharacter () {
    this.pos = {
        x:5,
        y:4
        }

    this.direction = 'right'

    this.insertMc = function(){
        let startPosition = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
        startPosition.classList.remove('white');
        startPosition.classList.add('mainCharacter')
        console.log(startPosition);
        //map1[mainCharacter.pos.x][mainCharacter.pos.y]
    }

    this.movement = function(){
        let positionMc = document.querySelector(`.row${this.pos.x} > .col${this.pos.y}`);
        switch(this.direction) {
            case 'up':
                this.pos.x -= 1
                console.log(this.pos.x)
              break
            case 'down':
                this.pos.x += 1
                console.log(this.pos.x)
              break
            case 'left':
                
                //Dejar atras pasillo vacío
                positionMc.classList.remove('mainCharacter');
                positionMc.classList.add('white')
                this.pos.y -= 1
                

                //console.log(this.pos.y)
              break
            case 'right':
                this.pos.y += 1
                console.log(this.pos.y)
              break
          }
    }
}

window.addEventListener('keydown', function(e) { // Cambiamos la propiedad 'direction' de la serpiente según la tecla pulsada.
    switch(e.key) {
      case 'ArrowUp':
        MainCharacter.direction = 'up'
        break
      case 'ArrowDown':
        MainCharacter.direction = 'down'
        break
      case 'ArrowLeft':
        MainCharacter.direction = 'left'
        break
      case 'ArrowRight':
        MainCharacter.direction = 'right'
        break
    }
  })
createMap(map1)

//document.getElementsByClassName(`row${mainCharacter.pos.x} bolita`)
let pacman = new MainCharacter();
pacman.insertMc();
pacman.movement();
console.log(pacman.movement());