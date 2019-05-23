var cards = [
  {
    rank  : "queen",
    suit : "diamonds",
    cardImage : "images/queen-of-diamonds.png"
  },
  {
    rank  : "queen",
    suit : "hearts",
    cardImage : "images/queen-of-hearts.png"
  },
  {
    rank  : "king",
    suit : "diamonds",
    cardImage : "images/king-of-diamonds.png"
  },
  {
    rank  : "king",
    suit : "hearts",
    cardImage : "images/king-of-hearts.png"
  },
];
var cardsInPLay  = [];
var cardId;
function checkForMatch(){
    var score = 0;
    var scorePlace = document.getElementById('score');
    if(cardsInPLay.length === 2 ){
        if(cardsInPLay[0] === cardsInPLay[1]){
            alert("You found a match!");
            score++;
        } else {
            score = 0;
            alert("Sorry, try again");
        }
        scorePlace.textContent = score;
    }

}
function flipCard(){
    cardId = this.getAttribute('data-id');
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].rank);
    cardsInPLay.push(cards[cardId].rank);
    this.setAttribute('src',cards[cardId].cardImage);
    checkForMatch();
}

function createBoard() {
  for(let i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src',"images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
function resetCard() {
  for(let i = 0; i < cards.length; i++){
    var cardElement = document.getElementsByTagName('img')[i];
    cardElement.setAttribute('src',"images/back.png");
    cardsInPLay.pop();
  }
}
createBoard();
document.getElementById('reset').addEventListener('click',resetCard);

