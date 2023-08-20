function longest(words) {
    if (words.length === 0) {
        return 0;
    }
    const wordLength = words[0].length;
    const restLength = longest(words.slice(1));
    return Math.max(wordLength, restLength);
}

console.log(longest(["hello", "hi", "hola"])); // Output: 5
