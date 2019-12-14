import React, { useState } from "react";
import ReactDOM from "react-dom";

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
  // ...
}

//Hooks are functions that let you “hook into”
//React state and lifecycle features from function components.

function App() {
  // Declare a new state variable, which we'll call "count"

  //useState is a Hook that lets us add React state to function components
  //We call it inside a function component to add some local state to it
  //React will preserve this state between re-renders.

  //useState returns a pair:
  //i)the current state value
  //ii)a function that lets us update it.

  //similar to this.setState in a class

  //The only argument to useState is the initial state

  //If we write a function component and realize we need to add some state to it,
  //previously we had to convert it to a class.
  //Now we can use a Hook inside the existing function component.

  //we are using array de-structuring to destructure the pair
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
