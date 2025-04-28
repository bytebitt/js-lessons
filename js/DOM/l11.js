//* DOM - querrySelectorAll

const elemsOne = document.querySelectorAll("#title-lesson"); // get by ID
console.log(elemsOne);

const allLists = document.querySelectorAll("li"); // get lists
console.log(allLists);

const otherItemFromList = document.querySelectorAll("li#other-item") ;// get lists(id other-item)
console.log(otherItemFromList);

console.log(allLists[2]); // 2 index in lists

// go through all the items in the list
for (const item of allLists) {
    console.log(item);
}
