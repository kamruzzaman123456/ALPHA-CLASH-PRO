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


function getArandomAlphabet(){
    const alphabetstring ='abcdefghijklmnopqrstuvwxtz/' ;
    const alphabets = alphabetstring.split('');

    //get random Number

    const randomNumber =Math.random()*27
    const index = Math.round(randomNumber);

    const alphabet =alphabets[index];

    return alphabet ;
}
