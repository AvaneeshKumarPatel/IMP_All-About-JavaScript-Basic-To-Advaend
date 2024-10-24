// Question =>>
//Apply the regex myRegex on the string myString using the .test() method.

// Answer =>>>
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)


// Question =>>
// Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Changed this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2);

// Question=>>
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Changed this line
let result3 = petRegex.test(petString);

console.log(result3)


// Question==>

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.
// Answer=>> 
let myString = "freeCodeCamp";
let fccRegex = /freecodeCamp/i; // Changed this line
let result4 = fccRegex.test(myString);

console.log(result4)
   
// Question =>>
// Apply the .match() method to extract the string coding.
// Answer =>>
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Changed this line
let result = extractStr.match(codingRegex); // Changed this line

console.log(result)

// Question ==>
//Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// Answer ==>
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Changed this line
let result = twinkleStar.match(starRegex); // Changed this line
console.log(result);

// Question =>>
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.
// Answer =>>
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);


console.log(result);

// Queston=>> 
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

//Note: Be sure to match both upper- and lowercase vowels.

// Answer =>>
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex);

        console.log(result)


// Question =>>
// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
// Answers=>>
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);

// Question =..
// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

// Answer ==>
  let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)



// Question =>>
// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

// Answers ==>

        let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Changed this line
let result = difficultSpelling.match(myRegex);

console.log(result);  // [ 'ss', 'ss' ]

