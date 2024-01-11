let name = "";

function handle(e) {
  name = e.target.value;
}

export default function InputDemo() {
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
