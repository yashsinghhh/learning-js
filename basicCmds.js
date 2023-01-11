var ageVar = 0
ageVar++ ; // increment
ageVar-- ; // decrement 

a=a+12 //can also be written as 
a+=12
// same for subtraction 
a-=12 // which is a=a-12
a*=5
a/=5

//"" '' // string 

// use \" to include quotation marks in the string

//  \n new line 
//  \r new carriage
//  \t tab
//  \b back space
//  \f form speed

var a= "hello"
var alength = a.length;
console.log(alength) //5

//indexing
var b = "hey"
var indexb = ""
indexb = b[1]
console.log(indexb)


var ourArray = ["xyz", 65]

var nestedArray = [["hello", 44],["rfe", 34]]

//indexing also works in arrays
ourArray[0]="abc" // abc, 65

nestedArray[1][0]="efr"
console.log(nestedArray)

// push fnx to append data to the array 
var t =[1,2]
t.push(4,4,3)
console.log(t)
t.pop()
console.log(t)

// the shift function removes the element of the array from the start of the array instead of the end
t.shift()
console.log(t)

//unshift adds an element to the starting of the array 
t.unshift('xyyyz')
console.log(t)


