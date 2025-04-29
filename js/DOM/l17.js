//* Move / Copy / Remove Els

const divBlock = document.querySelector("div");
const title = document.querySelector("#title-item");
const cloneTextElement = title.cloneNode(true); // true = visible

// ulBlock.append(title);

divBlock.append(cloneTextElement);
title.remove(); // remove title


