import { useState } from 'react';
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT} from '@/tic-tac-toe/constants';
import './styles/global.css';
import S from './Game.module.css';
import Board from './components/Board/Board';
import History from './components/History/History';


function Game() {
    // ====== ⚫️🛑⚪️ === 게임상태 === ⚪️🛑⚫️ ======
  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);

  // 게임 진행 순서
  const [gameIndex, setGameIndex] = useState(0);



  // ====== ⚫️🛑⚪️ === 게임 상태 업데이트 기능 === ⚪️🛑⚫️ ======
  // 게임을 진행하는 함수
  
  const handlePlayGame = (index) => () => {
    // 게임을 계속 진행하려할 때
    // 1. 이미 게임이 종료된 경우
    if (winnerInfo){
      alert('게임이 종료되었습니다! \n다시 게임을 시작하려면 [게임 시작] 버튼을 눌러주세요 ')
      return;
    }

    // 다음 게임의 인덱스는?
    const nextGameIndex = gameIndex + 1;
    
    //다음 게임 인덱스 상태 업데이트 요청
    setGameIndex(nextGameIndex);

    // 게임 히스토리에 기록 추가


    // 2. 아직 게임이 진행중인 경우

    // 아직 진행 중이라면? 게임 진행 (리액트에게 렌더 요청 → 화면 변경)
    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });

    const nextGameHistory = [
      ...gameHistory.slice(0, nextGameIndex),
      nextSquares
    ];

    setGameHistory(nextGameHistory);
  };


  // 시간 여행 기능(함수)
  const handleTimeTravel = (index) => {
    setGameIndex(index);
  }

  // ====== ⚫️🛑⚪️ === 게임 파생된 상태 === ⚪️🛑⚫️ ======

  // 게임 히스토리에서 현재 게임판은?
  const currentSquares = gameHistory[gameIndex];

  // 게임이 끝났나 ? 게임 끝났다고 사용자에게 알림 : 반환값에 따라 게임을 진행할지 말지 결정
  // squares?, isPlayOneTurn?, gameIndex?, nextPlayer?
  const winnerInfo = checkWinner(currentSquares);

  
    

  // 게임 순서 (0, 1, 2, 3, ...)
  //const gameIndex = squares.filter(Boolean).length;   // 0 

  // 현재 게임 플레이어 ( [0] PLAYER.ONE ↔︎ [1] PLAYER.TWO )
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = currentSquares.filter(Boolean).length % PLAYER_COUNT === 0 ; // true

  // 첫번째 플레이어의 턴이라면? PLAYER.ONE : 아니면 PLAYER.TWO
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍄'

  // 게임 상황 체크! (비긴 경우) : 모든 게임판의 말이 채워지고, 승자가 없을 경우
  const isDraw = !winnerInfo && currentSquares.every(Boolean);



  return (
    <div className={S.component}>
      <Board 
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History
        onTimeTravel={handleTimeTravel}
        gameHistory={gameHistory}
        gameIndex={gameIndex}
      />
    </div>
  );
}

export default Game;