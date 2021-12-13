import React, { useState } from "react";
import Square from "./Square";

//state
// boardstate, array with 9 null value
// turnstate
//handleclick
// copy of bord state
// if fill, turn
// mutate the board and add x or o
// show next turn
// set the board state
// set the turn state
// function calculatet winner

const style = {
  border: "3px solid black",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};
export default function Board() {
  const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    const newSquare = [...boardSquare];
    // win game or already filled
    if (calculateWinner(boardSquare) || newSquare[index]) return;

    newSquare[index] = xIsNext ? "X" : "O";

    setBoardSquare(newSquare);

    setXIsNext(!xIsNext);
  };
  // render square function
  // take in an index
  // return a square with value and function
  const renderSquare = (index) => {
    return (
      <Square value={boardSquare[index]} onClick={() => handleClick(index)} />
    );
  };

  function calculateWinner(squares) {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //loop set
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div>
      <div style={style}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
