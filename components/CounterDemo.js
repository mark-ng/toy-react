let count = 0;

function increment() {
  count += 1;
}

export default function CounterDemo() {
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
