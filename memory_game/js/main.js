var cards = ["queen", "queen", "king", "king"];
var cardsInPLay  = [];
var cardOne = cards[3];
cardsInPLay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPLay.push(cardTwo);
console.log("User flipped " + cardTwo);

if(cardsInPLay.length === 2 ){
    if(cardsInPLay[0] === cardsInPLay[1]){
        alert("You found a match!");
    } else {
        alert("Sorry, try again");
    }
}