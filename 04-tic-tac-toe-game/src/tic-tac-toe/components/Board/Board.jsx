import { useState } from 'react';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT} from '@/tic-tac-toe/constants';
import Status from '../Status/Status';
import Squares from '../Squares/Squares';
import S from './Board.module.css';

function Board(){
    // ====== ⚫️🛑⚪️ === 게임상태 === ⚪️🛑⚫️ ======
  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);



  // ====== ⚫️🛑⚪️ === 게임 상태 업데이트 기능 === ⚪️🛑⚫️ ======
  // 게임을 진행하는 함수
  
  const handlePlayGame = (index) => () => {
    // 게임을 계속 진행하려할 때
    // 1. 이미 게임이 종료된 경우
    if (winnerInfo){
      alert('게임이 종료되었습니다! \n다시 게임을 시작하려면 [게임 시작] 버튼을 눌러주세요 ')
      return;
    }

    // 2. 아직 게임이 진행중인 경우

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

  
    

  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;   // 0 

  // 현재 게임 플레이어 ( [0] PLAYER.ONE ↔︎ [1] PLAYER.TWO )
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0 ; // true

  // 첫번째 플레이어의 턴이라면? PLAYER.ONE : 아니면 PLAYER.TWO
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍄'

  
  return(
    <div className={S.component}>
      <h2>Who&apos;s the next winner?</h2>
      <Status />
      <Squares 
        squares={squares}
        winnerInfo={winnerInfo}
        onPlay={handlePlayGame}
      />
    </div>
  )
}

export default Board;