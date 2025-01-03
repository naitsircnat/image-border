import React from "react";
import bicycle from "./assets/bicycle.png";
import "./index.css";

function Image() {
  return <img className="bicycle" src={bicycle} alt="bicycle" />;
}

function App() {
  return <Image />;
}

export default App;
