
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
/*
let name ="jowel";
let age  = "24";

const enhObje = {

    name,
    age,

    print() {
        console.log("Name: " + this.name + " Age: " + this.age)
    }
    
}
enhObje.print()

console.log(enhObje);
*/









