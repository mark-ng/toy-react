// TAKEAWAY: component states is actually global
const data = [];
let globalId = 0;

export function useState(value) {
  globalId++;

  if (!data[globalId]) {
    data[globalId] = value;
  }

  // Use closure to prevent using the global counter in updateState function
  let componentCounter = globalId;
  const updateState = (value) => {
    if (typeof value === "function") {
      data[componentCounter] = value(data[componentCounter]);
    } else {
      data[componentCounter] = value;
    }
    updateDOM();
  };

  return [data[globalId], updateState];
}

let createVDOM;
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

export function render(component, parent) {
  currVDOM = component();
  elems = dfsConvert(currVDOM);
  createVDOM = component;
  parent.append(elems);
}

function updateDOM() {
  console.log(data);
  // Reset the global counter, when traversing the virtualDOM, each component
  // will be assigned unique id (counter)
  globalId = 0;
  prevVDOM = JSON.parse(JSON.stringify(currVDOM));
  currVDOM = createVDOM();
  findDiff(prevVDOM, currVDOM, elems);
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
