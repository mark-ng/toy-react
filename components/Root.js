import CounterDemo from "./CounterDemo.js";
import ImgDemo from "./ImgDemo.js";
import InputDemo from "./InputDemo.js";

export default function Root() {
  return {
    ele: "div",
    childs: [InputDemo(), CounterDemo(), ImgDemo()],
  };
}
