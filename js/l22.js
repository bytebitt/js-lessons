const button = document.querySelector("button");

// button.onclick = function () {
//     console.log("click!");
// }

// button.addEventListener("click", function (e) {
//     console.log("click");
// });

function handleClick (e) {
    console.log(e.type); // even type
    console.log(e.currentTarget); // even object
}

button.addEventListener("click", handleClick, {once: false});
// button.addEventListener("mouseenter", handleClick);
