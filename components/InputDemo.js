import {useState} from "../app.js";

export default function InputDemo() {
  const [name, setName] = useState("");

  function handle(e) {
    setName(e.target.value);
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
        textContent: `Hello , ${name}`,
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
