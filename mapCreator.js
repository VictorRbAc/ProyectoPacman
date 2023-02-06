function MapCreator(map) {

    this.map = map;

    this.createMap = function () {
        let mapContainer = document.querySelector('#mapContainer');
        let table = document.createElement('table');
        table.style.borderCollapse = 'collapse'

        map.forEach(function (row, idx) {
            let tr = document.createElement('tr');
            tr.setAttribute("class", `row${idx}`);
            row.forEach(function (col, idx) {

                let td = document.createElement('td');
                if (col === 1) {
                    td.classList.add(`col${idx}`, 'pasillo', 'bolita');
                } else if (col === 0) {
                    td.classList.add(`col${idx}`, `blue`);
                } else if (col === 2) {
                    td.classList.add(`col${idx}`, `pasillo`);
                }
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        mapContainer.appendChild(table);
    }
}

export { MapCreator };