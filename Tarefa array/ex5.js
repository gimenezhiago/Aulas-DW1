
function removeDuplicates(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true
                break
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
