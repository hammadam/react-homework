import S from './Status.module.css';
import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import { bool } from 'prop-types';


Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer:OneOfPlayerType.isRequired,
  isDraw: bool,
}




function Status({winner, nextPlayer, isDraw = false}){
  if(winner){
    return <h3 className={S.component}>위너: 🍄</h3>;
  }

  if(isDraw){
    return <h3 className={S.component}>비겼어요! 한번더?</h3>;
  }

  return <h3 className={S.component}>다음 플레이어 : {nextPlayer}</h3>;

}

export default Status;