//objects and properties
var arr = new Array()//arr is a obj of constructor function Array
var doj = new Date();


//1 short hand notation
let employee = {} //employee is an empty object
console.log(employee)

//2 long hand notation
let student = new Object();
console.log(student)
student.rollNo=100;
student.marks=45;

//custom object 
let person = {
    fname: 'jonh',
    lname: 'smith',
    age:22,
    isEmp:false,
    annIncome:5000,
    address:{
        streetName:'kharadi bypass',
        city:'pune'
    },
    fullName:()=>{
        return person.fname + ' '+person.lname;
    }
}
console.log(person);
//dot notation 
console.log(`the age ${person.age} 
             and fullname is ${person.fullName()}`);
console.log(person['isEmp'],'\n'+person['annIncome']); 

person.fname='prakash';
console.log(person.fname);

let person1 = {
    fname: 'prakash',
    lname: 'smith',
    age:22,
    isEmp:false,
    annIncome:5000,
    address:{
        streetName:'kharadi bypass',
        city:'pune'
    },
    fullName:()=>{
        return person.fname + ' '+person.lname;
    }
}

console.log(person1.fname);

