export const PLAYER = {
  ONE: '🍄',
  TWO: '🐤',
};


export const PLAYER_COUNT = Object.keys(PLAYER).length;

// 스퀘어 집합 : 초기 상태 값
export const INITIAL_SQUARES = Array(9).fill(null);

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
