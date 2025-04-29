//* //* Creating DOM Elements using insertAdjacentHTML

const textElement = document.querySelector("h2");

textElement.insertAdjacentHTML (
    "afterend",
    `<p class="text-red-500">Hello From <span class="text-green-400">insertAdjacentHTML</span></p>`
)