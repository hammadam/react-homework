import Status from '../Status/Status';
import Squares from '../Squares/Squares';
import S from './Board.module.css';

function Board(){

  return(
    <div className={S.component}>
      <h2>Who&apos;s the next winner?</h2>
      <Status />
      <Squares />
    </div>
  )
}

export default Board;