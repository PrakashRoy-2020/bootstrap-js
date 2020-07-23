//creating custom constructor fun
//prototype
//__proto__ vs prototype

function Person(fname,lname,age){
    this.firstname=fname;
    this.lname=lname;
    this.age=age;
}
//prototype

Person.prototype.city='pune';//function prototype
Person.prototype.state;

var par1 = new Person('a','b',22);
var par2 = new Person('a1','b1',21);

par1.city='kolkata';

console.log(par1.city);
console.log(par2);

par1.state='MH';

console.log(par1.state);
var p2 = Object.create(Object.prototype)