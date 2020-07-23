'use strict';
//while loop
// let i=1;
// let res=0;
// while (i < 10) {
//     res=res+i;
//     i++;
//     console.log(res);
// }

//do while loop
// do {
//     res += i;
//     i++;
//     console.log(res);
//   }
//   while (i < 10 && i===2);

//switch case
console.log('today number is '+new Date().getDay());
let y = 1//new Date().getDay();
switch (y) {
    case 0:
       console.log("Sunday");
      break;
    case 1:
       console.log("Monday");
      break;
    case 2:
        console.log("Tuesday");
      break;
    case 3:
       console.log("wednesday");
      break;
    case 4:
       console.log("Thursday");
      break;
    case 5:
       console.log("Friday");
      break;
    case 6:
       console.log("Saturday");
     default:
         console.log("wrong number") 
   }