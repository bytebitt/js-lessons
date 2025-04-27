function countChars(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count++;
        }
    }
    return count;
}

let resultOfCount = countChars("Hello World!", "o");
console.log(resultOfCount);