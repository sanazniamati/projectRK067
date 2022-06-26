import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Text } from "react-konva";

const App = () => {
  const [drag, setDrag] = useState(false);
  const handelDragStart = (e) => {
    setDrag((drag) => true);
    console.log("Drag started");
  };
  const handelDragEnd = (e) => {
    setDrag((drag) => false);
    const x = e.target.getPosition().x;
    const y = e.target.getPosition().y;
    console.log("x" + x + "y" + y);
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={"Dragging Text..."}
          x={10}
          y={10}
          fontSize={24}
          fontFamily={"Calibri"}
          fill={drag ? "green" : "black"}
          draggable
          onDragStart={handelDragStart}
          onDragEnd={handelDragEnd}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
