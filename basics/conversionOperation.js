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