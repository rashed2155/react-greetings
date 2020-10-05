import React from "react";
import './App.css';

function App() {
  let greeting = "";
  const cssStyle = {};

  let curTime = new Date().getHours().toLocaleString();

  if (curTime >= 1 && curTime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "red";
  }

  return (
    <div className="heading">
      <h1>hello sir, <span style={cssStyle}>{greeting}</span> </h1>
    </div>
  );
}

export default App;
