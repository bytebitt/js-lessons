//* Redact DOM by innerHTML / outerHTML / textContent

const titleElement = document.querySelector("#title-lesson");

// const titleElementContent = titleElement.innerHTML;
// console.log(titleElementContent)

const titleElementContent = titleElement.textContent;
console.log(titleElementContent)

// titleElement.innerHTML = "Edited Text By innerHTML"

// titleElement.innerHTML = 
//     `<p>${titleElementContent}</p> 
//     <p>Edited by <span class="text-green-500">Bytebit</span></p>`;

// console.log(titleElement.innerHTML)

// const titleElementContentTwo = titleElement.outerHTML;
// console.log(titleElementContent)

// titleElement.innerHTML = "Edited Text By innerHTML"


// titleElement.outerHTML = 
//     `<p>Edited by <span class="text-green-500">Bytebit</span></p>`;

// console.log(titleElement.outerHTML)

// titleElement.textContent = `<p>Other text content</p>`;
// console.log(titleElement.textContent);
