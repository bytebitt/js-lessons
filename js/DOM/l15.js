//* Creating DOM Elements

const titleElement = document.querySelector("#title-item")
const newElement = document.createElement("div");

console.log(newElement);

newElement.innerHTML = `Live and work at free time`

titleElement.before(newElement); // new element - before title
titleElement.after(newElement); // new element - after title
titleElement.prepend (newElement); // new element - in title (same styles)
titleElement.append(newElement); // new elemnt - int title after content
