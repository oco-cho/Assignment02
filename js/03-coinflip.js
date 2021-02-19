//The Coin Flip Game

let coinFlip = Math.round(Math.random());
let choice = prompt('Select heads or tails');
if (coinFlip > .5) {
    // coinFlip = tails;
    if (choice === 'heads') {
        alert('The flip was tails but you chose heads...you lose!');
    } else if (choice === 'tails') {
            alert('The flip was tails and you chose tails...you win!');
        } else {
            alert(`${choice} is invalid. Refresh the page to try again.`);
        }  
} else if (coinFlip <= .5) {
    // coinFlip = heads;
    if (choice === 'heads') {
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === 'tails') {
        alert('The flip was heads but you chose tails...you lose!');
    } else {
        alert(`${choice} is invalid. Refresh the page to try again.`);
    }
}