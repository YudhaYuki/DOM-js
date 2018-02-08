/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);  It's removed because it is now declared down here ----document.querySelector('#score-0').textContent = dice;------


// change the content of HTML element
// There are two ways of changing the content of the selection, first is TEXTCONTENT and second is INNERHTML
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';

// Another way of using "DOM querySelector", just to read the value/content of the element with this id, score 0, and store it here into variabe x
// var x = document.querySelector('#score-0').textContent;
// console.log(x);


// Example of using DOM to select CSS property
document.querySelector('.dice').style.display = 'none';


// Selecting elements by using getElementById instead of querySelector
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



// we use btn down here, instead of btn()
// This called call-back function, its a function that we pass into another function, as an argument
// function that is not call by us, but by another function as an argument
// However, here, we are using anonimouse function --- function() {.....}
document.querySelector('.btn-roll').addEventListener('click', function() {

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
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        /*
        The same way just like above
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
    }

    
});