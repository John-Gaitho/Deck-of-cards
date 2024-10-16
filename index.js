
const deckUrl =  'https://deckofcardsapi.com/api/deck/new/shuffle/';

fetch(deckUrl)
  .then(response => response.json())
  
  .then(data => console.log(data));
  