import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./list.json";
import Word from "./Word";

let words = require("./list.json");
console.log(words);

class App extends React.Component {
  state = { stage: 1 };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={`./images/stage${this.state.stage}.jpg`}
            className="stage"
            alt={`stage${this.state.stage}`}
          />

          <button
            onClick={() => {
              this.increaseStage();
            }}
          >
            Click
          </button>
          <Word word={words[0]} />
        </header>
      </div>
    );
  }

  increaseStage = () => {
    this.setState((currentState) => {
      return { stage: currentState.stage + 1 };
    });
    console.log(this.state);
  };
}

export default App;
