function everyOther(str) {
    if (str.length <= 1) {
        return str;
    }
    return str[0] + everyOther(str.slice(2));
}

console.log(everyOther("hello")); // Output: "hlo"
