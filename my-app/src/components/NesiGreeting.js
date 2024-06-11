import React from "react";

export default function NesiGreeting(props) {
  return (
    <div className="greeting">
      <h1>Hello, {props.name} I know you are {props.age} years old and you have {props.children} children</h1>
    
    </div>
  );
}