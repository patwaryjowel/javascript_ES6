
/* =====================================
    ES6 let & const using 
===================================*/

/* ===== const using ===== */

/* 
const arr = 10;
console.log(arr); */

/*
arr = [];
arr.push(10);
arr.push(20)
arr.push(30)
console.log(arr)*/

// ===== let using =====

// let onlye work at block like { }.

/* 
let a = 10;

if(true){
    let a = 20;
    console.log(a)
}

console.log(a) */

/* 
let x = 40; 
function demo() {
    let x = 10;
    console.log(x);
}demo(); */


/*=========================
Arrow Funtion using 
============================*/
/* 
function name() {
    console.log("Jp");
}name()

var funName = function (a, b) {
    return a + b;
};console.log(funName(30, 10))


let demoName = () => {
    console.log('HEllo');
};demoName();


let demoNameTwo = name => {
    console.log('If single params used')
}; demoNameTwo()


let addMe = (a,b) => {
    return a + b;
};console.log(addMe(10, 19));


const jowelArrowFunction = (a, b) => {
    return a+b;
};
console.log(jowelArrowFunction(10,10))

const jowelArrowFunction = () => {
    console.log("hello jowel")
};
jowelArrowFunction()


let addMeTwo = (a,b) => a+b;
console.log(addMeTwo(10,55))

let sqr = x => x*x;
console.log(sqr(10)) */



/*=============================
    Laxical this
================================*/

// ES5 er this call widoaw object
/* const obj = {
    name: "jowel",
    print: function (){
        setTimeout(function(){
            console.log(this)
        }.bind(this),1000);
        console.log(this.name, this)
    }
}
obj.print() */

/* // ES6 this here perent div 
const obj2 = {
    name: "patwary",
    print: function (){
        setTimeout(() => {
            console.log(this.name)
        },1000);
    }
}
obj2.print()


// ES5  same exam and problem 
const obj3 = {
    name: "patwary",
    print: function (){
        setTimeout( function() {
            console.log(this.name)
        },1000);
    }
}
obj3.print()
*/




/*========================
Enhance Object Js
===========================*/
<<<<<<< HEAD

/* let name ="jowel";
=======
/*
let name ="jowel";
>>>>>>> 61438a4c600f4d05f6fcd339fc03a97ad70da143
let age  = "24";

const enhObje = {

    name,
    age,

    print() {
        console.log("Name: " + this.name + " Age: " + this.age)
    }
    
}
enhObje.print()

<<<<<<< HEAD
console.log(enhObje); */

=======
console.log(enhObje);
*/
>>>>>>> 61438a4c600f4d05f6fcd339fc03a97ad70da143



/*========================================
Destrcturing Array And Object Details
==========================================*/

/* 
const arr = [1, 2, 3, 4, 5]

let [a, b, c, d, e] = arr;

console.log(a)
console.log(b)
*/
/* 

const objDestrc = {
    name: "jowel",
    email: "patwaryjowel@gmail.com"
}

let {name, email} = objDestrc;

console.log("Name: ", name, "Email: ", email)


let x = (name, email) => {
    console.log(`Hello this is ${name}. Email: ${email}`)
}

x(name, email )

// vale age pore jabe na jekhane chai okhnai thakbe
let y = ({name, email}) => {
    console.log(`Hello this is ${name}. Email: ${email}`)
}

y({ email, name })
 */




 
/* =============================
Rest and Spread Operator
=============================== */


// Rest Operator


// Normal var number ke array te porinoto kora  
/* function sum(...num){  
    console.log(num);
}
sum(1, 6 , 6);
 
*/



/*==========================
// Sprad Operator
 ===========================*/

// array ba object er propartis ke be vaiabls hoy jaye 


/* let arr = [1,3, 4, 5];
arr = [...arr, 12, 3, 45]
console.log(arr);

var obj = {
    name: "jowel",
    email: "patwaryjowel52@gmail.com"
};

var obj2 = {
    ...obj,
    name: "patwary",
    age: 23,
    birt: 1997
};

console.log(obj2); */



