import { PLAYER } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';

function Squares() {
  return (
    <div className="Squares">
      <Square></Square>
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
    </div>
  );
}

export default Squares;