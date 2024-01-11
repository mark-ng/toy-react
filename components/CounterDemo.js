import {useState} from "../app.js";

export default function CounterDemo() {
  const [count, setCount] = useState("count", 0);

  function increment() {
    setCount((count) => count + 1);
  }

  return {
    ele: "div",
    childs: [
      {
        ele: "button",
        textContent: "+",
        onclick: increment,
        childs: [],
      },
      {
        ele: "div",
        value: undefined,
        textContent: `Count: ${count}`,
        childs: [],
      },
    ],
  };
}
