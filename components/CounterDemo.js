import {useState} from "../react.js";

export default function CounterDemo(isVisible) {
  const [count, setCount] = useState(0);
  const [x, setX] = useState(1);

  function increment() {
    setCount((count) => count + 1);
    setX((x) => x + 1);
  }

  return {
    ele: "div",
    style: `${!isVisible && "display:None;"}`,
    childs: [
      {
        ele: "button",
        textContent: "+",
        onclick: increment,
        childs: [],
      },
      {
        ele: "div",
        textContent: `Count: ${count}`,
        childs: [],
      },
      {
        ele: "div",
        textContent: `Double: ${count * 2}`,
        childs: [],
      },
      {
        ele: "div",
        textContent: `x: ${x}`,
        childs: [],
      },
    ],
  };
}
