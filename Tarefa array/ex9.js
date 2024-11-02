
function reverseArray(arr) {
    let inverso = []
    let h = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        inverso[h] = arr[i]
        h++
    }
    return inverso
}

console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]