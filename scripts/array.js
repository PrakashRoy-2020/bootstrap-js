//type of declaration of arrays
let names = ['a','b','c']
console.log(names)

//second way using constructor
//by default its 0
let arr = new Array()
arr[0]=1 //short notation
arr[1]=2
console.log(arr) 

//deaclaring array with contruction function
let objarr = new Array(names,'hello','hi');
console.log(objarr)

//iterating to the names array
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

//using for-in and for-of loop
//for in
for(let x in names){
    console.log(x);//gives index
    // console.log(names[x])
}
//for of
for(let x of names){
    console.log(x);
}
//for each
names.forEach(function(num){
    console.log(num);
})
//using arrow fun
names.forEach((a)=>console.log(a))

//or
names.forEach(c=>console.log(c))
//more than one pram
names.forEach((a,b)=>console.log(a+b));
//no pram
names.forEach(()=>console.log('hi'))

console.log(names)

//add new ele "push"
console.log(names.push('xyz'));
console.log(names.push('xyz1'));
console.log(names.push('xyz2'));
console.log(names);

//iimmutability in js
console.log('origianal array '+names)
//adding new elements in array names without loosing the initial state

//using "spread opt"
let newNames = [...names,'prakash']//spread opt
console.log('new array '+newNames);
console.log('original array '+names);

//use of map
let nums = [1,2,3,4,5,6,7,8,9,10]
//using map and arrow
let multNum=nums.map((z)=>{
    return z*2;
})
console.log(multNum)
console.log(nums)

for(let val of nums){
    val=val*2;
    console.log(val);
}

//add in b/w
let arr1=[1,2,3]
let arr2=[7,8,9]
let arrf=[...arr1,4,5,6,...arr2]
console.log(arrf)