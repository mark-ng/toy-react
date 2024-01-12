import {data, useState} from "../react.js";
import CounterDemo from "./CounterDemo.js";
import ImgDemo from "./ImgDemo.js";
import InputDemo from "./InputDemo.js";
import ToggleDemo from "./ToggleDemo.js";

const pages = [
  {name: "Form Demo", component: InputDemo},
  {name: "Image Demo", component: ImgDemo},
  {name: "Toggle Demo", component: ToggleDemo},
  {name: "Counter Demo", component: CounterDemo},
];

export default function Root() {
  const [page, setPage] = useState(0);

  return {
    ele: "div",
    childs: [
      {
        ele: "div",
        childs: pages.map((p, i) => ({
          ele: "button",
          textContent: p.name,
          onclick: () => setPage(i),
          childs: [],
        })),
      },
      {
        ele: "div",
        childs: [...pages.map((p, i) => p.component(page === i))],
      },
      {
        ele: "div",
        style: "position: absolute; bottom: 0;margin:10px;color:blue;",
        textContent: `Global State: ${JSON.stringify(data, null, 2)}`,
        childs: [],
      },
    ],
  };
}
