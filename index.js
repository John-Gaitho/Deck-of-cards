

let deckId = '';  // calling the unique ID.
document.addEventListener("DOMContentLoaded",() => {
  async function createDeck() {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
      const data = await response.json();
      deckId = data.deck_id;
      document.getElementById('shuffleDeck').disabled = false; // to disable or enable buttons.
      document.getElementById('drawCards').disabled = false;
      alert('Deck created!');
  }
  async function shuffleDeck() {
      await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
      alert('Deck shuffled!');
  }
  
  async function drawCards() {
      const count = document.getElementById('cardCount').value; // this allow the player to choose num of cards to pull.
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/${count}/`);
      const data = await response.json();
  
  displayCards(data.cards); // the json data and, the cards array .
    
  }
  function displayCards(cards) {
      const cardsContainer = document.getElementById('cards'); // the div container in html file.
      cardsContainer.innerHTML = ''; // Clear previous cards.

  cards.forEach(card => {
      const cardImg = document.createElement('img');
      cardImg.src = card.image;
      cardImg.alt = `${card.value} of ${card.suit}`;
      cardImg.className = 'card';
      cardsContainer.appendChild(cardImg);
      if  ([ 'QUEEN', 'JACK'].includes(card.value)) { // this checks if the drawn card, includes or has that value.
        alert('Sorry Man, You Burst! Please shuffle.')
    } else if(card.value === 'ACE') {
        alert('You Win My G,')
    }
    })
  };

  document.getElementById('createDeck').addEventListener('click', createDeck); //this are listening to clicks and perfoming that particular fuction.
  document.getElementById('shuffleDeck').addEventListener('click', shuffleDeck);
  document.getElementById('drawCards').addEventListener('click', drawCards);

  var form = document.getElementById('form');

  form.addEventListener('submit', function (e){
  e.preventDefault() // to prevent auto submit.

  var age = document.getElementById('age').value
  console.log(age);
  })


});

