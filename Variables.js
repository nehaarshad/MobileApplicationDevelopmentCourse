const name="Neha" //global variable //const cant change
let age=25 //global variable

function greet(name,age){  //function
    var info="Study in BSSE" //local variable
    console.log(`Hello ${name} ${info} ${age}`)
}

console.log(name) //Neha
console.log(age) //25
greet("Ayesha",22) //Hello Ayesha Study in BSSE 22
console.log(info) //info is not defined