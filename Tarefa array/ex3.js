
function countOccurrences(arr, element) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            count = count + 1
        }
    }
    return count
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2