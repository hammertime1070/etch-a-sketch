function displayGame() {
    let i = 0;
    for (let i = 0; i < columnCount; i++){
        const game = document.querySelector('#game')
        const column = document.createElement('div')
        column.classList.add('column')
        column.style.display = 'flex'
        column.style.flexDirection = 'column'
        displayColumn(column)
        game.appendChild(column)
    }
}

function displayColumn(column) {
    for (let i = 0; i < rowCount; i++) {
        const tile = document.createElement('div')
        tile.classList.add('tile')
        tile.textContent = 'Hello World'
        tile.addEventListener('mouseenter', function() {colorGrid(tile)})
        column.appendChild(tile)
    }
}


function colorGrid(tile) {
    tile.style.backgroundColor = 'red'
}


let rowCount = 16;
let columnCount = 16;

displayGame()