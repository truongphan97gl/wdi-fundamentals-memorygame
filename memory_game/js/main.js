var cards = ["queen", "queen", "king", "king"];
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
    console.log("User flipped " + cards[cardId]);
    cardsInPLay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);