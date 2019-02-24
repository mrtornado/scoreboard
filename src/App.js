import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Michael",
        id: 1,
        score: 0
      },
      {
        name: "Andreea",
        id: 2,
        score: 0
      },
      {
        name: "John",
        id: 3,
        score: 0
      },
      {
        name: "Gabi",
        id: 4,
        score: 0
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState(function(prevState) {
      return {
        players: prevState.players.filter(function(p) {
          return p.id !== id;
        })
      };
    });
  };

  handlePlayerScore = (index, delta) => {
    this.setState((prevState) => {
      return {
        score: (prevState.players[index].score += delta)
      };
    });
  };

  handleAddPlayer = (name) => {
    const newState = this.state.players.concat({
      name: name,
      score: 0,
      id: this.state.players[this.state.players.length - 1].id + 1
    });
    this.setState((prevState) => {
      return {
        players: newState
      };
    });
  };

  render() {
    return (
      <div className="scorebord">
        <Header title="Scorebord" totalPlayers={this.state.players.length} />

        {this.state.players.map((player, index) => {
          return (
            <Player
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              score={player.score}
              playerIndex={index}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handlePlayerScore}
            />
          );
        })}
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
