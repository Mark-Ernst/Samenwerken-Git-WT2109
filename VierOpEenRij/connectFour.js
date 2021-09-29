var clickedCellsRed = [];
var clickedCellsYellow = [];
var firstPlayerTurn = true;
var player1 = '';
var player2 = '';

const tableCreate = () => {
    var body = document.body;
    var tbl  = document.createElement('table');
    tbl.style.border = '1px solid black';
    for(var i = 0; i < 6; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 7; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            td.style.width = '40px';
            td.style.height = '40px';
            td.className = 'tablecell';
            td.id = [j + 1, i + 1];
            td.onclick = (e) => {
                clickCell(e);
            };
        }
    }
    body.appendChild(tbl);
}

const clickCell = (e) => {
    const square = e.target;

    var clickedCellsRedY = clickedCellsRed.map(x => x.charAt(2));
    var clickedCellsYellowY = clickedCellsYellow.map(x => x.charAt(2));
    
    for (let i = 1; i < 6; i++) {
        if(clickedCellsRed.includes()){

        }
    }
    // Check of het hokje al geklikt is
    if(clickedCellsRed.includes(square.id) || clickedCellsYellow.includes(square.id)) {
        alert("Hier ligt al een steen!");

    } else {

        // Check of er onder het hokje nog plek is

        // Verander kleur van het hokje afhankelijk van de beurt
        if(firstPlayerTurn) {
            clickedCellsRed.push(square.id);
            e.target.style.backgroundColor = 'red';
        } else {
            clickedCellsYellow.push(square.id);
            e.target.style.backgroundColor = 'yellow';
        }

        // Check of het spel gewonnen is
        checkWin();

        firstPlayerTurn = !firstPlayerTurn;
        var playerText = document.getElementById('player');
        if (firstPlayerTurn) {
            playerText.innerHTML = player1 + ' is aan de beurt!';
        } else {
            playerText.innerHTML = player2 + 'Geel is aan de beurt!';
        }
    }
}

const checkWin = () => {

}

const resetGame = () => {
    clickedCellsYellow = [];
    clickedCellsRed = [];
}
tableCreate();