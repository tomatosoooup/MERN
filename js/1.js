const { JSDOM } = require("jsdom");
const dom = new JSDOM();
const document = dom.window.document;

function nodeChildCount(node, deep = Infinity) {
  let count = 0;

  function traverse(node, level) {
    if (level > deep) return;
    count++;

    node.childNodes.forEach((childNode) => {
      traverse(childNode, level + 1);
    });
  }

  traverse(node, 0);
  return count - 1;
}

const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div)); // 2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2
