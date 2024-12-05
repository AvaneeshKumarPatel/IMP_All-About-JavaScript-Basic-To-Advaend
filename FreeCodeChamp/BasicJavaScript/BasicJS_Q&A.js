// Use the .length property to set lastNameLength to the number of characters in lastName.

// Setup
let lastNameLength = 0;
// uncomment before use this const  lastName = "Lovelace"; 

// Only change code below this line
console.log(lastName.length)
lastNameLength = lastName.length
console.log(lastNameLength)

// Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

console.log(lastName[0]);  //for my understanig 

// Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line


/* Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

Hint: Try looking at the example above if you get stuck.*/

// Setup
const lastName1 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName1[2]; // Change this line

console.log(thirdLetterOfLastName); // output will be v


/* Use bracket notation to find the last character in the lastName variable.*/

// Setup
const lastName0 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName0.length - 1]; // Change this line

console.log(lastLetterOfLastName);   // the output will be =  e
console.log(lastName);                // the output will be = Lovelace


// Use bracket notation to find the second-to-last character in the lastName string.


// Setup
const lastName3 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName3.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName); // the output will be = c


/*  You will need to use the string concatenation operator + to build a new string,
using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.
You will then assign the formed string to the wordBlanks variable.
You should not change the words assigned to the variables.*/

// You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
// Only change code above this line



/*  Modify the new array myArray so that it contains both a string and a number (in that order).

*/

// Only change code below this line
const myArray = ["aalu", 23,"chana", "apple",45];
console.log(myArray)


// Create a nested array called myArray.

// Only change code below this line
const myArray1 = [["Apple",43], ["Juse",92]];
console.log(myArray1);

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArrayA = [50, 60, 70];
const myData = myArrayA[0]

console.log(myData);  //The output will be =  50 

 // Using bracket notation select an element from myArray such that myData is equal to 8.

 const myArray0 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData0 = myArray0[2][1];
  console.log(myData0) // output will be = 8

// Push ["dog", 3] onto the end of the myArray variable.


  // Setup        
const myArray4 = [["John", 23], ["cat", 2]];

// Only change code below this line

myArray4.push(["dog",3]);
console.log(myArray4);

// Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// Setup 
const myArray6 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray6.pop()

console.log(myArray) // the output will be = [ [ 'John', 23 ] ]

console.log(removedFromMyArray) // the output will be = [ [ 'John', 23 ] ] [ 'cat', 2 ]



// Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
const myArray12 = [["John", 23], ["dog", 3]];

// Only change code below this line
 const removedFromMyArray1 = myArray12.shift();

console.log(myArray); // output will be = [ [ 'dog', 3 ] ]


// Add ["Paul", 35] to the beginning of the myArray variable using unshift().

// Setup
const myArray9 = [["John", 23], ["dog", 3]];

myArray.shift();  // removing the frist array of the variable

// Only change code below this line

myArray9.unshift(["Paul", 35]);

console.log(myArray9); // the output will be = [ [ 'Paul', 35 ], [ 'dog', 3 ] ]

/* 
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]
There should be at least 5 sub-arrays in the list.

*/

const myList = [ [ "Apple",20],
    ["amnan",30],
    ["Yesh",404],
    ["Tree",345],
    ["Juse",34]
];

console.log(myList); // the output will be = [ [ 'Apple', 20 ],
 // [ 'amnan', 30 ],
 // [ 'Yesh', 404 ],
 // [ 'Tree', 345 ],
 // [ 'Juse', 34 ] ]


/* 
1. Create a function called reusableFunction which prints the string Hi World to the dev console.
2. Call the function. */

function reusableFunction(){
  console.log("Hi World");

};

reusableFunction()   // output will be = Hi World


 /* Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.*/
    
function functionWithArgs(num1,num2){
  console.log(num1 + num2)
};
// let num1 = 20;
// let num2 = 40;

functionWithArgs(10 ,20);  // the output will be = 40
 

// Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num0){
  return num0 * 5;
  
  }
  const ans = timesFive(3)
  
  console.log(ans); // the output will be =  15



// Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal =  10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5;
}
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


/* 
The editor has two console.logs to help you see what is happening. 
Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.
*/

/*  Note: The console will still display ReferenceError: myVar is not defined, 
but this will not cause the tests to fail.*/


function myLocalScope() {
  // Only change code below this line


  let myVar;
  

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";

  // Only change code above this line
  return outerWear;

}
myOutfit();



// Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}
// Only change code above this line
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();


// `processArg` function ko `7` argument ke saath call karo 
// aur uske return value ko `processed` variable mein assign karo.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
  
}
  processed = processArg(7)  // We assign in variable also function and object and more 

// Only change code below this line

processArg();

console.log(processed)  // output will be = 2 


// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removedElem =  arr.shift()
  return removedElem;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// Modify the welcomeToBooleans function so that it returns true instead of false.

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

// answer : 
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue){
  return "Yes, that was true";
}else{
  return "No, that was false";
}


  // Only change code above this line

}


//Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);


// The compareEquality function in the editor compares two values using the equality operator.
// Modify the function so that it returns the string Equal only when the values are strictly equal

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
  if (val !=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);



// Add the strict inequality operator to the if statement 
//so the function will return the string Not Equal when val is not strictly equal to 17


// Setup
function testStrictNotEqual(val) {
  if (val !==17)  { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


// Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);


// Add the greater than or equal to operator to the indicated 
// lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


//Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


// Add the less than or equal to operator to the indicated lines so that the return statements make sense.

          function testLessOrEqual(val) {
            if (val <= 12) {  // Change this line
              return "Smaller Than or Equal to 12";
            }
          
            if (val <= 24) {  // Change this line
              return "Smaller Than or Equal to 24";
            }
          
            return "More Than 24";
          }
          
          testLessOrEqual(10);
          
 // Replace the two if statements with one statement, 
 //using the && operator, which will return the string Yes if val is less than 
 // or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.


 function testLogicalAnd(val) {
  // Only change code below this line

  if(val >=25 && val <=50)
    return "Yes";

  // if (val <= 50 ) {
  //   if (val >= 25) {
    
  //     return "Yes";
  //   }
  // }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);




// Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20,
// inclusive. Otherwise, return the string Inside.


function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15); // This will return "Inside"
testLogicalOr(5);  // This will return "Outside"
testLogicalOr(25); // This will return "Outside"


// Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20,
// inclusive. Otherwise, return the string Inside.\

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);


 // Combine the if statements into a single if/else statement.

 function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

console.log(testElse(5))   // The output wil be = 5 or Smaller


// Convert the logic to use else if statements.

function testElseIf(val) {
  if(val > 10 ){
    return "Greater than 10"
  }
  else if(val < 5) {
    return "Smaller than 5"
  }
  else{
    return "Between 5 and 10"
  }
  };


  // Convert the logic to use else if statements.


  function testElseIf(val) {
    if(val > 10 ){
      return "Greater than 10"
    }
    else if(val < 5) {
      return "Smaller than 5"
    }
    else{
      return "Between 5 and 10"
    }
    };
    
    console.log(testElseIf(100));  //The output will be = Greater than 10

    
    
 // Change the order of logic in the function so that it will,
 // return the correct statements in all cases.

 function orderMyLogic(val) {
  if (val < 10 && val > 5) {
    return "Less than 10";

  } else if (val < 5) {
    return "Less than 5";

  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);


// Write chained if/else if statements to fulfill the following conditions:
// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
  // Only change code below this line
  if(num < 5) {
    return 'Tiny';
  }else if(num < 10){
  return 'Small';
  }else if (num < 15){
  return 'Medium';
  } else if(num < 20) {
    return 'Large';
} else if(num >= 20) {
 return 'Huge';
}     
  return "Change Me";
  // Only change code above this line
}

testSize(9);


// Question :-
//Your function will be passed par and strokes arguments. 
//Return the correct string according to this table which lists the strokes in order of priority;
// top (highest) to bottom (lowest):

// Strokes	Return
// 1	"Hole-in-one!"
// <= par - 2	"Eagle"
// par - 1	"Birdie"
// par	"Par"
// par + 1	"Bogey"
// par + 2	"Double Bogey"
// >= par + 3	"Go Home!"
// par and strokes will always be numeric and positive. We have added an array 
// of all the names for your convenience.


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

  // Only change code below this line

if (strokes === 1){
return names[0];

} else if (strokes <= par - 2	){
 return names[1];

}else if(strokes === par - 1){
return names[2];

}else if (strokes === par) {
 return names[3];

} else if (strokes === par + 1	){
return names[4];

}  else if (strokes ===  par + 2) {
 return names[5];

} else if (strokes >= par + 3	) {
return names[6];
}
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

// Create an if statement inside the function to return Yes, 
//that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true";

} return "No, that was false";


  // Only change code above this line

}

// Add the equality operator to the indicated line so that the function will return the 
//string Equal when val is equivalent to 12.
    
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
 
//  Write a switch statement which tests val and sets answer for the following conditions:
// conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
   switch(val){
     case 1:
     answer = 'alpha';
 break;
  case 2 :
      answer = 'beta';
  break;
      case 3: 
             answer = 'gamma'
      break;

   case 4:
           answer = 'delta'
     break;          
   }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

let  result = caseInSwitch(1);   // the output will be alpha

console.log(result);              // the output will be alpha
 
// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  
  switch (val) {
   case 'a':
   answer = 'apple';
   break;

  case 'b': 
  answer = 'bird';
break
  case 'c' :
      answer = 'cat';
break

 default:
 answer = 'stuff'
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

let answer = switchOfStuff(1);
console.log(answer);              // the output will be stuff bcz default valu set ki hai eski 
console.log(switchOfStuff('a'));  // aise bhe console krwa sakte hai 

 


/* Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range. */

// This the answer 

function sequentialSizes(val) {
  let answer = "";
   // Only change code below this line
    switch (val){
      case 1:
      case 2:
      case 3:  
   
    answer = "Low";
   break;
      case 4:
      case 5:
      case 6:
 answer = "Mid";  
 break;
    case 7:
    case 8:
    case 9:
 
  answer = "High"; 
   }
  // Only change code above this line
  return answer;
};

sequentialSizes(1);

let a = sequentialSizes(1)  

console.log(a);  // the output will be Low 



//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val){
  case "bob":
     answer ="Marley"; 
     break;
  case 42:
     answer = "The Answer";
     break;
  case 1:
    answer ="There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
  answer = "Ate Nine"
 }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);




// Fix the function isLess to remove the if/else statements.


// Before =>>>>
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);

// After=>>
function isLess(a, b) {
  // Only change code below this line

    return a <= b;

  // Only change code above this line
}

isLess(10, 15);


// Question =>
//  Update the myDog object's name property. Let's change her name from Coder to Happy Coder. 
//You can use either dot or bracket notation.

// Here are the answer of this question =>>
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";  // this the .(dot) Notation for the changing the object from key to value

myDog["name"] = "Happy Coder";  // This is the bracket Notation for the updating value of the objects using this metheod 


console.log(myDog)  // the output will be entire objects and their values 


// Question => 
  //Add a bark property to myDog and set it to a dog sound, such as "woof". 
//You may use either dot or bracket notation.


const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark    = "woof"; // Adding new properties in object using .(dot) notation
myDog['bark'] = "woof"; // Adding new properties in object using braket notation []

console.log(myDog); // the output will be entire objects 


// Question =>> 
//Delete the tails property from myDog. You may use either dot or bracket notation.

// Answer of this question =>>

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;    // delete is keword of js for the deleting Properties from objects using .(dot) notation 
delete myDog["tails"];  // delete is keword of js for the deleting Properties from objects using [] braket  notation 



// Question =>> 
//Convert the switch statement into an object called lookup. Use it to look up val and assign 
//the associated string to the result variable.
// Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   switch(val) {
//     case "alpha":
//       result = "Adams";
//       break;
//     case "bravo":
//       result = "Boston";
//       break;
//     case "charlie":
//       result = "Chicago";
//       break;
//     case "delta":
//       result = "Denver";
//       break;
//     case "echo":
//       result = "Easy";
//       break;
//     case "foxtrot":
//       result = "Frank";
//   }

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");
// // Setup

// Answer of this question =>>

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
   
   const lookup = {
     alpha :"Adams",
     bravo :"Boston",
     charlie:"Chicago",
     delta : "Denver",
     echo  : "Easy",
     foxtrot:"Frank",
   }
   result = lookup[val];
    
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");


// Question =>>
//Modify the function checkObj to test if the object passed to the function parameter obj contains the
// specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, 
//return that property's value. If not, return Not Found.


//Answer =>>

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){

   return obj[checkProp];    
  }else {
    return "Not Found";
  }
  // Only change code above this line
}

// Question =>>

// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable.
//  Use dot notation for all properties where possible, otherwise use bracket notation.


// Answer of this question =>>


  




// Question =>> 
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

// Answer of this question =>>


let myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ "CD", "8T", "LP",],
    "gold": true
  },
  // added here is the new elements
  {
 "artist": "Sonu Nigam",
 "title" : "Sanu ek pal",
 "release_year": 1980,
 "formats": [ "CD", "8T", "LP",]  
  }
];



// Question =>> 
//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 
//Use dot notation for all properties where possible, otherwise use bracket notation.


// Answer of this Question

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"] ;

console.log(gloveBoxContents); // The output will be maps

  
// Question =>>
// Using dot and bracket notation, set the variable secondTree to the second element
// in the list array from the second object in the myPlants array.

// Answer of this queston =>>

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree); // The output will be = pine



// The Question Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.


// Setup
const myArray = [];

// Only change code below this line

let i = 5;

while(i >= 0 ){

    myArray.push(i);
  i--;
  
}
console.log(myArray)  //The output will be =  [ 5, 4, 3, 2, 1, 0 ]



// Question => Use a for loop to push the values 1 through 5 onto myArray.


// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 6; i++){

  myArray.push(i);
}
console.log(myArray) // the output will be [ 1, 2, 3, 4, 5 ]



// Question =>> Push the odd numbers from 1 through 9 to myArray using a for loop.


// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i<10; i +=2){                     
  myArray.push(i);
}

console.log(myArray) // The output will be [ 1, 3, 5, 7, 9 ]
   


//  Question =>> Push the odd numbers from 9 through 1 to myArray using a for loop.

// Setup
const myArray = [];

// Only change code below this line

for(let i = 9; i > 0; i -= 2 ){
  myArray.push(i);
}

console.log(myArray);   // The output will be [ 9, 7, 5, 3, 1 ]




 // Question =>> Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

 // Answer
function multiplyAll(arr) {

  let product = 1;

  // Only change code below this line 

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {

      console.log(arr[i][j])

      product = product * arr[i][j]

    }
  };
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); 
  




//Question Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, 
//and i will be equal to 11 when your code has finished running.


// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
}while(i < 5);   

 console.log(myArray);   // The output will be = 10 because  we our first statement is do so  and then our second statement are while  it is also false value 
 console.log(i)          // The output will be =11 because  in first statement we have used post increment i++ so





  //Question =>>> Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

  // Answer 
  function sum(arr, n) {
    // Only change code below this line
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  
    // Only change code above this line
  }



  // Questions=>>

//   We have an array of objects representing different people in our contacts lists.

// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.



// Answer =>>

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  // Only change code below this line

 for (let i = 0; i < contacts.length; i++) {

    if (contacts[i].firstName === name) {

      if (prop in contacts[i]) {

        return contacts[i][prop];

      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
  // Only change code above this line


lookUpProfile("Akira", "likes");


// Question  Change randomFraction to return a random number instead of returning 0.




//Answer \

function randomFraction() {

  // Only change code below this line
  return Math.random();

  // Only change code above this line
}


console.log(randomFraction());




// Question =>>
// Use this technique to generate and return a random whole number in the range from 0 to 9.


//Answer  =>>

function randomWholeNum() {

  return Math.floor(Math.random() *10);
   
}

 console.log(randomWholeNum()); // The output will be dynamicly chageing per reload page

// Question ==>> 
//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.


function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(10, 20))   // The output will be a number between 20 to 10



// Question +>> Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.

function convertToInteger(str) {

  return parseInt(str);
 }
 
 convertToInteger("57");
 
 
 
"terminal.integrated.tabs.title": "${sequence}"



//Question=>>
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

// Answer of this question 
 function convertToInteger(str) { 
  return parseInt(str, 2);
  }
 console.log(convertToInteger("1010")); // Output: 10



 // Question =>>
 //Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
 //The function should return either the string Equal or the string Not Equal.


 // Answer will be

 function checkEqual(a,b){

return a == b ? "Equal" : "Not Equal";     // This is also if else condiction
 };

 console.log(checkEqual(1,1 ));  // output will be equal 

 console.log(checkEqual(3,1 )); // The output will be Not Equal



 // Question =>> 
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual -
// to check if a number is positive, negative or zero. The function should return positive, negative or zero.

// Answer 

function checkSign(num) {

  return num  > 0  ? "positive" :
   num < 0 ? "negative" :"zero"; 
             
 }
 
 console.log(checkSign(1));  // output positive
 console.log(checkSign(-1));  // output negative
 console.log(checkSign(0));   // output zero
 



 //  Qusestion =>>

//  We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
//If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
// Your function must use recursion by calling itself and must not use loops of any kind.


// Answer ==>

  // Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  }else {
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
}
console.log(countdown(18));

// Only change code above this line



// Question =>>

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array 
//of integers which begins with a number represented by the startNum parameter and ends with a number represented
// by the endNum parameter. The starting number will always be less than or equal to the ending number. 
//Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.


 // Answer ==>>

function rangeOfNumbers(startNum, endNum) {

  if( endNum < startNum){
     return [];

  }else {
    const number = rangeOfNumbers(startNum, endNum -1);
    number.push(endNum);
    return number;
  }
};
