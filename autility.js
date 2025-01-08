function hideElemantById(elemantId){
 const elemant =document.getElementById(elemantId);
 elemant.classList.add('hidden')
}

function showElemantById(elemantId){
 const elemant =document.getElementById(elemantId);
 elemant.classList.remove('hidden')
}

//  add Background Color
function setBackgroundColor(elemantId){
    const elemant =document.getElementById(elemantId);
    elemant.classList.add('bg-orange-400')

}

//  remove Background Color
function removeBackgroundColor(elemantId){
    const elemant =document.getElementById(elemantId);
    elemant.classList.remove('bg-orange-400')

}


function getArandomAlphabet(){
    const alphabetstring ='abcdefghijklmnopqrstuvwxytz/' ;
    const alphabets = alphabetstring.split('');

    //get random Number

    const randomNumber =Math.random()*28
    const index = Math.round(randomNumber);

    const alphabet =alphabets[index];

    return alphabet ;

}


// life and score function

function getTextElemantValueById( elemantId){
    const elemants = document.getElementById(elemantId);
    const elemantvalueText = elemants.innerText;
    const value = parseInt(elemantvalueText);
    return value;
}

// set score and value 

function setTextElemantValueById(elemantId,value){
    const elemants = document.getElementById(elemantId);
    elemants.innerText = value;
   
}

function getElemantTextById(elemantId){
    const elemant = document.getElementById(elemantId);
    const text = elemant.innerText;
    return text ;
}


