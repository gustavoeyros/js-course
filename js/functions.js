// ----------------- Functions Declarations vs Expressions ----------------

/* 
// Function declaration
function rain(){
    console.log('raining')
}

// Named Function Expression
let sun = function dawn(){
    console.log('dawn')
}

// Anonymous Function Expression
let moon = function(){
    console.log('nightfall')
} */


// ----------------- Arguments ----------------


/* function sum(a, b){
    return a + b;
}
console.log(sum(1,2)) //3
console.log(sum(1)) // NaN = 1 + undefined -> Not a Number */

/* function sum(){
    let total = 0;
    for(let value of arguments){ // this will make the function dynamic with respect to the parameters.
        total += value
    }
    return total
}
console.log(sum(1,2,3,4,5,5))  */


// ----------------- The rest operator ----------------


/* 
function sum(...args){ // when use rest operator (...), we can use any quantity as an argument
    console.log(args)
}
console.log(sum(1,2,3)) */


// ----------------- Default Parameters ----------------

/* function discount(value, dsc = 0.5){ // if no have dsc parameter when invoke function, dsc it will be 0.5
    return value * dsc
}
console.log(discount(100)) */


// ----------------- Getters and Setters ----------------

/* 
const person = {
    firstName: 'Gustavo',
    lastName: 'Eyros',
    get fullName(){ // getter to access property
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){ // setter to change property
        const partsOfName = value.split(' ')
        this.firstName = partsOfName[0]
        this.lastName = partsOfName[1]
    }
}
person.fullName = 'Gustavo Neves'
console.log(person) */



// ----------------- Try and Catch ----------------

/* const person = {
    firstName: 'Gustavo',
    lastName: 'Eyros',
    get fullName(){ // getter to access property
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){ // setter to change property
        if(typeof value !== 'string'){
            throw new Error ('This value is not a string! Try again.') // create a new error to alert a user when have a problem
        }
        const partsOfName = value.split(' ')
        if(partsOfName.length !== 2){
            throw new Error('Enter with only first and last name')
        }
        this.firstName = partsOfName[0]
        this.lastName = partsOfName[1]
    }
}

try { // success
   console.log(person.fullName = 'Gustavo Neves')
} catch (error) { // error
    console.log(error)
}
 */





// ----------------- Local vs. Global Scope ----------------


/* const fruit = 'Apple' // Global Scope, acessible from anywhere
const anotherFruit = 'Orange'
function eat(){
    const anotherFruit = 'Pineapple' // Local Scope. Local Scope is stronger than global scope on local scope.
    console.log(fruit)
    console.log(anotherFruit)
}
eat() */


// ----------------- Let vs. Var ----------------

/* function x(){
    for(var i=0; i<=10;i++){ // var is function scoped
        console.log(i)
    }
    console.log(i) // return 11
}
function y(){
    for(let i=0; i<=10;i++){ // let and const is block-scoped
        console.log(i)
    }
    console.log(i) // return error
}
x()
y() */



// ----------------- The This Keyword ----------------

/* 
// method -> obj
const people = {
    name: 'Gustavo',
    studying(){
        console.log('JavaScript')
    }
}
console.log(people)

// function -> global (window, global)
function peopleInfo(){
    console.log(this)
}
peopleInfo() */


// -------------------- Exercises ----------------------------


// --------- Exercise 1 - Sum of Arguments ----------



/* function sum(...value){
  if(value.length === 1 && Array.isArray(value[0])){
    value = [...value[0]]
  }
  return value.reduce((total, currentValue) => total + currentValue )
}
console.log(sum([1,2, 5])) */



// --------- Exercise 2 - Area of Circle ----------

/* const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius
    }
}

console.log(circle.area) */



// --------- Exercise 3 - Error Handling ----------

/* const numbers = [1, 2, 3, 4, 1]

try {
    const count = countOcurrences(numbers, 1)
    console.log(count)
} catch (error) {
    console.log(error)
}


function countOcurrences(array, searchElement){
    if(Array.isArray(array)){
        return array.reduce((total, currentValue)=>{
            const occurence = (currentValue === searchElement) ? 1 : 0
            return total + occurence
        }, 0)
    } else{
        throw new Error('Insert array!')
    }
}


 */