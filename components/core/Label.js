export default function Label(isfor, content) {
  return {
    ele: "label",
    htmlFor: isfor,
    textContent: content,
    childs: [],
  };
}
