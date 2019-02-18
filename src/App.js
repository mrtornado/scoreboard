import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Michael",
        id: 1
      },
      {
        name: "Andreea",
        id: 2
      },
      {
        name: "John",
        id: 3
      },
      {
        name: "Gabi",
        id: 4
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

  render() {
    return (
      <div className="scorebord">
        <Header title="Scorebord" totalPlayers={this.state.players.length} />

        {this.state.players.map((player) => {
          return (
            <Player
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
