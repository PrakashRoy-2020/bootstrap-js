//named fun , callback fun , annonymous fun , IIFE , constructor fun , arrow fun
//named function
function calAge(birthday){
    // return 2020 - birthday;
    let todayYear = new Date()
    console.log(todayYear.getFullYear())
    return todayYear.getFullYear() -birthday
}
let prakashAge = calAge(1997)
let bharatAge = calAge(1990)
console.log(`age is ${prakashAge}`)
console.log(`age is ${bharatAge}`)
console.log(calAge(1997))

//anonymous function
let show = function(a,b){
    console.log('this is anonymous' + a,b)
}
show(30,40);//function variable

//IIFE = immidiately Invoked Function Expression
//should only function in file
(function(a,b){
    console.log(a+b)
})(6,7)
