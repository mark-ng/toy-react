import {useState} from "../react.js";
import CounterDemo from "./CounterDemo.js";
import ImgDemo from "./ImgDemo.js";
import InputDemo from "./InputDemo.js";
import ToggleDemo from "./ToggleDemo.js";

const pages = [InputDemo, ImgDemo, ToggleDemo, CounterDemo];

export default function Root() {
  const [page, setPage] = useState(0);

  return {
    ele: "div",
    childs: [
      {
        ele: "div",
        childs: [
          {
            ele: "button",
            textContent: "First",
            onclick: () => setPage(0),
            childs: [],
          },
          {
            ele: "button",
            textContent: "Second",
            onclick: () => setPage(1),
            childs: [],
          },
          {
            ele: "button",
            textContent: "Third",
            onclick: () => setPage(2),
            childs: [],
          },
          {
            ele: "button",
            textContent: "Fourth",
            onclick: () => setPage(3),
            childs: [],
          },
        ],
      },
      pages[page](),
    ],
  };
}
