import { useState, useEffect } from "react";

export const useController = () => {
    const [score, setScore] = useState({
        player1: 0,
        player2: 0,
        draws: 0
    })
    const [squares, setSquares] = useState<string[]>(new Array(9).fill(""))

    const checkWinner = () => {}
    const markSquare = () => {}
    const resetGame = () => {}

    return {
        score,
        setScore,
        squares,
        setSquares,
        checkWinner,
        markSquare,
        resetGame
    }
}

export default useController;