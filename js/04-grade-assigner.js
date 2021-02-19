//The Grade Assigner Application

let score = Number(prompt('Enter your numerical grade, ex: 94.6'));
if (score >= 1 && score <= 100) {
    if (score >= 90 && score <= 100) {
        console.log('You received an A');
    } else if (score >= 80 && score <= 89) {
        console.log('You received an B');
    } else if (score >= 70 && score <= 79) {
        console.log('You received an C');
    } else if (score >= 60 && score <= 69) {
        console.log('You received a D');
    } else {
        console.log('You received an F');
    }
} else if (score < 1 || score > 100) {
    console.log('Sorry, you must enter a number between 1 and 100. Please refresh the page and try again.');
} else {
    console.log('Invalid entry. Please refresh the page and try again.');
}