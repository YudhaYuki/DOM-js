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

// We remove these line since we use it in the other, so we use DRY Principle, this case named INIT();
// scores = [0, 0]; // Store score for both players
// roundScore = 0;
// activePlayer = 0; // stores score into active player

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);  It's removed because it is now declared down here ----document.querySelector('#score-0').textContent = dice;------


// change the content of HTML element
// There are two ways of changing the content of the selection, first is TEXTCONTENT and second is INNERHTML
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';

// Another way of using "DOM querySelector", just to read the value/content of the element with this id, score 0, and store it here into variabe x
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

/*
// Example of using DOM to select CSS property
document.querySelector('.dice').style.display = 'none';


// Selecting elements by using getElementById instead of querySelector
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/


// we use btn down here, instead of btn()
// This called call-back function, its a function that we pass into another function, as an argument
// function that is not call by us, but by another function as an argument
// However, here, we are using anonimouse function --- function() {.....}
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;    
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';  
        diceDOM.src = 'dice-' + dice + '.png';  
    
        // 3. Update the round score IF the rolled number is NOT a 1
        if (dice !== 1) {
            // AAdd score
            roundScore += dice; // similar when we write it like this         roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        } else {
            // We just call this function, before we create this down here, but since we use it over and over again, we use DRY PRINCIPLE
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURENT score to GLOBAL SCORE
        scores[activePlayer] += roundScore; // another way        scores[activePlayer] = scores[activePlayer] + roundScore;    
    
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
        // Check if the player won the game
        if (scores[activePlayer] >= 20) {
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