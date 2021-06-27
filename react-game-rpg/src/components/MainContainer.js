import React, { Component } from "react";
import Home from "./game/Home";
import Game, { GAME } from "./game"

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
      default:
        return <Home />
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