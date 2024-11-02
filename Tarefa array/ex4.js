
function allEquals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[0]) {
            return false
        }
    }
    return true
}

console.log(allEquals([1, 1, 1])); // Deve exibir: true
console.log(allEquals([1, 2, 1])); // Deve exibir: false

