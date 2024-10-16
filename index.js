
const deckUrl =  'https://deckofcardsapi.com/api/deck/new/shuffle/';

document.addEventListener("DOMContentLoaded",() => {
fetch(deckUrl)
  .then(response => response.json())
  
  .then(data => console.log(data));
  

const deck_id = "8fdxs9viczhm"
  fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
  .then(response => response.json())
  .then(data => console.log(data));  
  

let btn = document.getElementById('button');
btn.addEventListener('click', function() {



}

});