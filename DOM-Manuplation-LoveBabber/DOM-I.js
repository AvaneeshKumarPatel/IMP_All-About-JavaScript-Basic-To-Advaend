// let mypara = document.createElement('p');
// mypara.textContent = 'I am the text content';
// content.appendChild(mypara);
// console.log(mypara);


document.getElementById('conetnt');

function print (){
    conetnt.style.background = 'green';
  console.log('Clicked');
};

conetnt.addEventListener('click', print);



conetnt.removeEventListener('click',print);
// conetnt.style.background = 'red'


// Question =>> 
//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable.
// Use dot notation for all properties where possible, otherwise use bracket notation.

//  Answer =>>

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
