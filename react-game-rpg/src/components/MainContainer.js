import React, { Component } from "react";
import Game, { GAME } from "./Game"
import Home from "./game/Home";
import Start from "./game/Start";


class MainContainer extends Component {
  state = {
    currentGame: GAME.HOME
  };

  handleGameChange = game => {
    this.setState({ currentGame: game });
  };

  renderChange = () => {
    switch (this.state.currentGame) {
      case GAME.HOME:
        return <Home />;
      case GAME.START:
        return <Start />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <div>
        <Game
          currentState={this.state.currentGame}
          handleStateChange={this.state.handleGameChange}
        />
        {this.renderChange()}
      </div>
    );
  }
}

export default MainContainer;