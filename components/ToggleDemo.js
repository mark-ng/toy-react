import {useState} from "../react.js";

export default function ToggleDemo(isVisible) {
  const [mounted, setMounted] = useState(true);

  function toggle() {
    setMounted((mounted) => !mounted);
  }

  return {
    ele: "div",
    style: `${!isVisible && "display:None"}`,
    childs: [
      {
        ele: "button",
        onclick: toggle,
        textContent: "Hide Greeting",
        childs: [],
      },
      {
        ele: "div",
        style: `${!mounted && "display:None;"}`,
        textContent: "Hi 👋",
        childs: [],
      },
    ],
  };
}
