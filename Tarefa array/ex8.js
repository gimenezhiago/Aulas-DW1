
function getEvenNumbers(arr) {
    let junta = []
    let h = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            junta[h] = arr[i]
            h++
        }
    }
    return junta
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]