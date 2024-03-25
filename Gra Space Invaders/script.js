let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

let shipWidth = tileSize * 2;
let shipHeight = tileSize * 4; // Fixed typo here
let shipX = tileSize * columns / 2 - tileSize;
let shipY = tileSize * rows - tileSize * 3;

let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight // Fixed typo here
}

let shipImg;

let shipVelocityX = tileSize; //ship speed

//aliens
let alienArray = [];
let alienWidth = tileSize * 1.5;
let alienHeight = tileSize * 1.5;
let alienX = tileSize;
let alienY = tileSize;
let alienImg;
let alienRows = 2;
let alienColumns = 3;
let alienCount = 0;
let alienVelocityX = 1; //moving speed

window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    shipImg = new Image();
    shipImg.src = "./img/ship.png";
    shipImg.onload = function () {
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    };

    alienImg = new Image();
    alienImg.src = "./img/aliens.png";
    createAliens();

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveShip);
}

function update() {
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //ship 
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);

    //alien
    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);
        }
    }

}

function moveShip(e) {
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX; //move left
    } else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX; //move right
    }
}

function createAliens() {
    for (let i = 0; i < alienColumns; i++) {
        for (let j = 0; j < alienRows; j++) {
            let alien = {
                img: alienImg,
                x: alienX + i * alienWidth,
                y: alienY + j * alienHeight,
                width: alienWidth,
                height: alienHeight,
                alive: true
            }

            alienArray.push(alien);

        }
    }
    alienCount = alienArray.length;
}
