// global scope means you can access it anywhere in the program 
// in js if the variable defined in the function is denoted by 
function fun1() {
    hello = 5;
    console.log(hello)
}
// here as hello = 5 is not written as var hello = 5 it is global 
// if we had 
function fun2 () {
    var helloo = 10;
    console.log(helloo)
}
// here the variable is limited to the function itself
fun1()
fun2()
var x = helloo+5;
var y = hello+5;
console.log(y)
console.log(x)




// LOCAL SCOPE
// when a variable is locally available in function and cannot be accesed from outside the function 
//it is known as the the local variable 