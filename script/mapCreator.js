function MapCreator(map) {
    this.map = map;

    let mapContainer = document.querySelector('#mapContainer');

    this.createMap = function () {
        let table = document.createElement('table');
        table.style.borderCollapse = 'collapse'

        map.forEach(function (row, idx) {
            let tr = document.createElement('tr');
            tr.setAttribute("class", `row${idx}`);
            row.forEach(function (col, idx) {

                let td = document.createElement('td');
                if (col === 1) {
                    td.classList.add(`col${idx}`, 'hall', 'pc');
                } else if (col === 0) {
                    td.classList.add(`col${idx}`, `wall`);
                } else if (col === 2) {
                    td.classList.add(`col${idx}`, `hall`);
                }else if(col === 3){
                    td.classList.add(`col${idx}`, `hall`);
                }
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        mapContainer.appendChild(table);
    }
    this.removeMap = function(){
        let childs = document.querySelectorAll('#mapContainer > *')
        for (let i = 0; i < childs.length; i++) {
            mapContainer.removeChild(childs[i])
        }
    }
}
export { MapCreator };