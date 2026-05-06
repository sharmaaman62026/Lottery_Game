import React, { useState } from "react";
import "./Game1.css"; 

function Game1() {
  const [number, setNumber] = useState(100);
  const [totalsum, setTotalSum] = useState(1); // Sum of 100 is 1

  function getNewTicktet() {
    const random = Math.floor(Math.random() * 900) + 100;
    setNumber(random);
    check(random);
  }

  function check(num) {
    let total = 0;
    let tempNum = num;
    while (tempNum > 0) {
      total += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }
    setTotalSum(total);
  }

  const isWinner = totalsum === 15;

  return (
    <div className="full-page-container">
      <div className="glass-card">
        <h1 className="title">Lottery Game</h1>
        
        <div className={`message-box ${isWinner ? "winner" : ""}`}>
          {isWinner ? (
            <span>🎉 Congratulations, you won!</span>
          ) : (
            <span>Try your luck! (Target Sum: 15)</span>
          )}
        </div>

        <div className="ticket-container">
          <p className="label">Your Ticket Number</p>
          <div className="number-display">
            {number}
          </div>
          <p className="sum-display">Digit Sum: <strong>{totalsum}</strong></p>
        </div>

        <button className="action-button" onClick={getNewTicktet}>
          Get New Ticket
        </button>
      </div>
    </div>
  );
}

export default Game1;