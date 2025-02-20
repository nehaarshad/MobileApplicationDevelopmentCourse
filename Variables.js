const name="Neha" //global variable //const cant change
var age=25 //global variable
//name="Ayesha" //Assignment to constant variable. //const cant change
//final variable

function greet(name,age){  //function
    if(age>20){  //blockScopeVariable
        let info="Study in BSIT" //local variable
        console.log(`Hello ${name} ${info} ${age}`)
    }
  //  console.log(`Hello ${name} ${info} ${age}`) //info is not defined
}

console.log(typeof(name)) //Neha
console.log(typeof(age)) //
greet("Ayesha",22) //Hello Ayesha Study in BSSE 22