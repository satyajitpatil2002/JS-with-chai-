let score="33abc"

console.log(typeof score);

let valueInNumber=Number(score)//convert string or value into numbers but is there is string like "33abc" then it gives NaN not a number 
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn="satya"

let bolleanIsLoggedIn=Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn);

//1=>true; 0=>false
//""=>false  ; or "satya"=>true

let someNumber=22

let stringNumber=String(someNumber) 
console.log(stringNumber);
console.log(typeof stringNumber);

let value=3
let negativeValue=-value
console.log(negativeValue);


// console.log(2+2);
// console.log(2*2);
// console.log(3/3);

let str1="satyajit"
let str2="patil"
let str3=str1 + str2
console.log(str3);

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//>122
console.log(1+2+"2")//output=33
console.log(+true);//=>1
console.log(+"")//=>0

let num1,num2,num3
num1=num2=num3=2+2;
console.log(num3)

let gameCounter=100
gameCounter++
console.log(gameCounter)