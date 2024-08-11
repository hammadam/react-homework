import { useState } from 'react';
import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares.module.css';

// 상태를 가지는(Stateful) 컴포넌트
function Squares() {

  // ====== ⚫️🛑⚪️ === 게임상태 === ⚪️🛑⚫️ ======
  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);



  // ====== ⚫️🛑⚪️ === 게임 상태 업데이트 기능 === ⚪️🛑⚫️ ======
  // 게임을 진행하는 함수
  
  const handlePlayGame = (index) => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      })

      return nextSquares;
    })
  }

  // ====== ⚫️🛑⚪️ === 게임 파생된 상태 === ⚪️🛑⚫️ ======
  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;

  // 현재 게임 플레이어 ( [0] PLAYER.ONE ↔︎ [1] PLAYER.TWO )
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0 ;

  // 첫번째 플레이어의 턴이라면? PLAYER.ONE : 아니면 PLAYER.TWO
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  console.log('렌더딩\n\n', {squares, gameIndex, currentPlayer});
  


  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square,index)=>{
        return(
          <Square key={index} onPlay={() => handlePlayGame(index)}>{square}</Square>
        )
      })}
    </div>
  );
}

export default Squares;