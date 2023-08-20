function findIndex(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1;
    }
    if (arr[index] === target) {
        return index;
    }
    return findIndex(arr, target, index + 1);
}

let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));       // Output: 1
console.log(findIndex(animals, "porcupine")); // Output: -1
