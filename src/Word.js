import React from "react";

function Word(props) {
  console.log(props.word);

  const newWord = "_ ".repeat(props.word.length)

  return <div>{props.word} {props.displayWord}</div>;

}

export default Word;
