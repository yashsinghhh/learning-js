function ourTrueOrFalse(isittrue){
    if (isittrue){      // so here if the statement in () is "true" then the fucntion will run
        return "true";
    }
    return 'false';

}
console.log(ourTrueOrFalse(true))


// INQUALITY OPERATOR
function testEqual(val) {
    if ( val == 12) {
        return "Equal"
    
    }

return "Not Equal"
}
console.log(testEqual(10))



// strict equality operator '==='
// strict equality operator is true if the type of the val is also same 
// 3===3 true
// 3==='3' false


function testEqual(val) {
    if ( val===5) {
        return "Equal"
    
    }

return "Not Equal"
}
console.log(testEqual('5')) // Not Equal


// example 
function compEq(a,b) {
    if ( a===b) {
        return "true"
    }
    return "False"

}
console.log(compEq(4,4))  // True
console.log(compEq(4,'4')) // false



//INEQUALITY OPERATOR
function ineq(val){
    if (val!=10){
        return "not equal"
    }
    return "equal"
}
console.log(ineq(10))// equal 
console.log(ineq(5)) // not equal


// strict ineq
function strIneq( val ){ 
    if ( val!== 17  ) {
        return "not equal"
    }
    return "equal"
}
console.log(strIneq(17))  //equal
console.log(strIneq("17")) // not equal

// > , < , >= , <=



// nested if statement to check two conditions
// ALTERNATIVE (AND OPERATOR)
function andop(val) {
    if( val>=15 && val<=30){
        return 'approved'
    }
    return "denied"
}
console.log(andop(20)) // approved
console.log(andop(5)) // denied
console.log(andop(50)) // denied



// OR Statement
function orStat(val){
    if (val>=20 || val==5){
        return "passed"
         }
         return 'failed test'
}
console.log(orStat(10)) //fail
console.log(orStat(30))//passed
console.log(orStat(5))// passed 