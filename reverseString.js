function revString(str) {
    if (str === "") {
        return "";
    }
    return revString(str.slice(1)) + str[0];
}

console.log(revString("porcupine")); // Output: 'enipucrop'
