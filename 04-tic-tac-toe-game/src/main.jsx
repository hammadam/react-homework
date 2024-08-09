import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from '@/tic-tac-toe/Game';
import '@/styles/Board.css';
import '@/styles/Game.css';
import '@/styles/global.css';
import '@/styles/History.css';
import '@/styles/Square.css';
import '@/styles/Squares.css';
import '@/styles/Status.css';

const container = document.getElementById('react-app');

if(container){
  createRoot(container).render(
    <StrictMode>
      <Game />
    </StrictMode>
  );
} else {
  console.log('문서에 "#app" 요소가 존재하지 않습니다.');
}