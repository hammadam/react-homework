import { PLAYER_LIST, WINNERS_COLOR} from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares.module.css';
import { oneOf, arrayOf, shape, number, func } from 'prop-types';

const OneOfPlayerType = oneOf(PLAYER_LIST);
const oneOfPlayerListType = arrayOf(OneOfPlayerType);
const WinnerInfoType = shape({
  winner:OneOfPlayerType,
  condition: arrayOf(number),
});

Squares.propTypes = {
  squares: oneOfPlayerListType.isRequired,
  winnerInfo:WinnerInfoType,
  onPlay:func,
}

// 상태를 가지지 않는(statusless) 컴포넌트
function Squares({squares, winnerInfo, onPlay}) {
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
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>{square}</Square>
        )
      })}
    </div>
  );
}

export default Squares;