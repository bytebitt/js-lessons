let carBrands = ["mercedes", "bmw", "kia", "ford", "lada"]
console.log(carBrands);

carBrands.pop();
console.log(carBrands); // delete lada

carBrands.push("tesla");
console.log(carBrands); // add tesla

carBrands.unshift("lada"); // add lada to 0 index
console.log(carBrands);

carBrands.shift("lada"); // delete lada from 0 index
console.log(carBrands);

carBrands.splice(2, 1); // delete kia (2 index, 1 el)
console.log(carBrands);

carBrands.splice(1, 1, "nissan") // 1 index, 1 el = nissan
console.log(carBrands);

let usersInfo = [
    {name: "John", age: 23, address: "NYC"},
    {name: "Diro", age: 29, address: "FRANIK"},
    {name: "Serafim", age: 18, address: "KYIV"},
];

usersInfo.forEach((el) => {
    console.log(
        `${el.name} is ${el.age} y.o, address: ${el.address}`
    )
});

let string = "apple, banana, cherry";
let splitedArray = string.split(", ");
console.log(splitedArray);
// ['apple', 'banana', 'cherry']
/*
0: "apple"
1: "banana"
2: "cherry"
*/
console.log(splitedArray.includes("banana")); // true
console.log(splitedArray.indexOf("banana")); // 1