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

const Game = ((p1, p2) => {
    let _currentPlayer = p1;

    const getCurrentPlayer = () => _currentPlayer;

    const toggleCurrentPlayer = () => {
        _currentPlayer === p1
            ? _currentPlayer = p2
            : _currentPlayer = p1;
    };

    return {
        getCurrentPlayer,
        toggleCurrentPlayer,
    }
})(player1.player, player2.player);

const Gameboard = ((game) => {
    const gameboard = [];
    for (let i = 0; i < 9; i++) { gameboard.push(null) };

    const display = () => {
        const gameboardDiv = document.querySelector(".gameboard");
        gameboard.forEach((el, index) => {
            const square = document.createElement("div");
            square.classList.add("square");
            square.textContent = el;
            square.id = "square-" + index;
            square.addEventListener("click", () => _placeMarker(square, index));
            gameboardDiv.appendChild(square);
        })
    }

    const _placeMarker = (square, index) => {
        if (square.textContent === "") {
            square.textContent = game.getCurrentPlayer().mark;
            gameboard[index] = game.getCurrentPlayer().mark;
            game.toggleCurrentPlayer();
            console.log(gameboard);
        }
    }

    return {
        gameboard,
        display,
    };
})(Game);

Gameboard.display();