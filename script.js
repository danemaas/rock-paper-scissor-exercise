const botTurn = document.getElementById('botTurn');
const playerTurn = document.getElementById('playerTurn');
const toggleRock = document.getElementById('rock');
const togglePaper = document.getElementById('paper');
const toggleScissor = document.getElementById('scissor');
const login = document.getElementById('login');
const play = document.getElementById('play');
const playerName = document.getElementById('playerName');
const dropDownBtn = document.getElementById('dropdownBtn');
const playBtn = document.getElementById('playBtn');
const turnBtn = document.getElementById('turnBtn');
const restartBtn = document.getElementById('restartBtn');
let win = 0, draw = 0, lose = 0, turnCounter = 0;

//click event listener to the play button
playBtn.addEventListener("click", () => {
    const selectedOption = dropDownBtn.value;
    if (selectedOption !== "") {
        //display player name in the game.
        if(playerName.value != "") {
            document.getElementById('player').innerHTML = playerName.value;
        } else {
         document.getElementById('player').innerHTML = "anonymous";
        }
        document.getElementById('anouncement').innerHTML = "Best of " + selectedOption;
        turnCounter = parseInt(selectedOption);
        login.classList.add('d-none'); //hide the login section
        play.classList.remove('d-none'); //display the game section
    } else {
      //the user has not selected an option
      //display an alert to instruct the player
      alert("Please select turns before playing.");
    }
});

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

//event listener if play turn button is clicked
turnBtn.addEventListener('click', () => {
    btnTimeOut(turnCounter);
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

        turnCounter--;
        checkScore(win, lose, draw, turnCounter);
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

        turnCounter--;
        checkScore(win, lose, turnCounter);
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

        turnCounter--;
        checkScore(win, lose, turnCounter);
    }
});

//restart the whole game
restartBtn.addEventListener('click', () => {
    location.reload();
});

function checkScore(a, b, c, turn) {
    if(turn == 0) {
        if(a == b) {
            document.getElementById('anouncement').innerHTML = "Its a DRAW!!";
        } else if(a > b) {
            document.getElementById('anouncement').innerHTML = "You won!!";
        } else {
                document.getElementById('anouncement').innerHTML = "You lose!!";
        }
        document.getElementById('selector').classList.add('d-none');
        turnBtn.classList.add('d-none');
        restartBtn.classList.remove('d-none');
    } else return;
}

function btnTimeOut(turn) {
    turnBtn.disabled = true;

    if(turn != 0) {
        setTimeout(() => {
            turnBtn.disabled = false;
            //reset class list of both bot and player
            botTurn.classList.remove('rock', 'paper', 'scissor');
            playerTurn.classList.remove('rock', 'paper', 'scissor');
        }, 3000);
    }
}

