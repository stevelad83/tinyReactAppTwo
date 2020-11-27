import React from "react";
import "./App.css";
import "./list.json";
import Word from "./Word";

let words = require("./list.json");


class App extends React.Component {
  state = {
    stage: 1,
    actualWord: words[1],
    displayWord: null,
    guessedLetters: [],
  };

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

          <Word word={this.state.actualWord} displayWord={this.state.displayWord} />
        </header>
      </div>
    );
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {

      if (/[A-Za-z]/.test(event.key) && event.key.length === 1) {
        this.updateGuessedLetters(event.key)
        this.checkGuess(event.key)
      }

    })
  }

  updateGuessedLetters = (guess) => {
    this.setState((currState) => {
      const newStrArr = [];
      for (let letter of currState.actualWord) {
        if (currState.guessedLetters.includes(letter)) {
          newStrArr.push(letter)
        } else {
          newStrArr.push("_")
        }
      }

      return {
        guessedLetters: [guess, ...currState.guessedLetters],
        displayWord: newStrArr.join("")
      }
    })
  }

  checkGuess = (guess) => {
    console.log(guess);
    if (this.state.actualWord.includes(guess)) {
      // something
    } else {
      this.increaseStage();
    }
  }

  increaseStage = () => {
    this.setState((currentState) => {


      return {
        stage: currentState.stage + 1
      };
    });

  };


}

export default App;
