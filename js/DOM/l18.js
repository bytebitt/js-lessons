//* CSS Management - className/classList

const divBlock = document.querySelector("div");
const divBlockClassName = divBlock.className;

//// console.log(divBlockClassName);

// divBlock.className = "text-red-600";

// add class
//divBlock.classList.add("active");
// remove class
//divBlock.classList.remove("remove");
// if class == = remove, if class != = add
//divBlock.classList.toggle("toggle");
// if class (true/false)
//divBlock.classList.contains("contains");

divBlock.classList.add("active");
if (divBlock.classList.contains("active")) {
    console.log("yep")
} else {
    console.log("no")
}

for (let className of divBlock.classList) {
    console.log(className);
}