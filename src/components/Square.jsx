import React from "react";

// value(prop)
// onclick funtion
const style = {
  background: "lightblue",
  border: "2px solid black",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick} style={style}>
      {props.value}
    </button>
  );
}
