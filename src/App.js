import "./App.css";
import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

export default function App() {
  const [game, setGame] = useState(new Chess());

  useEffect(() => {
    setGame(new Chess());
  }, []);
  const makeMove = (move) => {
    game.move(move);
    setGame(new Chess(game.fen()));
  };

  function makeRandomMove() {
    const possibleMoves = game.moves();
    console.log(possibleMoves, "possibleMoves");
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0)
      return;
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare) {
    console.log(sourceSquare, targetSquare, "sourceSquare, targetSquare");
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }
  return (
    <div className="chess_Flex">
      <div className="content">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
      </div>
    </div>
  );
}
