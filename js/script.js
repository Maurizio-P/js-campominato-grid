/*
1 - recuperiamo come const il select, il bottone e il nostro quadrato che conterrà la griglia
2 - Al nostro click sul bottone recuperiamo il nostro valore del select
3 - stampiamo la griglia in base al livello scelto dal nostro utente
4 - Al click su ogni cella, la coloriamo
*/


//  1

const difficolta = document.getElementById("difficolta")
const start = document.getElementById("start")
const containerGrid = document.querySelector(".container-grid")

console.log(difficolta, start, containerGrid)
// 2

start.addEventListener("click", function(){
    const valueDif = difficolta.value 
    // 2.1 recupero la const che mi indica quante celle devo creare
    const totalCell = numCell(valueDif)
    
    // 3 stampare la griglia in base al livello scelto
    

})


function numCell(valueDif){
    let numCellDif
    switch (valueDif){
        case easy:
            numCellDif = 100
            break;
        case regular:
            numCellDif = 81
            break;
        case hard: 
            numCellDif = 49
            break;
    }

    return numCellDif
}

function gridCreate(totalCell){
    for (let i = 0; i < totalCell; i++){
        containerGrid.innerHTML += `<div class="cell"></div>`
    }
}