import React from "react";
import bicycle from "./assets/bicycle.png";
import food from "./assets/food.png";

import "./index.css";

function Image() {
  return <img className="bicycle" src={bicycle} alt="bicycle" />;
}

function Image2(props) {
  return <img className="bicycle" src={props.image} alt="unknown" />;
}

function Shout(props) {
  return <>{props.message.toUpperCase()}</>;
}

function SumOfTwo(props) {
  return props.num1 + props.num2;
}

function App() {
  return (
    <>
      <div>
        <Shout message="Hello" />
      </div>
      <div>
        <SumOfTwo num1={3} num2={4} />
      </div>
      <Image />
      <Image2 image={food} />
    </>
  );
}

export default App;
