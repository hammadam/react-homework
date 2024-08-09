function Game(){
  return(
    <div className="Game">
      <div className="Board">
        <h2 className="Gametitle">Who&apos;s the next winner?</h2>
        <h3 className="Status">플레이어: 🍄</h3>
        {/* <h3>👑의 승리!</h3> */}
        {/* <h3>무승부! 😅</h3> */}
        <div className="Squares">
          <button className="Square" disabled>🍄</button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square" disabled>🐤</button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
        </div>
        <div className="History">
          <ol>
            <li>
              <button type="button">게임 시작</button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Game;