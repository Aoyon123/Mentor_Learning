import React, { useState } from "react";

const Hook = (props) => {
  const [fruiteState, setFruiteState] = useState({
    fruits: [
      { name: "Mango", weight: "120gm" },
      { name: "Apple", weight: "20gm" },
      { name: "Orange", weight: "60gm" },
    ],
  });

  const clickHandler = () => {
    setFruiteState({
      fruits: [
        { name: "Samsung", weight: "120gm" },
        { name: "Apple", weight: "20gm" },
        {
          name: "Nokia",
          weight: "60gm",
        },
      ],
    });
  };
  return (
    <div>
      <button onClick={clickHandler}>Click Me</button>
      <h1>Fruit Name Is {fruiteState.fruits[0].name}</h1>
      <h1>Fruit Name Is {fruiteState.fruits[1].name}</h1>
      <h1>Fruit Name Is {fruiteState.fruits[2].name}</h1>
    </div>
  );
};

export default Hook;
