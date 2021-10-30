/*
 * File: Concentration.js
 * ----------------------
 * Program to play the solitaire game of Concentration.
 */

"use strict";

const TIMER_DELAY = 2000;

/* Main program */

function Concentration() {
   // create a deck of cards and shuffle it
   let deck = createDeck();
   shuffle(deck);
   initializeCardDisplay();

   // reset the first card flag and initialize the timer as stopped
   let firstCard = null;
   let timerRunning = false;

   // Initialize turns, pairs left and game over displays

   /* Create an array that contains all of the cards */
   function createDeck() {
      let deck = [ ];
      let suitName = "";
      for (let suit = CLUBS; suit <= SPADES; suit++) {
         for (let rank = ACE; rank <= KING; rank++) {
            deck.push(Card(rank, suit));
         }
      }
      return deck;
   }
/* Shuffle the array (the deck of cards).  Because arrays are passed by reference, the shuffled deck
 * is automatically "returned".
 */
   function shuffle(array) {
      let n = array.length;
      for (let lh = 0; lh < n - 1; lh++) {
         let rh = randomInteger(lh, n - 1);
         let tmp = array[lh];
         array[lh] = array[rh];
         array[rh] = tmp;
      }
   }

   // Assign cards to each of the img elements that are in a 4 x 13 grid
   // Traverse through each row
   function initializeCardDisplay() {
      for (let row = 0; row < 4; row++) {
         // Assign a card to each img element
         for (let col = 0; col < 13; col++) {
            // Extract the next card from the deck
            let card = deck[13 * row + col];
            // Create a variable based upon the img element position
            let id = "ABCD".charAt(row) + (col + 1);
            // Create an img object that corresponds to the img element
            let img = document.getElementById(id);
            // Call the initCard function to associate the card and its position
            initCard(card, img);
         }
      }
   }

   function initCard(card, img) {
      // set the card image property to be the element at a specific position
      card.image = img;
      // set up an event listener for a card
      img.addEventListener("click", clickAction);

      /* this function executes a user's click */
      function clickAction(e) {
         // if the timer is already running, then do nothing
         if (timerRunning) return
         // if the card is face down, then turn the card over
         if (img.src.endsWith("Back.png")) {
            img.src = "images/" + card.toString() + ".png";
            // if this is the first card turned over, then remember it
            if (firstCard === null) {
               firstCard = card;
            } else {
               // this is the second card, so check if it has the same rank as the first card
               if (card.getRank() === firstCard.getRank()) {
                  // the cards are the same so remove them and decrement the pairs left variable
                  startTimer(card, firstCard, "images/Empty.png", "empty");
               } else {
                  // the cards are not the same so turn them over again
                  startTimer(card, firstCard, "images/Back.png", "back of card");
               }
            }
         }
      }
   }
   /* This function controls the timer after the second card is selected
    * It takes the two cards as arguments as well as the image to be displayed when the time has expired
    * It will either be a blank if the cards are the same or the back of the card if they are different
    */
   function startTimer(card1, card2, src, alt) {
      // start the timer
      timerRunning = true;
      // when the time has been reached, process the cards
      setTimeout(processCards, TIMER_DELAY);

      function processCards() {
         // change the image on the cards
         card1.image.src = src;
         card2.image.src = src;
         // reset the first card flag and stop the timer
         firstCard = null;
         timerRunning = false;
      }
   }

}
