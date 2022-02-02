import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("안바뀜");
  return (
    <div>
      <p>{value}</p>
      <B setvalue={setValue} />
    </div>
  );
}
function B({ setvalue }) {
  return (
    <div>
      <p>여긴B</p>
      <C setvalue={setvalue} />
    </div>
  );
}
function C({ setvalue }) {
  return (
    <div>
      <p>여긴C</p>
      <D setvalue={setvalue} />
    </div>
  );
}
function D({ setvalue }) {
  return (
    <div>
      <p>여긴C</p>
      <E setvalue={setvalue} />
    </div>
  );
}
function E({ setvalue }) {
  return (
    <div>
      <p>여긴E</p>
      <button onClick={click}>변경</button>
    </div>
  );
  function click() {
    setvalue("변경됨");
  }
}
