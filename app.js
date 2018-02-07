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
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);  It's removed because it is now declared down here ----document.querySelector('#score-0').textContent = dice;------


// change the content of HTML element
// There are two ways of changing the content of the selection, first is TEXTCONTENT and second is INNERHTML
document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';

// Another way of using "DOM querySelector", just to read the value/content of the element with this id, score 0, and store it here into variabe x
var x = document.querySelector('#score-0').textContent;
console.log(x);


// Example of using DOM to select CSS property
document.querySelector('.dice').style.display = 'none';