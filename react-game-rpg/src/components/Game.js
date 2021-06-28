import React from "react";

export const GAME = {
  HOME: "Home",
  START: "Start",
}

const game = {
  margin:"4px",
  width:"50px",
}

function Game(props) {
  return (
    <p class="gameArea">
      <div class="links">
        <a href="#home" onClick={() => props.handlePageChange("Home")} title="HOME" className="nav-link">
        {/* <img src={require ("#")} style={game} /> */}
        </a>
        <a href="#start" onClick={() => props.handlePageChange("Start")} title="START" className="nav-link">
        {/* <img src={require ("#")} style={game} /> */}
        </a>
      </div>
    </p>
  );
}

export default Game;