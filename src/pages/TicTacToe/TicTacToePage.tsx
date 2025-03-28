import { useState } from "react";

import "@pages/style/TicTacToeApp.css";
import Block from "@components/TicTacToe/Block";

const TicTacToeApp = () => {
  const [block, setBlock] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const getCurrentTurnText = () => {
    return `Current Turn: ${currentTurn}`;
  };

  const checkTie = (blocks: string[]) => {
    return blocks.every((cell) => cell !== null);
  };
  const checkWinner = (block: string[]) => {
    const winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCases.length; i++) {
      const [a, b, c] = winCases[i];
      if (block[a] && block[a] === block[b] && block[a] === block[c]) {
        return block[a];
      }
    }
    return null;
  };
  console.log(block);

  const handleClick = (index: number) => {
    const blockCopy = [...block];

    // if block is already filled or there is a winner
    if (blockCopy[index] || checkWinner(blockCopy)) return;
    blockCopy[index] = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");

    setBlock(blockCopy);

    // check winner and if there is a tie then call the checkTie function
    const winner = checkWinner(blockCopy);
    const tie = checkTie(blockCopy);
    if (winner) {
      setTimeout(() => {
        alert(`Winner: ${winner}`);
        setBlock(Array(9).fill(null));
      }, 25);
    } else if (tie) {
      setTimeout(() => {
        alert("It's a tie!");
        setBlock(Array(9).fill(null));
      }, 25);
    }
  };

  return (
    <div className="default content board">
      <h1>Tic Tac Toe App</h1>
      <h3>{getCurrentTurnText()}</h3>
      <div className="row">
        <Block value={block[0]} onClick={() => handleClick(0)} />
        <Block value={block[1]} onClick={() => handleClick(1)} />
        <Block value={block[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Block value={block[3]} onClick={() => handleClick(3)} />
        <Block value={block[4]} onClick={() => handleClick(4)} />
        <Block value={block[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Block value={block[6]} onClick={() => handleClick(6)} />
        <Block value={block[7]} onClick={() => handleClick(7)} />
        <Block value={block[8]} onClick={() => handleClick(8)} />
      </div>
      <br />
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default TicTacToeApp;
