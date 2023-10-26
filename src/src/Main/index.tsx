import React from 'react';
import * as S from './styles';
import useController from './controller';

function Main() {
  const controller = useController();
  
  return (
    <S.main>
      <S.gameContainer>
        {controller.squares.map((square, index) => (
          <S.squareOption key={`square_${index}`}>{square}</S.squareOption>
        ))}
      </S.gameContainer>
      <S.scoreBoard>
        <S.score>Player 1: {controller.score.player1}</S.score>
        <S.score>Player 2: {controller.score.player2}</S.score>
        <S.score>Empates: {controller.score.draws}</S.score>
      </S.scoreBoard>
    </S.main>
  );
}

export default Main;
