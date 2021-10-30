/*
 * File: Card.js
 * -------------
 * This file defines the Card class, which represents a playing card.
 */

"use strict";

/* Constants */

const CLUBS = 0;
const DIAMONDS = 1;
const HEARTS = 2;
const SPADES = 3;

const ACE = 1;
const JACK = 11;
const QUEEN = 12;
const KING = 13;

/*
 * Creates a new Card object with the specified number of pips on each
 * side.
 */

function Card(rank, suit) {
    if (suit === undefined) {
        let str = rank;
        switch (str.charAt(str.length - 1)) {
            case "C": suit = CLUBS; break;
            case "D": suit = DIAMONDS; break;
            case "H": suit = HEARTS; break;
            case "S": suit = SPADES; break;
            default: alert("Illegal card designation: " + str);
        }
        switch (str.charAt(0)) {
            case "A": rank = ACE; break;
            case "J": rank = JACK; break;
            case "Q": rank = QUEEN; break;
            case "K": rank = KING; break;
            default:
                rank = parseInt(str.substring(0, str.length - 1));
                if (isNaN(rank)) alert("Illegal card designation: " + str);
        }
    }
    let suitName = "";
    switch (suit){
        case 0: suitName = "Clubs"; break;
        case 1: suitName = "Diamonds"; break;
        case 2: suitName = "Hearts"; break;
        case 3: suitName = "Spades"; break;
        default: suitName = "unknown";
    }
    return { getRank, getSuit, getSuitName, toString };

/*
 * Returns the rank of the card.
 */

   function getRank() {
      return rank;
   }


    /*
     * Returns the suit of the card as an integer.
     */

    function getSuit() {
        return suit;
    }

    /*
 * Returns the suit of the card as a string.
 */

    function getSuitName() {
        return suitName;
    }
/*
 * Converts the card into a string.
 */

   function toString() {
      let str = "";
      switch (rank) {
       case ACE: str += "A"; break;
       case JACK: str += "J"; break;
       case QUEEN: str += "Q"; break;
       case KING: str += "K"; break;
       default: str += rank;
      }
      switch (suit) {
       case CLUBS: str += "C"; break;
       case DIAMONDS: str += "D"; break;
       case HEARTS: str += "H"; break;
       case SPADES: str += "S"; break;
      }
      return str;
   }

}
