function startNewGame() {
    if (players[0].name === '' || players[1].name === '' ) {
        alert('Please enter both players names!');
        return;
    }
    gameAreaElement.style.display = 'block';
}

function swtichPlayer () {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
}

function selectGameField(event) {
    event.target.textContent = players[activePlayer].symbol;  // players[0]
    event.target.classList.add('disabled');
    swtichPlayer();
}