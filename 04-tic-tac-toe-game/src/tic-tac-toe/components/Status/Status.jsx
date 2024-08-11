import S from './Status.module.css';
import { OneOfPlayerType } from '@/tic-tac-toe/types/type.d';
import { bool } from 'prop-types';


Status.propTypes = {
  winner: OneOfPlayerType,
  nextPlayer:OneOfPlayerType.isRequired,
  isDraw: bool,
}




function Status({winner, nextPlayer, isDraw = false}){
  let statusMessage = `이번 턴 플레이어 : ${nextPlayer}`;
  if (winner) statusMessage = `위너!! ${winner}`;
  if (isDraw) statusMessage = '비겼어요! 한번더?';

  return <h3 className={S.component}>{statusMessage}</h3>;
}

export default Status;