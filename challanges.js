/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;    
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';  
        diceDOM.src = 'dice-' + dice + '.png';  
    
        // 3. Update the round score IF the rolled number is NOT a 1
        if (dice === 6 && lastDice === 6) {
            // player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;           
            nextPlayer(); 

        } else if (dice !== 1) {
            // AAdd score
            roundScore += dice; // similar when we write it like this         roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        } else {
            lastDice = -1;
            // We just call this function, before we create this down here, but since we use it over and over again, we use DRY PRINCIPLE
            nextPlayer();
        }

        // We generate all the dice number (1. random number above)
        // then we do all of this stuff, then we check the dice number
        // So if we store the last dice number, we can use that variable
        // The next time that the function runs
        lastDice = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURENT score to GLOBAL SCORE
        scores[activePlayer] += roundScore; // another way        scores[activePlayer] = scores[activePlayer] + roundScore;    
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // VALUE; this give us the content that the user put into this inut field
        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are COERCED to false
        // Anything else is COERCED to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');    
            gamePlaying = false;    
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        // /*
        // The same way just like above
        // if(activePlayer === 0) {
        //     activePlayer = 1;
        // } else {
        //     activePlayer = 0;
        // }
        // */

        // Change the total score to 0 when currentPlayer is changed (Without this, the previouse score from the priviouse play will be added into the new currentPlayer)
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';


        // Changing the DOT and GREY background based on which currentPlayer that actives
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // Hide the dice when player changes
        document.querySelector('.dice').style.display = 'none';       
}

// not calling. but pssing it (init function/method), here, into this even listener function.
// Thats why we don't need to use call operator here -- init() --, because if I would, this function will immediately call
// But we don't want this happens, we just want to tell the event listener that "When someone clicks this button, call the init function for me"
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1!';
    document.getElementById('name-1').textContent = 'Player 2!';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    // Setting the active player to 0, when we START the game
    document.querySelector('.player-0-panel').classList.add('active');
    

    
    
    
    
};