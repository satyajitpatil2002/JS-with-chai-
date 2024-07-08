function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// way to export  single function 
//module.exports = add;

//  best way >way to export multiple function object 
// module.exports={
//     add,
//     sub,
// }

//another way to export but it is an anonyams function 
exports.add=(a,b)=>a+b;
exports.sub=(a,b)=>a-b;
