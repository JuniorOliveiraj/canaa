
import Button from '@mui/material/Button';




import React, { useState } from 'react';



function Square(props) {
    const buttonStyle = {
        width: 100,
        height: 100,
        backgroundColor: props.isWinner ? '#0070007a' : null,
    };

    return (
        <Button style={buttonStyle} variant="outlined" onClick={props.onClick}>
            {props.value}
        </Button>
    );
}

function Board(props) {
    const renderSquare = (i, isWinner) => {
        return (
            <Square
                value={props.squares[i]}
                isWinner={isWinner}
                onClick={() => props.onClick(i)}
            />
        );
    };

    const winnerData = calculateWinner(props.squares);
    const winningSquares = winnerData ? winnerData.winningSquares : [];


    return (
        <div>
       <div>
                {renderSquare(0, winningSquares.includes(0))}
                {renderSquare(1, winningSquares.includes(1))}
                {renderSquare(2, winningSquares.includes(2))}
            </div>
            <div>
                {renderSquare(3, winningSquares.includes(3))}
                {renderSquare(4, winningSquares.includes(4))}
                {renderSquare(5, winningSquares.includes(5))}
            </div>
            <div>
                {renderSquare(6, winningSquares.includes(6))}
                {renderSquare(7, winningSquares.includes(7))}
                {renderSquare(8, winningSquares.includes(8))}
            </div>
        </div>
    );
}
function Game() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null), move: null }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = [...current.squares];

        if (winner || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';

        setHistory([...newHistory, { squares, move: i }]);
        setStepNumber(newHistory.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };
    function resetGame() {
        setHistory([{ squares: Array(9).fill(null), move: 0 }]);
        setStepNumber(0);
        setXIsNext(true);
    }

    let resetButton;
    if (winner || history.length === 10) {
        resetButton = (
            <Button variant="contained" onClick={resetGame}>Reset Game</Button>
        );
    }


    const moves = history.map((step, move) => {
        const xOrO = (move % 2 === 0) ? 'X' : 'O';
        const desc = move ? `Go to move #${move} (${xOrO}: ${step.move})` : 'Go to game start';
        return (
            <li key={move}>
                <Button onClick={() => jumpTo(move)}>{desc}</Button>
            </li>
        );
    });

    
    let status;
    if (winner) {
      status = `Winner: ${winner.winner}`;
    } else if (history.length === 10) {
      status = 'Draw';
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    

    return (
        <div>
            <div>{status}</div>
            <Board squares={current.squares} onClick={handleClick} />
            <ol>{moves}</ol>
            {resetButton}
        </div>
    );

}

function calculateWinner(squares) {
    const lines = [        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                winningSquares: [a, b, c],
            };
        }
    }

    return null;
}


export default Game;
