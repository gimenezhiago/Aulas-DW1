
function mergeArrays(arr1, arr2) {
    let merge = []
    let h = 0
    for (let i = 0; i < arr1.length; i++) {
        merge[h] = arr1[i]
        h++
    }

    for (let j = 0; j < arr2.length; j++) {
        merge[h] = arr2[j]
        h++
    }
    return merge
}

console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]