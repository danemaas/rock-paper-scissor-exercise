const botTurn = document.getElementById('botTurn');
const playerTurn = document.getElementById('playerTurn');
const toggleRock = document.getElementById('rock');
const togglePaper = document.getElementById('paper');
const toggleScissor = document.getElementById('scissor');
const login = document.getElementById('login');
const play = document.getElementById('play');
const playerName = document.getElementById('playerName');
let win = 0, draw = 0, lose = 0;

// function to get player name and display game after clicking the play button
function toggleGame() {
    //display player name in the game.
    if(playerName.value != "") {
        document.getElementById('player').innerHTML = playerName.value;
    } else {
        document.getElementById('player').innerHTML = "player";
    }
    
    login.classList.add('d-none'); //hide the login section
    play.classList.remove('d-none'); //display the game section
}

//validate if the player clicked the rock image
if(toggleRock) {     
    toggleRock.addEventListener('click', () => {
        //reset the class list
        playerTurn.classList.remove('paper', 'scissor');
        //add the rock image to player column
        playerTurn.classList.add('rock');
        //make the visibility visible to display player turn
        playerTurn.style.visibility = "visible";
    });
}

if(togglePaper) {     
    togglePaper.addEventListener('click', () => {
        playerTurn.classList.remove('rock', 'scissor');
        playerTurn.classList.add('paper');
        playerTurn.style.visibility = "visible";
    });
}

if(toggleScissor) {     
    toggleScissor.addEventListener('click', () => {
        playerTurn.classList.remove('paper', 'rock');
        playerTurn.classList.add('scissor');
        playerTurn.style.visibility = "visible";
    });
}

//this will generate the bot's turn and check the current turn if win, draw or lose
function togglePlay() {
    //get a random value from 0-2
    const rand = Math.floor(Math.random() * 3);

    //rock == 0 | paper == 1 | scissor == 2
    if (rand === 0) {
        botTurn.classList.remove('paper', 'scissor'); //reset class list
        botTurn.classList.add('rock'); //add the rock image as bot's turn
        botTurn.style.visibility = "visible"; //make the image visible

        //this will check if the player won, draw or lose the turn
        if(playerTurn.classList.contains('rock')) {
            draw += 1;
            document.getElementById('draw').innerHTML = draw;
        } else if (playerTurn.classList.contains('paper')) {
            win++;
            document.getElementById('win').innerHTML = win;
        } else {
            lose++;
            document.getElementById('lose').innerHTML = lose;
        }
    } else if (rand === 1) {
        botTurn.classList.remove('rock', 'scissor');
        botTurn.classList.add('paper');
        botTurn.style.visibility = "visible";
        if(playerTurn.classList.contains('paper')) {
            draw += 1;
            document.getElementById('draw').innerHTML = draw;
        } else if (playerTurn.classList.contains('scissor')) {
            win++;
            document.getElementById('win').innerHTML = win;
        } else {
            lose++;
            document.getElementById('lose').innerHTML = lose;
        }
    } else {
        botTurn.classList.remove('paper', 'rock');
        botTurn.classList.add('scissor');
        botTurn.style.visibility = "visible";
        if(playerTurn.classList.contains('scissor')) {
            draw += 1;
            document.getElementById('draw').innerHTML = draw;
        } else if (playerTurn.classList.contains('rock')) {
            win++;
            document.getElementById('win').innerHTML = win;
        } else {
            lose++;
            document.getElementById('lose').innerHTML = lose;
        }
    }
}

