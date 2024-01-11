import ImgDemo from "./components/ImgDemo.js";

// states
let name = "";
let count = 0;

// update state functions
function handle(e) {
  name = e.target.value;
}

function increment() {
  count += 1;
}

function createVDOM() {
  return {
    ele: "div",
    value: undefined,
    textContent: undefined,
    childs: [
      {
        ele: "input",
        value: name,
        textContent: undefined,
        oninput: handle,
        childs: [],
      },
      {
        ele: "div",
        value: undefined,
        textContent: `Hello , ${name}`,
        oninput: undefined,
        childs: [],
      },
      {
        ele: "div",
        value: undefined,
        textContent: `Should never update`,
        oninput: undefined,
        childs: [],
      },
      {
        ele: "button",
        value: undefined,
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
      ImgDemo(),
    ],
  };
}

// Framework

let currVDOM;
let prevVDOM;
let elems;

// Description: Diffing algorithm for virtualDOM
// Implementation: Recersively traverse through the previous virtualDOM and current virtualDOM,
// modify the element in actualDOM only when there is a difference on the go
function findDiff(prev, curr, elems) {
  const {childs: prevChilds, ...prevProperties} = prev;
  const {childs: currChilds, ...currProperties} = curr;
  if (JSON.stringify(prevProperties) !== JSON.stringify(currProperties)) {
    /* ASSUMPTION ALERT: the component properties from the virtualDOM 
      have the same name as the properties from the actualDOM */
    for (let key of Object.keys(currProperties)) {
      elems[key] = currProperties[key];
    }
  }
  for (let i = 0; i < prevChilds.length; i++) {
    findDiff(prevChilds[i], currChilds[i], elems.childNodes[i]);
  }
}

function updateDOM() {
  if (elems == undefined) {
    // create the virtualDOM from states
    currVDOM = createVDOM();
    // convert the virtualDOM elements to actualDOM elements
    elems = dfsConvert(currVDOM);
    // mounting the actualDOM elements to the actualDOM
    document.body.append(elems);
  } else {
    // Save the current virtualDOM for diffing algorithm
    prevVDOM = JSON.parse(JSON.stringify(currVDOM));
    currVDOM = createVDOM();
    findDiff(prevVDOM, currVDOM, elems);
  }
}

function dfsConvert(root) {
  let ele = convert(root);
  for (let child of root.childs) {
    ele.appendChild(dfsConvert(child));
  }
  return ele;
}

/*
 This function is responsible for converting virtual DOM
 element to real DOM element
*/
function convert(node) {
  let ele = document.createElement(node.ele);
  const {child, ...nodeProperties} = node;
  for (let key of Object.keys(nodeProperties)) {
    ele[key] = nodeProperties[key];
  }
  return ele;
}

setInterval(updateDOM, 1000);
