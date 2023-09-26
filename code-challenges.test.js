// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe ("shuffleFunc", () => {
  it ("a function that takes in an array, removes the first item from the array and shuffles the remaining items.",() => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
    expect(shuffleFunc(colors1)).not.toEqual(["yellow", "blue", "pink", "green"])
    expect(shuffleFunc(colors2)).not.toEqual([
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ])
  })
}) 

// GOOD FAILURE shuffleFunc is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: shuffleArray, shuffleFunc
// input: array of strings
// output: array of strings 
// process: Create a function that shuffles the array. create a for loop that iterates through the array to shuffle it. Then create a variable called shuffle that will use floor and random math built in methods to create a random number and then returns the values at random indexes. Then create another function that removes the first value of the array and calls on the shuffle array function.


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var shuffle = Math.floor(Math.random() * (i + 1))
    [array[i], array[shuffle]] = [array[shuffle], array[i]]
  }
}
function shuffleFunc(arr) {
  arr.shift()
  shuffleArray(arr)
  return arr
}



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(voteTally(votes1)).toEqual(11)
    expect(voteTally(votes2)).toEqual(-31)
  })
})

// GOOD FAILURE ReferenceError: voteTally is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: voteTally
// input: object 
// output: number
// process: create a function that adds the numbers contained in the object upVotes and subtracts the numbers contained in the object downVotes. 

const voteTally = (votes) => {
  return votes.upVotes - votes.downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("combinedArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    expect(combinedArray(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// GOOD FAILURE ReferenceError: combinedArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// name: combinedArray 
// input: two arrays
// output: one array
// process: create a variable that will hold the combined array by using .concat and the spread operator to add the arrays. Then, create another const called unique array that will use Set to remove the duplicates in the array, and convert the set back to an array by using Array.from. Finally, return the unique array. 


function combinedArray(...arrays) {
  const mergedArray = [].concat(...arrays);
  const uniqueArray = Array.from(new Set(mergedArray));
  return uniqueArray;
}
