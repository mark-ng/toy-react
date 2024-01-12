import {useState} from "../react.js";

export default function ToggleDemo() {
  const [mounted, setMounted] = useState(true);

  function toggle() {
    setMounted((mounted) => !mounted);
  }

  return {
    ele: "div",
    childs: mounted
      ? [
          {
            ele: "button",
            onclick: toggle,
            textContent: "Hide Greeting",
            childs: [],
          },
          {
            ele: "div",
            textContent: "Hi 👋",
            childs: [],
          },
        ]
      : [
          {
            ele: "button",
            onclick: toggle,
            textContent: "Show Greeting",
            childs: [],
          },
        ],
  };
}
