
async function createDeck() {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const deckDetails = await response.json();
  console.log(deckDetails);
}
createDeck();

/*const deckUrl =  'https://deckofcardsapi.com/api/deck/new/shuffle/';
const cardsContainer = document.getElementById("card");
document.addEventListener("DOMContentLoaded",() => {
fetch(deckUrl)
  .then(res => res.json())
    

    
});

fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    .then(res => res.json())
      
    
let btn = document.getElementById('button');

btn.addEventListener('click', function() {
const count = 1; // number of cards to draw
fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${count}`)
    .then(res => res.json())
    //.then(card => console.log(cards)
    const cardsDetails = card.cards;
cardsContainer.innerText +=`<img id="card" src="${cardsDetails}" />`

}); 
  


form.addEventListener('submit', (e) => {
  e.preventDefauit()

  var answer = document.getElementById('age').value
  console.log(answer)
  let messages = []
  if(submit.value === 'No') {
    messages.push('Sorry, you cant play!')
  } else ('Welcome player')
 
});

});
*/
