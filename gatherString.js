function gatherStrings(obj) {
    let result = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            result = result.concat(gatherStrings(obj[key]));
        }
    }

    return result;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

console.log(gatherStrings(nestedObj)); // Output: ["Lester", "Testowitz", "you made it!", "nice!"]
