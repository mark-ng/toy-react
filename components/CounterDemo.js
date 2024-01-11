import {createState, data, updateData} from "../app.js";

export default function CounterDemo() {
  createState("count", 0);

  function increment() {
    updateData("count", (count) => count + 1);
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
        textContent: `Count: ${data["count"]}`,
        childs: [],
      },
    ],
  };
}
