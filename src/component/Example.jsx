import Ca from "./Ca";
import React, { useContext } from "react";

export default function Example() {
  const value = useContext(Ca);
  return (
    <ul>
      {value.map((person) => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
