
const deckUrl =  'https://deckofcardsapi.com/api/deck/new/shuffle/';

fetch(deckUrl)
  .then(response => response.json())
  
  .then(data => console.log(data));
  

  const deck_id = "8fdxs9viczhm"
  fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
  .then(response => response.json())
  .then(data => console.log(data));  
  let deckid = deck_id; 