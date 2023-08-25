function displayGame() {
    let i = 0;
    for (let i = 0; i < columnCount; i++){
        const game = document.querySelector('#game')
        configureGrid(game)
        const column = document.createElement('div')
        configureColumn(column)
        displayColumn(column)
        game.appendChild(column)
    }
}

function displayColumn(column) {
    for (let i = 0; i < rowCount; i++) {
        const tile = document.createElement('div')
       configureTile(tile)
        column.appendChild(tile)
    }
}


function colorGrid(tile) {
    tile.style.backgroundColor = 'red'
}

function resetGrid() {
    // Get NodeList of all Columns to be removed
    const pendingRemovalColumns = document.getElementsByClassName('column')
    // Remove all elements from the Node List
    while (pendingRemovalColumns.length > 0) {
        pendingRemovalColumns[0].parentNode.removeChild(pendingRemovalColumns[0])
    }
}

function getParams() {
    let newRowCount = prompt("Please Enter your Desired Rows:", rowCount);
    let newColumnCount = prompt("Please enter your desired Columns:", columnCount);
    if (newRowCount && newColumnCount && !isNaN(newRowCount) && !isNaN(newColumnCount)) {
        rowCount = parseInt(newRowCount)
        columnCount = parseInt(newColumnCount)
        resetGrid()
        displayGame()
    } else {
        alert("Invalid Input")
    }

}

function configureColumn(column) {
    column.classList.add('column')
    column.style.display = 'flex'
    column.style.alignItems = 'stretch'
    column.style.flexDirection = 'column'
    column.style.flexBasis = '100%'
}

function configureGrid(game) {
    game.style.display = 'flex'
    game.style.alignItems = 'stretch'
    game.style.flexDirection = 'row'
    game.style.width = '960px'
    game.style.height = '960px'
}

function configureTile(tile) {
    tile.classList.add('tile')
    // tile.textContent = 'Hello World'
    tile.addEventListener('mouseenter', function() {colorGrid(tile)})
    tile.style.display = 'flex'
    tile.style.flexGrow = 1
    tile.style.margin = '3px'
}


let rowCount = 16;
let columnCount = 16;

const resetButton = document.querySelector('#reset-button')
resetButton.onclick = getParams

displayGame()

