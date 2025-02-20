const arrayFunction=()=>{
const array=['index1',2,false];
 array.forEach((item)=>console.log(`${item} is ${typeof(item)}`));
// index1 is string
// 2 is number
// false is boolean
}

const sumofArray=(array)=>{
    let sum=0;
    // array.forEach((item)=>sum+=item);
    // array.filter((item)=>{
    //     if(typeof(item)==="number"){
    //         sum+=item;
    //     }
    // });
    sum=array.reduce((a,b)=>a+b,0)
    console.log(`Sum of array is ${sum}`);
}
export default {arrayFunction,sumofArray};

