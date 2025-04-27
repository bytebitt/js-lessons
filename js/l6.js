// 0 1 2 (for)
for (let num = 0; num < 3; num++) {
    console.log(`Number: ${num}`)
}

console.log("")

// 0 1 2 (while)
let num = 0;
while (num < 3) {
    console.log(`Number: ${num}`)
    num++;
}

console.log("")

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        console.log(size)
        if (size == 1) break firstFor;
    }
}
