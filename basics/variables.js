const accountId=144553
let accountEmail="satyajit@gmail.com"
var accountPassward="12345"
accountCity="jiapur"
let  accountState;

// accountId=2 //not allowed because const variable 

accountEmail="satya@gmail.com"
accountPassward="125478"
accountCity="india"
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope   
*/
console.table([accountEmail,accountId,accountPassward,accountCity,accountState])