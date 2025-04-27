let userInfo = {
    name: "John",
    age: 23,
    databaseId: 312472304154992,
};

console.log(userInfo);
console.log(userInfo.databaseId);

console.log("Copied user info: ");
let copiedInfo = Object.assign({}, userInfo);
console.log(copiedInfo);

copiedInfo.age = 24;
console.log("Updated age info: ");
console.log(copiedInfo);