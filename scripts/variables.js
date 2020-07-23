'use strict';
//creating variables in js
//1.
name='abc'//don't use such type var declaration
//var declared in line 3 above are global var
// console.log('my name is '+name)

//2
// var x=10;
// console.log('the value of x is '+x);
var a=10;
// console.log('data type '+typeof a)

var a='hi'
// console.log(a)
// console.log('data type '+typeof a)

//basic type in JS
var isEmployed=true;
var myAge=34;
var myName='Prakash';
var mySalary 
var gender='M';
var myCity=null;


//introduced in es-6
let emailId='abc@gm.com';
// console.log('nameis '+myName+'data type '+myName+'is '+typeof myName);
//es-6
console.log(`my name is ${myName} data type of ${myName} is ${typeof myName}`);

//var in js are declared in camelCase
//function in js are written in camelCase

// console.log('block level scope...')
// for(let x=0; x<10; x++){
//     console.log(x);
// }
// console.log(`value of x after for loop ${x}`)

//es-6 let const
//reassigned not allowed
// const empId=1234;
// empId=empId+10;
// console.log(empId);

//ternary operator

let fname='david';
let perAge=8;
perAge >=18 ? console.log(`${fname} elegible to vote`) : console.log(`${fname} no vote`);

//truthy and falsy values
//pre define falsy vlu: null, undefined, 0 , '', not a number
var height='th';
if(height || height === 0){
    console.log(`${height} is defined`);
}
else{
    console.log(`${height} is not defined`);
}
//equality: always use === for best practice
let num ='3'
console.log(typeof num);

if(num===3){
    console.log('vlu is three');
}
else{
    console.log('not three');
}
// == we are chacking for the value only
//=== we are chacking vlu and type as well
//!==