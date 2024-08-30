import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //insert an array of possible questions
  let data = [
    "What is the capital city of Canada?",
    "How many continents are there on Earth?",
    "What is the chemical symbol for gold?",
    "Who wrote the play 'Romeo and Juliet'?",
    "What is the largest planet in our solar system?",
    "In what year did the Titanic sink?",
    "What is the smallest prime number?",
    "Who painted the Mona Lisa?",
    "What is the speed of light in a vacuum (in meters per second)?",
    "Which element has the atomic number 1?",
  ];
  let pastQuestions = [];
  //useState to manage the input value:
  const [input, setInput] = useState("");

  //function to get a randomized question based on input and remove question from question list
  function randomQuestion(num) {
    let questionNumber = Math.floor(
      (Math.random() * num * 13246874376) % data.length
    );
    let question = data[questionNumber];
    data.splice(questionNumber, 1);
    pastQuestions.push(question);
    document.getElementById("questionOutput").innerHTML = question;
    console.log("pastquestions is: ", pastQuestions);
  }

  //Webpage Below
  return (
    <div>
      <h1>Doody's Game</h1>
      <p>Please Enter the Value on the Block You've Chosen</p>
      <input
        id="inputValue"
        onChange={() => setInput(document.getElementById("inputValue").value)}
      ></input>
      <button onClick={() => randomQuestion(input)}>Submit</button>
      <h1>Current Question</h1>
      {data.map(() => (
        <h1>hwllo</h1>
      ))}
      <h2 id="questionOutput"></h2>
      <h1>Past Questions</h1>
      <div>
        {pastQuestions.map((question) => (
          <h1>{question}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;
