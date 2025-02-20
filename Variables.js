

//Anonyms Function
const myFunction=function(){
    console.log("Anonyms Function")
  }
  //Anonyms Function with params
  const myFunction2=function(id){
     console.log(`Anonyms Function pass: ${id}`)
   }
 //arrow function
  const arrow=()=>{
     console.log("Arrow Function")
  }
 
  const arrow2=(name)=>{
     console.log(`Arrow Function pass Name: ${name}`)
  }

getName();
sum(2,3);
myFunction;
myFunction2(3);
arrow;
arrow2("Sara");

//with Fuction Keyword
function getName() {
    console.log('Neha');
}

function sum(a,b) {
    let c=a+b;
    console.log(`Sum of ${arguments[0]} and ${b}is: ${c}`);
}




