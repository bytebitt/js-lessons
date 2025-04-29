//* CSS Management - style/getCOmputedStyle

const divBlock = document.querySelector("div");
const titleItem = document.querySelector("#title-item");

divBlock.style.color = "blue";
divBlock.style.marginBottom = "10px";
divBlock.style.zIndex = "10";

console.log(titleItem.style.fontSize); // empty

const titleItemStyle = getComputedStyle(titleItem);

console.log(titleItemStyle.fontSize); // 30px
