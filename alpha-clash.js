// function play(){
// //    hidden home page

//     const homescrin = document.getElementById('home-scrin');
//     homescrin.classList.add('hidden')
    
//     // get plaground scrin
//     const plagroundscrin = document.getElementById('playground-scrin');
//     plagroundscrin.classList.remove('hidden')

// }

// continue playing

function handleKeybuttonPrass(event){

  const playerprass = event.key;
  console.log('player prass',playerprass);

  // click Esc to skip game 

  if(playerprass==='Escape'){
    gameover();
  }

  const currentAlphabetElemant = document.getElementById('carant-alphabet');

   const currentAlphabet =currentAlphabetElemant.innerText
   
   const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerprass,expectedAlphabet);

//  chake match or not
if(playerprass===expectedAlphabet){
  console.log('You got point')

  const currentscore = getTextElemantValueById('current-score')
  const updatedscore = currentscore + 1;

  setTextElemantValueById('current-score',updatedscore)


// // 1-get current score
//   const currentscoreElemant = document.getElementById('current-score');
//   const currentscoreText = currentscoreElemant.innerText;
//   const currentscore = parseInt(currentscoreText);

// // 2-incrasc current score
//   const newscore = currentscore + 1;

// // 3-set updata score

// currentscoreElemant.innerText = newscore

  console.log('You have prass corectly',expectedAlphabet)
  removeBackgroundColor(expectedAlphabet);
  continueGame();
}

else{
  console.log('You lost a life')

  const currentlife = getTextElemantValueById('current-life')
  const updatedlife = currentlife - 1;

  setTextElemantValueById('current-life',updatedlife)
  

 
  if(updatedlife===0){
    gameover()
  }



//   // 1-get current life
//   const currentlifeElemant = document.getElementById('current-life');
//   const currentlifeText = currentlifeElemant.innerText;
//   const currentlife = parseInt(currentlifeText);

// // 2-incrasc current score
//   const radiouslife = currentlife - 1;

// // 3-set updata score

// currentlifeElemant.innerText = radiouslife ;


}
}

document.addEventListener('keyup',handleKeybuttonPrass);


function continueGame(){

// step-1 generat a random number
const alphabet = getArandomAlphabet()
//  set random generated alphabet

console.log('Your random alpha',alphabet);

const carantAlphabet = document.getElementById('carant-alphabet');

carantAlphabet.innerText=alphabet ;

// set background color

setBackgroundColor(alphabet);

}

function play(){
  // hide every thing only show playground
    hideElemantById('home-scrin');
    hideElemantById('score-bode');
    showElemantById('playground-scrin');

    // reset life and score
    setTextElemantValueById('current-life',5)
    setTextElemantValueById('current-score',0)
    continueGame();
}

// hidden plaground and display score bode

function gameover(){
  hideElemantById('playground-scrin');
  showElemantById('score-bode');

  // set the finel score

  const lestfinelscore = getTextElemantValueById('current-score')
  setTextElemantValueById('scoreon-bode',lestfinelscore)

  // clear the last selected alphabet
   const selectedAalphabet = getElemantTextById('carant-alphabet')
   removeBackgroundColor(selectedAalphabet);
}