// adding 100 para 
const t1 = performance.now();  // for the measure the code speed

for (let i=1; i<=100; i++ ){

let newElement = document.createElement('p');
newElement.textContent = 'This is the Para  ' +  i;

document.body.appendChild(newElement);
};

const t2 = performance.now();   // for the measure the code speed
console.log( "this took" + (t1-t2) + "ms" );



// optimising a bit 

const t3 = performance.now();     // for the measure the code speed

let myDiv = document.createElement('div');

for (let i=1; i<=100; i++ ){

    let element = document.createElement('p');
    element.textContent = 'This is the Para' + 1;

    myDiv.appendChild(element)
    };
    document.body.appendChild(myDiv);

    const t4 = performance.now();     // for the measure the code speed 

    console.log( "this took" + (t3-t4) + "ms" );   // this for the measure speed how much take time to run this code 




