// Single source of truth
let name = "";
let count = 0;

function createVDOM() {
  return [
    ["input", name, handle],
    ["div", `Hello, ${name}`],
    ["div", "Great job!"],
    ["button", "+", null, increment],
    ["div", `Count: ${count}`],
  ];
}

function handle(e) {
  name = e.target.value;
}

function increment() {
  count += 1;
}

// Framework

let curVDOM;
let prevVDOM;
let elems;

function findDiff(prev, current) {
  for (let i = 0; i < current.length; i++) {
    if (JSON.stringify(prev[i]) !== JSON.stringify(current[i])) {
      elems[i].textContent = current[i][1];
      elems[i].value = current[i][1];
    }
  }
}

function updateDOM() {
  if (elems == undefined) {
    curVDOM = createVDOM();
    elems = curVDOM.map(convert);
    document.body.append(...elems);
  } else {
    prevVDOM = [...curVDOM];
    curVDOM = createVDOM();
    findDiff(prevVDOM, curVDOM);
  }
}

/*
 This function is responsible for converting virtual DOM
 element to real DOM element
*/
function convert(node) {
  let ele = document.createElement(node[0]);
  ele.textContent = node[1];
  ele.value = node[1];
  ele.oninput = node[2];
  ele.onclick = node[3];
  return ele;
}

setInterval(updateDOM, 15);
