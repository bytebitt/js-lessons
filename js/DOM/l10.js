//* DOM - Document Navigatiom

const bodyElement = document.body;
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;
const childNodes = bodyElement.childNodes;
const parentNode = bodyElement.parentNode;
const bodyChildren = bodyElement.children;

// console.log(firstChildNode);
// console.log(lastChildNode);
// console.log(childNodes);

// for (let node of childNodes) {
//     console.log(node);
// }

console.log(parentNode); // full code  
console.log("");
console.log(bodyChildren); // only elements
/*
HTMLCollection(2) [p.text-red-500.text-4xl.text-center, script]
0: p.text-red-500.text-4xl.text-center
1: script
2: script
length: 3
[[Prototype]]: HTMLCollection
*/