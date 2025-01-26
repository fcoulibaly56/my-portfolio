import React, { useState } from 'react';
import './Ludo.css';// style du ludo

const Ludo = () => {
  const totalCells = 25; // 5x5 grid
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerPositions, setPlayerPositions] = useState({ 1: 0, 2: 0 });
  const [diceResult, setDiceResult] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const movePlayer = (player, steps) => {
    if (gameOver) return;

    const newPosition = Math.min(playerPositions[player] + steps, totalCells - 1);
    setPlayerPositions((prev) => ({ ...prev, [player]: newPosition }));

    if (newPosition === totalCells - 1) {
      setGameOver(true);
    }
  };

  const rollDice = () => {
    if (gameOver) return;

    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
    movePlayer(currentPlayer, result);

    if (!gameOver) {
      setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    }
  };

  const resetGame = () => {
    setPlayerPositions({ 1: 0, 2: 0 });
    setDiceResult(0);
    setGameOver(false);
    setCurrentPlayer(1);
  };

  const cells = Array(totalCells).fill(null);

  return (
    <div className="ludo-game">
      {gameOver && (
        <div className="winner-screen">
          <div className="winner-message">
            🎉 Player {currentPlayer} wins!
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}

      {!gameOver && (
        <>
          <h1>Ludo Game</h1>
          <div className="board">
            {cells.map((_, index) => (
              <div key={index} className="cell">
                {playerPositions[1] === index && <div className="player1"></div>}
                {playerPositions[2] === index && <div className="player2"></div>}
              </div>
            ))}
          </div>
          <div className="controls">
            <p className="status">
              Player {currentPlayer}'s turn ({currentPlayer === 1 ? 'Red' : 'Green'})
            </p>
            <button onClick={rollDice} disabled={gameOver}>
              Roll the Dice
            </button>
            <p className="dice-result">Dice result: {diceResult}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Ludo;