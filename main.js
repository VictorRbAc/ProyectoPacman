let mapa1 = [
    [0, 1], 
    [1, 0]

];
function crearMapa (mapa) {
    let mapContainer = document.querySelector ('#mapContainer');
    let table = document.createElement ('table');
    
    mapa.forEach(function (row, idx) {
        let row = document.createElement('tr');
        row.setAttribute("class", `row${idx}`)
        console.log(row)
        row.forEach(function (col, idx) {
            let td = document.createElement('td')
            if(col === 0){
                col.setAttribute("class", `col${idx} red`)   
            }else if(col === 1){
                col.setAttribute("class", `col${idx} blue`)   
            }
            col.appendChild(td)
        });
        table.appendChild(row)
        console.log("fila: " + elem)
    });
    mapContainer.appendChild(table);
    console.log("mapa:" + mapa)
}
console.log(crearMapa(mapa1))