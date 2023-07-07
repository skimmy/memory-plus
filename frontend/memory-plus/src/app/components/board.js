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

export default function Board({feedbackDelay = 1000}) {
  // for each card 0 -> covered  1 -> flipped 2 -> matched
  const [flipped, setFlipped] = useState(deck.cards.map(c => 0))
  // will be inactive while verifying (no click)
  const [active, setActive] = useState(true);
  // condition of game ended
  const [end, setEnd] = useState(false);
  function handleClick(i) {
    if (!active || end) {
      return;
    }
    // flip the clicked card, if not matched (<2) 
    var updatedFlipped = flipped.map((f, index) => index === i && f < 2 ? 1 - f : f);
    // Gather positions of flipped card(s)
    const candidate = updatedFlipped.reduce((acc, value, idx) => {
      if (value === 1) {
        acc.push(idx);
      }
      return acc;
    }, []);
    var matched = false;
    // Here we set the value to flipped so that the animation starts
    setFlipped(updatedFlipped);

    if (candidate.length === 2) {
      // Then if we have exactly two cards flipped, we make board inactive
      // and verify whether or not the two cards match. All this is done with
      // a delay so that we still see the animation and the flipped cards
      setActive(false);
      setTimeout(() => {
        const id1 = deck.cards[candidate[0]].id;
        const id2 = deck.cards[candidate[1]].id;
        for (const match of deck.matches) {
          if ((id1 === match[0] && id2 === match[1]) || (id2 === match[0] && id1 === match[1])) {
            matched = true;
            break;
          }
        }
        for (const i of candidate) {
          updatedFlipped[i] = matched ? 2 : 0;
        }
        setFlipped(updatedFlipped);
        setActive(true);
        setEnd(updatedFlipped.every(e => e === 2));
      }, feedbackDelay)
    }

  }
  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap", width: 600 }}>
      {deck.cards.map((card, i) =>
        <Card key={i} handleClick={() => handleClick(i)} flipped={flipped[i]}>
          <h3>Card {card.head}</h3>
          <p>{card.id}</p>
        </Card>)}
    </div>
  );
}