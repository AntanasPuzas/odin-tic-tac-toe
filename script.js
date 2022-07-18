const Gameboard = (() => {
    const gameboard = [];
    for (let i = 0; i < 9; i++) { gameboard.push("x") };

    const display = () => {
        const gameboardDiv = document.querySelector(".gameboard");
        gameboard.forEach(el => {
            const square = document.createElement("div");
            square.classList.add("square");
            square.textContent = el;
            gameboardDiv.appendChild(square);
        })
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