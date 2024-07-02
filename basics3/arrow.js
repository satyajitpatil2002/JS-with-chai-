const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

 //console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }

// chai()


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
 chai()

//  const addTwo = (num1, num2) => {
//      return num1 + num2
//  }
//  console.log(addTwo(7,8))
 
//++++++++implicit return+++++  manje return keyword asel tr explicit otherwise implicite refer below example of implicit or explicite

 const addTwo = (num1, num2) => 
   num1 + num2


 const addTwo2 = (num1, num2) => ( num1 + num2 )

 const addTwo3 = (num1, num2) =>{ return num1 + num2 }

 console.log(addTwo(3, 4))
 console.log(addTwo2(3, 4))
 console.log(addTwo3(3, 4))

  const addTwo4 = (num1, num2) => ({username: "hitesh"})
  console.log(addTwo4());



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()