import "./App.css";
import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function App() {
  const [game, setGame] = useState(new Chess());

  console.log(game.ascii(), "game");
  return (
    <div className="chess_Flex">
      <div className="content">
        <Chessboard position={game.fen()} />
      </div>
    </div>
  );
}

export default App;
