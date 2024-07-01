// singleton
// Object.create

// object literals


 const mySym = Symbol("key1")

 const JsUser = {
    name: "satyajit",
    "full name": "satyajit patil ",
    [mySym]: "mykey1",
    age: 22,
    location: "pune",
    email: "satya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//console.log(JsUser)

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])//this value are only acces by [] notation not using . property
// console.log(JsUser[mySym])

 

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());