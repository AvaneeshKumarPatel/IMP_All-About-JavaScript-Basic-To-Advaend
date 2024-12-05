// named assignment function 

 let a = function addTwoNumers (num1, num2) {
    return num1 + num2 ;

};
 console.log(a(2,4));



 // creating arguments in functions  adding of Tow number and morethan two dynamically  on objcet it also return object
 

 function sum(a,b) {
  let total = 0;
  for (let value of arguments)
    total = total + value;
return total;

}

 let ans = sum(1,2,3,5,4);
 console.log(ans);


 // Rest Oprater >> ...  it is aslo called sprade oprator  it is return also string 


 function sum(...args){
    console.log(args);
 }

 sum(2,3,4,5);



 // Default parameter 


 function interst (p, r,y){

    return p*r*y/100;

 }
 

 console.log(interst( 20,20,2));



 // Getter And Setter => Geter = Get the value , Setter => Set The value
 // issue of this function it is only read function 


//  let person = {
//  name : 'Avnish',
//  fName : 'Patel',
//  age : 32,
//  Id : 420,

//  get fullName(){

//     return `${this.person.name} ${this.person.fName}`;
//  },

// set fullName(value) {
//     if (typeof value !== 'string')
//     throw new Error ('not a String');
//     let parts = value.split('');
//     this.name = parts[0];
//     this.Id = parts[1];
// }
//  };
//  console.log(person.fullName);


//  // Try & Cath - Error Handling 
// try{
//    person.fullName = true;

// }
// catch(e){
//    alert('You have sent number in fullName');
// }
// console.log(person.fullName)

// alert(e);



// Scope:- Ek variable ka life time hota hai wahe scope hota hai , var variable we can acees in entire sheet even if assign in function also 
//and let variable are block scope it is can access only in blocks cots // And the Const like work scope Var // 

// example 


function a(){
  const ab = 3;

}
function b(){
    const ab = 7;
}

a();
b();


for (var i = 0; i<10; i++){
    
}
console.log(i);


if (true){
    var r = 20;
}
console.log(a);


// Reducing the Arry with the two method the first one in for loop and second one is Reduce function

// Adding the value of the arry using the for of loop 

let arr = [1,3,3,5];
// let total = 0;

// for(let value of arr)
//  total = total + value;d
// console.log(total);

// This is the Reduce method adding the value of the arry 

let totalSum = arr.reduce((accumlator, currentValue) => accumlator + currentValue ,0);
console.log("Printing sum");
console.log(totalSum);

