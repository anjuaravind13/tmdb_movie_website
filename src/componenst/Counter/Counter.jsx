import React, { useRef, useState } from "react";
import './Counter.css'

function Counter() {
  let [count, setCount] = useState(0);
  let num = useRef(0);

  function increaseCount() {
    count++;
    setCount(count);
  }

  function increaseNum() {
    num.current = num.current + 1;
    console.log(num.current);
  }

  console.log("num--->", num.current);
  console.log("count-->", count);
  return (
    <div className="counter">
      <h1>count - {count}</h1>
      <h1>num - {num.current}</h1>

      <button onClick={increaseCount}>count</button>
      <button onClick={increaseNum}>num</button>
    </div>
  );
}

export default Counter;
