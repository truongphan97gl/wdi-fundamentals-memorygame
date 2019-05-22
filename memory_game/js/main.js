var cards = [
  {
    rank  : "queen",
    suit : "diamonds",
    cardImage : "images/queen-of-diamonds.png"
  },
  {
    rank  : "queen",
    suit : "hearts",
    cardImage : "images/quene-of-hearts.png"
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
function checkForMatch(){
    if(cardsInPLay.length === 2 ){
        if(cardsInPLay[0] === cardsInPLay[1]){
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again");
        }
    }
}
function flipCard(cardId){
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].rank);
    cardsInPLay.push(cards[cardId].rank);
    checkForMatch();
}

flipCard(0);
flipCard(2);

