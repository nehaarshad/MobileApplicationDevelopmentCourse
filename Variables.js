console.log(name); // undefined
//console.log(age); //ReferenceError: Cannot access 'age' before initialization
console.log(getName); // undefined
var name = 'Neha';
let age = 30;
console.log(age); // 30
console.log(name); // Neha
getName();
function getName() {
    console.log('Neha');
}
