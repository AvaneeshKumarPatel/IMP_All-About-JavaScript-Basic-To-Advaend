document.getElementById('conetnt');

function print (){
 onetnt.style.background = 'green';
  console.log('Clicked');
};

conetnt.addEventListener('click', print);



conetnt.removeEventListener('click',print);
// conetnt.style.background = 'red' fddfd


const   content = document.querySelector('#idd');

content.addEventListener( 'click', function(avnish){
 
  console.log( avnish);
});

 const links = document.querySelectorAll('a');
 let fourthLinks = links[3];

  fourthLinks.addEventListener('click', function(event){
   
    event.preventDefault();
    alert("Abb 4th links hamne rok diya")
  });
  




