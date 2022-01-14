import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import Button from '@mui/material/Button';
import ReplayIccon from '@mui/icons-material/Replay';

export function TicTacToe() {
    const { width, height } = useWindowSize();
    const [board, setBoard] = useState([
        null, null, null, null, null, null, null, null, null
    ]);

    const [isXTurn, setIsXTurn] = useState(undefined);
    const handleClick = (index) => {
        console.log(index);
        if(!board[index] && !winner) {
            const boardCopy = [...board];
            boardCopy[index] = isXTurn ? "X" : "O";
            setBoard(boardCopy);
            setIsXTurn(!isXTurn);
        }
    };

    const decideWinner = board => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if(board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
                console.log("The winner is ", board[a]);
                return board[a];
            }
        }
        
        return null;
    };

    const winner = decideWinner(board);

    const styles = {color: isXTurn===true ? "red" : "green"};

    return (
    <div className="board-container">
        {winner ? <Confetti width={width} height={height} /> : ""}
        {isXTurn===undefined ?
            <div className="turn-container">
                <Button 
                    aria-label="X turn button" 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setIsXTurn(true)}
                >X's turn</Button>
                <Button 
                    aria-label="O turn button" 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setIsXTurn(false)}
                >O's turn</Button>
            </div> : 
            ""
        }
        {winner ? <h2>The winner is {winner}</h2> : <h2 style={styles}>It's {isXTurn ? "X" : "O"} turn</h2>}
        <div className="board">
            {board.map((val, index) => (
            <GameBox val={val} onPlayerClick={() => handleClick(index)} />
            ))}
        </div>
        {winner || !board.includes(null) ? 
        <div className="restart-button">
            <Button 
                aria-label="restart game" 
                variant="outlined" 
                color="primary" 
                startIcon={ <ReplayIccon /> }
                onClick={
                    () => {
                        setBoard([null, null, null, null, null, null, null, null, null])
                        setIsXTurn(undefined)
                    }}
            >Restart</Button>
        </div> : 
        ""}
    </div>
    );
}


function GameBox( { val, onPlayerClick } ) {
    // const val = "x";
    // const [val, setVal] = useState(null);
    const styles = {color: val==="X" ? "red" : "green"};
    return  (
        <div 
            style={styles} 
            onClick={() => onPlayerClick()}
            className="game-box"
        >
            {val}
        </div>
    )
}