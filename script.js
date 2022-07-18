const Gameboard = (() => {
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
            square.textContent = "X";
            gameboard[index] = "X";
            console.log(gameboard);
        }
    }

    return {
        gameboard,
        display,
    };
})();

const Player = () => {

};

console.log(Gameboard.gameboard);
Gameboard.display();