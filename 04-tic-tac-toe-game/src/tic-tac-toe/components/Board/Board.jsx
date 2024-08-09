import Status from '../Status/Status';
import Squares from '../Squares/Squares';
import History from '../History/History';

function Board(){

  return(
    <div className="Board">
      <h2 className="Gametitle">Who&apos;s the next winner?</h2>
      <Status />
      <Squares />
      <History />
    </div>
  )
}

export default Board;