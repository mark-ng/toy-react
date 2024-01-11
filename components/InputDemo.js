import {createState, data, updateData} from "../app.js";

export default function InputDemo() {
  createState("name", "");

  function handle(e) {
    updateData("name", e.target.value);
  }

  return {
    ele: "div",
    childs: [
      {
        ele: "input",
        value: name,
        oninput: handle,
        childs: [],
      },
      {
        ele: "div",
        textContent: `Hello , ${data.name}`,
        childs: [],
      },
      {
        ele: "div",
        textContent: `Should never update`,
        childs: [],
      },
    ],
  };
}
