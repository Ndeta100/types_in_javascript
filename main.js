// Primitive
typeof 5
typeof true
typeof 'To be or not to be'
 typeof undefined
 typeof null
 typeof Symbol('just me')

//  Non primitive
 typeof {}
 typeof[]
 typeof function(){}

//  Arrays
var array=[1,2,3] // Same as below
var array={
    0:1,
    1:2,
    2:3
}

Array.isArray(array) //How to check if a constant is and array or an object

// pass by valuea and reference
var a=5
var b=56
var c=b
b++

let obj1={
    name:'yahoo',
    password:'12345'
}
let obj2=obj1
obj2.password='vbhjdofjgh'
console.log(obj1) //You will notice both passwords will be changed though i changed password just for obj2  you can use a copy to avoid this, for example {...obj1} also called the pread operator
console.log(obj2)

var c=[1,2,3,4,5]
var d=c
d.push(685493045968) //Arrays are objects and are passed by reference so c also changes you can use the concat method to avoid this

let obj={a:'a', b:'b', c:'c'}
let clone=Object.assign({}, obj)
let clone2={...obj}
obj.c=4

// Type coercion
1=='1'