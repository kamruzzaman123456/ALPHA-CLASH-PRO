// function play(){
// //    hidden home page

//     const homescrin = document.getElementById('home-scrin');
//     homescrin.classList.add('hidden')
    
//     // get plaground scrin
//     const plagroundscrin = document.getElementById('playground-scrin');
//     plagroundscrin.classList.remove('hidden')

// }


function continueGame(){

// step-1 generat a random number
const alphabet = getArandomAlphabet()
//  set random generated alphabet

const carantAlphabet = document.getElementById('carant-alphabet');

carantAlphabet.innerText=alphabet
// set background color

setBackgroundColor(alphabet);
}

function play(){
    hideElemantById('home-scrin');
    showElemantById('playground-scrin');
    continueGame();
}