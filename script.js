const Player = (name, mark) => {
    return { name, mark };
};

const player1 = ((name, mark) => {
    let player = Player(name, mark);

    return {
        player
    }

})("PLAYER-1", "X");

const player2 = ((name, mark) => {
    let player = Player(name, mark);

    return {
        player
    }
})("PLAYER-2", "O");

const Game = (() => {
    let _currentPlayer = player1.player;

    const getCurrentPlayer = () => _currentPlayer;

    const toggleCurrentPlayer = () => {
        _currentPlayer === player1.player
            ? _currentPlayer = player2.player
            : _currentPlayer = player1.player
    };

    const findWinner = (gameboard) => {
        // Check rows
        for (let i = 0; i < 7; i = i + 3) {
            if (gameboard[i] !== null && gameboard[i] === gameboard[i + 1]
                && gameboard[i + 1] === gameboard[i + 2]) {
                return true;
            }
        }
        // Check columns
        for (let i = 0; i < 3; i = i + 1) {
            if (gameboard[i] !== null && gameboard[i] === gameboard[i + 3]
                && gameboard[i + 3] === gameboard[i + 6]) {
                return true;
            }
        }
        // Check diagonals
        if (gameboard[0] !== null && gameboard[0] === gameboard[4]
            && gameboard[4] === gameboard[8]) {
            return true;
        }
        if (gameboard[2] !== null && gameboard[2] === gameboard[4]
            && gameboard[4] === gameboard[6]) {
            return true;
        }
        return false;
    }

    return {
        getCurrentPlayer,
        toggleCurrentPlayer,
        findWinner,
    }
})();

const Gameboard = (() => {
    const _gameboard = [];
    for (let i = 0; i < 9; i++) { _gameboard.push(null) };

    const display = () => {
        const gameboardDiv = document.querySelector(".gameboard");
        _gameboard.forEach((el, index) => {
            const square = document.createElement("div");
            square.classList.add("square");
            square.textContent = el;
            square.id = "square-" + index;
            square.addEventListener("click", () => _placeMarker(square, index));
            gameboardDiv.appendChild(square);
        })
    }

    const _placeMarker = (square, index) => {
        if (Game.findWinner(_gameboard)) {
            return;
        } else if (square.textContent === "") {
            square.textContent = Game.getCurrentPlayer().mark;
            _gameboard[index] = Game.getCurrentPlayer().mark;
            if (Game.findWinner(_gameboard)) {
                console.log("Winner: " + Game.getCurrentPlayer().name);
                return;
            }
            Game.toggleCurrentPlayer();
        };
    }

    return {
        display,
    };
})();

Gameboard.display();