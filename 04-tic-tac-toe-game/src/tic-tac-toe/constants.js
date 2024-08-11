export const PLAYER = {
  ONE: '🍄',
  TWO: '🐤',
};


export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 스퀘어 집합 : 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);

// 승리자의 컬러
export const WINNERS_COLOR = '#ff6a6a';

// 게임의 승리 조건 
const WINNER_CONDITIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [1,4,8],
  [2,4,6],
]


// 게임판 정보와 승리 조건 비교해서 결과 반환
export const checkWinner = (squares) => {
  let winnerInfo = null;
  for (const [x,y,z] of WINNER_CONDITIONS){
    const winner = squares[x];

    if(winner && winner === squares[y] && winner === squares[z]){
      console.log('GAME OVER');
      winnerInfo = {
        winner,
        condition: [x,y,z],
      };

      break;
      
    }
  }
  return winnerInfo;
};