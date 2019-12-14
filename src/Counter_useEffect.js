import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Example() {
  const [count, setCount] = useState(0);

  //We can read the latest count inside the effect because it’s in the scope of our function.

  //When React renders our component, it will remember the effect we used,
  //and then run our effect after updating the DOM.
  //This happens for every render, including the first one.

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    //tell React to skip applying an effect ,
    //if certain values haven’t changed between re-renders.
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
