import { useState } from "react";
import "./App.css";

function Square({ squareValue, handleClick }) {
  return (
    <button className="square" onClick={handleClick}>
      {squareValue}
    </button>
  );
}

export default function Board() {
  const [boardValue, setBoardValue] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(false);

  function checkScore(boardValue) {
    const possibleWinPos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < possibleWinPos.length; i++) {
      const [a, b, c] = possibleWinPos[i];
      if (
        boardValue[a] &&
        boardValue[a] === boardValue[b] &&
        boardValue[a] === boardValue[c]
      ) {
        return boardValue[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    const nextboard = boardValue.slice();
    if (!nextboard[index] && !checkScore(boardValue)) {
      setIsX((prev) => !prev);
      if (isX) {
        nextboard[index] = "X";
      } else {
        nextboard[index] = "O";
      }
    }
    setBoardValue(nextboard);
  }

  return (
    <div>
      {boardValue && checkScore(boardValue) && (
        <p style={{textAlign: "center", fontSize: "larger", textTransform:"capitalize", fontWeight: "bold"}}>winner is: {checkScore(boardValue)}</p>
      )}
      <div className="game-board">
        <div className="board-row">
          <Square
            squareValue={boardValue[0]}
            handleClick={() => handleClick(0)}
          />
          <Square
            squareValue={boardValue[1]}
            handleClick={() => handleClick(1)}
          />
          <Square
            squareValue={boardValue[2]}
            handleClick={() => handleClick(2)}
          />
        </div>
        <div className="board-row">
          <Square
            squareValue={boardValue[3]}
            handleClick={() => handleClick(3)}
          />
          <Square
            squareValue={boardValue[4]}
            handleClick={() => handleClick(4)}
          />
          <Square
            squareValue={boardValue[5]}
            handleClick={() => handleClick(5)}
          />
        </div>
        <div className="board-row">
          <Square
            squareValue={boardValue[6]}
            handleClick={() => handleClick(6)}
          />
          <Square
            squareValue={boardValue[7]}
            handleClick={() => handleClick(7)}
          />
          <Square
            squareValue={boardValue[8]}
            handleClick={() => handleClick(8)}
          />
        </div>
      </div>
    </div>
  );
}
