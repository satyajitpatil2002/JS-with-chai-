
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 //sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(4,5)
// const result = addTwoNumbers(3, 5)

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    return number1 + number2//another way 
    
    return result
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("satya"))
//console.log(loginUserMessage())


function calculateCartPrice(...num1){     //... is rest oprrater 
    return num1
}

//console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and prices is ${anyobject.prices}`);
}
//handleObject(user)

handleObject({
    username: "sam",
    prices: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));