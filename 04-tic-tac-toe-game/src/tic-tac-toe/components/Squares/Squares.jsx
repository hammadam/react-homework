import { useState } from 'react';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT, WINNERS_COLOR} from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares.module.css';

// 상태를 가지는(Stateful) 컴포넌트
function Squares() {

  // ====== ⚫️🛑⚪️ === 게임상태 === ⚪️🛑⚫️ ======
  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);



  // ====== ⚫️🛑⚪️ === 게임 상태 업데이트 기능 === ⚪️🛑⚫️ ======
  // 게임을 진행하는 함수
  
  const handlePlayGame = (index) => () => {
    // 아직 진행 중이라면? 게임 진행 (리액트에게 렌더 요청 → 화면 변경)
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });

      return nextSquares;
    });
  };

  // ====== ⚫️🛑⚪️ === 게임 파생된 상태 === ⚪️🛑⚫️ ======

  // 게임이 끝났나 ? 게임 끝났다고 사용자에게 알림 : 반환값에 따라 게임을 진행할지 말지 결정
  // squares?, isPlayOneTurn?, gameIndex?, currentPlayer?
  const winnerInfo = checkWinner(squares);
  console.log('승자는?',winnerInfo);
  
    

  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;   // 0 

  // 현재 게임 플레이어 ( [0] PLAYER.ONE ↔︎ [1] PLAYER.TWO )
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0 ; // true

  // 첫번째 플레이어의 턴이라면? PLAYER.ONE : 아니면 PLAYER.TWO
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍄'

  
  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square,index)=>{
        
        // 배경 색칠 공부를 위한 스타일 객체 정의
        const winnerStyles = {
          backgroundColor:null,
        }

        // 리액트! 게임 승자가 있는지 봐줘
        // winnerInfo는 null 또는 {winner, condition} 둘 중 하나!
        if(winnerInfo){
          // 승자가 있으면?
          // 1. 승자 조건 알려주기
          const [x,y,z] = winnerInfo.condition;

          // 2. 승자의 스퀘어(말판)에 배경색 넣기
          if(index === x || index === y || index === z){
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }


        return(
          <Square key={index} style={winnerStyles} onPlay={handlePlayGame(index)}>{square}</Square>
        )
      })}
    </div>
  );
}

export default Squares;