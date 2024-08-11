import Status from '../Status/Status';
import Squares from '../Squares/Squares';
import S from './Board.module.css';
import {bool,func} from 'prop-types';
import { OneOfPlayerType, WinnerInfoType, oneOfPlayerListType } from '@/tic-tac-toe/types/type.d';


Board.propTypes = {
  winnerInfo: WinnerInfoType,
  nextPlayer:OneOfPlayerType.isRequired,
  isDraw:bool.isRequired,
  squares:oneOfPlayerListType,
  onPlay:func
}


function Board({winnerInfo, nextPlayer, isDraw, squares, onPlay }){


  return(
    <div className={S.component}>
      <h2>Who&apos;s the next winner?</h2>
      <Status
        winner={winnerInfo?.winner}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
      />
      <Squares 
        squares={squares}
        winnerInfo={winnerInfo}
        onPlay={onPlay}
        isDraw={isDraw}
      />
    </div>
  )
}

export default Board;