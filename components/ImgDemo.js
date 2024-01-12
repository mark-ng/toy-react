export default function ImgDemo(isVisible) {
  return {
    ele: "div",
    style: `${!isVisible && "display:None;"}`,
    childs: [
      {
        ele: "img",
        src: "https://i.imgur.com/yXOvdOSs.jpg",
        alt: "A women",
        childs: [],
      },
    ],
  };
}
