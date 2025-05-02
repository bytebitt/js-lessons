const buttonOne = document.querySelector("#button-1");
const buttonTwo = document.querySelector("#button-2");
const buttons = document.querySelectorAll("button");
const buttonsBlock = document.querySelector("div");
const link = document.querySelector("a");

//buttonOne.onclick = function () {
//     console.log("click!");
// }

// buttonOne.addEventListener("click", function (e) {
//     console.log("click");
// });

function handleClick (e) {     
    console.log(e.type); // even type
    console.log(e.currentTarget); // even object
}

// buttonOne.addEventListener("click", handleClick, {once: false});
// buttonOne.addEventListener("mouseenter", handleClick);

buttonsBlock.addEventListener("click", function (event) {
    if (event.target.closest("button")) {
        handleClick(event);
    };
});

link.addEventListener("click", function (event) {
    console.log("Action!");
    event.preventDefault();
});