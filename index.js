

const deck_id = "luvcg5u95nk7";
const deckUrl =  'https://deckofcardsapi.com/api/deck/new/shuffle/'
//const cardUrl =   `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`
const cardsContainer = document.getElementById("cards");
let image = "https://deckofcardsapi.com/static/img/QS.svg"
let card = "https://deckofcardsapi.com/static/img/QS.png"
document.addEventListener("DOMContentLoaded",() => {

fetch(deckUrl)
  .then(response => response.json())
  
fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    .then(response => response.json())
      
    
let btn = document.getElementById('button');

btn.addEventListener('click', function() {
const count = 1; // number of cards to draw
fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`)
    .then(res => res.json())
    .then(data => console.log(data));; 
      
    cardsContainer.innerText += `<img src="${'https://deckofcardsapi.com/static/img/QS.png'}">`
      
      

}) 
  

Form.addEventListener('submit', (e) => {
  let messages = []
  if(submit.value === 'No') {
    messages.push('Sorry, you cant play!')
  } else ('Welcome player')
  e.preventDefault()
});

});
