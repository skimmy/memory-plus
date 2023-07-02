"use client";
import { useState } from "react";
import Card from "./card";

const deck = {
    name: "  Test Deck! ",
    cards: [
      {
        id: 1,
        head: "One",
      },
      {
        id: 2,
        head: "Two",
      },
      {
        id: 3,
        head: "Three",
      },
      {
        id: 4,
        head: "Four",
      },
      {
        id: 5,
        head: "Five",
      },
      {
        id: 6,
        head: "Six",
      }
    ],
    matches: [
      [1, 2],
      [3, 6],
      [4, 5]
    ]
  }

export default function Board() {
    const [flipped, setFlipped] = useState(deck.cards.map(c => false))
    function handleClick(i) {
        const array = flipped.map((f,index) => index === i ? !f : f);
        setFlipped(array);
    }
    return(
        <div style={{ width: "100%", display: "flex", flexWrap: "wrap", width: 600 }}>
        {deck.cards.map((card, i) => 
        <Card handleClick={() => handleClick(i)} flipped={flipped[i]}>
          <h3>Card {card.head}</h3>
          <p>{card.id}</p>
        </Card>)}
      </div>
    );
}