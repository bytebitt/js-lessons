const elementById = document.getElementById("title-item");
console.log(elementById);

const elementByTagName = document.getElementsByTagName("ul");
console.log(elementByTagName); 
// also ByClassName and ByName (not rec)

const title = document.querySelector("p")
const elementAfteTitle = title.nextElementSibling;
console.log(elementAfteTitle); // ul