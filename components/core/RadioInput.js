export default function RadioInput(id, name, value, onclick, style) {
  return {
    ele: "input",
    type: "radio",
    id: id,
    name: name,
    value: value,
    onclick: onclick,
    style: style,
    childs: [],
  };
}
