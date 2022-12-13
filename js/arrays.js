// ----------------- Adding Elements -----------------

/* 
const values = [1, 2, 3]

// to add value at the end
values.push(4)

// to add value at the beginning
values.unshift(0)

// to add value at the middle
values.splice(5, 0, "after number 4")
values.splice(4, 0, "before number 4")

console.log(values) */



// ----------------- Finding Elements (Primitives) -----------------

/* const numbers = [1, 2, 3, 1, 4, 5];

console.log(numbers.indexOf(1)) // return the position of number in array but if this number not exist, the function return -1
console.log(numbers.includes(1)) // return true or false if number exist at array
console.log(numbers.lastIndexOf(1)) // return the last ocurrency of number at array */




// ----------------- Finding Elements (References Types) -----------------


/* const peoples = [
    {name: 'X', age: 18},
    {name: 'Y', age: 20}
]

const findPeople = peoples.find((people)=>{
    return people.name === 'X'; // return the item with name 'X'
})
const findPeoplePosition = peoples.findIndex((people)=>{
    return people.name === 'X'; // return the position for item in array
})

console.log(findPeople)
console.log(findPeoplePosition) */


// ----------------- Removing Elements -----------------

//const numbers = [1, 2, 3, 4]


//End

/* const lastNumber = numbers.pop()// remove the last element of array
console.log(numbers)
console.log(lastNumber) */

//Middle
/* 
const middleNumber = numbers.splice(2, 1) // remove the middle element of array, u need a specify the position of number and the how many wish remove
console.log(numbers)
console.log(middleNumber)
 */


//Beginning

/* const firstNumber = numbers.shift() // remove the beginning element of array
console.log(numbers)
console.log(firstNumber) */



// ----------------- Emptying an Array -----------------

// let values = [1, 2, 3, 4]

// solution 1

/* values = []
console.log(values) */


// solution 2
/* values.length = 0;
console.log(values) */


// solution 3
/* values.splice(0, values.length)
console.log(values) */

// solution 4

/* while(values.length>0){
    values.pop()
}
console.log(values)
 */



// ----------------- Combining and Slicing Arrays -----------------

/* 
const firstArray = [1,2,3]
const secondArray = [4,5,6]

const concatedArrays = firstArray.concat(secondArray)

const combinated = [...firstArray, ...secondArray]

const slice = concatedArrays.slice(2,4)

console.log(concatedArrays)
console.log(slice)
console.log(combinated)
 */




// ----------------- Iterating an Array -----------------

/* const numbers = [1, 2, 3, 4, 5]

numbers.forEach((element)=>{
    console.log(element)
})
 */




// ----------------- Joining Arrays -----------------

/* const numbers = [1, 2, 3, 4]
const x = numbers.join('->')
console.log(x)


const url = "home page for my site"
const urlSplit = url.split(' ')
const finalURL = urlSplit.join('-')

console.log(finalURL) */



// ----------------- Sorting Arrays -----------------

/* 
const numbers = [3, 4, 2, 1]
numbers.sort() // return array in ascending order 
console.log(numbers)

numbers.reverse() // return array in descending order
console.log(numbers) */

/* const peoples = [
    {id: 1, name: 'B'},
    {id: 2, name: 'A'}
]

peoples.sort((a,b)=>{
    const nameA = a.name.toUpperCase()
    const nameB = b.name.toUpperCase()

    if(nameA < nameB){
        return -1
    }
    else if(nameA > nameB){
        return 1
    }
    else{
        return 0
    }
})

console.log(peoples)

 */



// ----------------- Testing the Elements of an Arrays -----------------

/* const numbers = [1, 2, 3, 4]

const allPositive = numbers.every((number)=>{ ; // return true or false if all elements at array satisfy condition
    return number > 0;
})

const AtLeastOnePositive = numbers.some((number)=>{
    return number > 0;
})

console.log(allPositive)
console.log(AtLeastOnePositive) */



// ----------------- Filtering an Arrays -----------------


/* const numbers = [1, 2, 8, 9, 10, 11, 15, 20]

const filteredNumbers = numbers.filter((element)=>{
    return element >= 10;
})
console.log(filteredNumbers) */




// ----------------- Mapping an Arrays -----------------

/* 
const names = ['Gustavo', 'Teste', 'Teste2']
const country = 'Brazil'


const peoplesFromBrazil = names.map((name)=>{ // return a new array a elements with new alters
    return {
        city: country,
        name: name
    }
})

console.log(peoplesFromBrazil) */



// ----------------- Reducing an Arrays -----------------

/* const numbers = [1, 2, 3, 4, 5]

const multiplyNumbers = numbers.reduce((total, currentValue)=>{ // return a new array reduced according specified function
    return total *= currentValue
})

console.log(multiplyNumbers) */



// ----------------------------------------- EXERCISES ----------------------------------------------


// ----------------- Exercise 1 - Array from Range -----------------

/* 
const numbers = arrayFromRange(1, 10)
console.log(numbers)

function arrayFromRange(min, max){
    let rangeArray = []

    for(i=min; i<=max;i++){
        rangeArray.push(i)
    }
    return rangeArray
} */


// ----------------- Exercise 2 - Includes -----------------

/* 
const numbers = [1, 2, 3, 4, 5]
console.log(includes(numbers, 7))

function includes(array, searchValue){
    for(let value of array){
        if(value === searchValue){
            return true
        } else {
            return false
        }
    }
} */



// ----------------- Exercise 3 - Except -----------------

/* 
const numbers = [1, 2, 3, 4, 5]

const excludedNumber = except(numbers, [2])

console.log(excludedNumber)


function except(array, excluded){
    let result = []
    for(let value of array){
        if(!excluded.includes(value)){
            result.push(value)
        }
    }
    return result
} */


// ----------------- Exercise 4 - Moving an Element -----------------

/* 
const numbers = [1, 2, 3, 4]

const result = move(numbers, 1, 2)

console.log(result)

function move(array, index, offset){
    const position = index + offset
    if(position >= array.length || position < 0){
        console.error('Invalid offset')
    } else{
    const result = [...array]
    const el =  result.splice(index, 1)[0]
    result.splice(result + offset, 0, el)
    return result
    }
} */


// ----------------- Exercise 5 - Count Occurrences -----------------


/* const numbers = [1, 2, 3, 4, 5, 1]
const count = countOcurrences(numbers, 1)

console.log(count)

function countOcurrences(array, searchElement){

    //without reduce

     let count = 0;
    for(let value of array){
        if(value === searchElement){
            count++;
        }
    }

   // return count; 


    //with reduce

    return array.reduce((total, currentValue)=>{
    const occurence = (currentValue === searchElement) ? 1 : 0;
    return total + occurence;
   }, 0) 

   
} */

// ----------------- Exercise 6 - Get Max -----------------

/* 
const numbers = [1, 2, 3, 4]
const max = getMax(numbers)

console.log(max)

function getMax(array){
    if(array.length === 0 ) {
        return undefined
    } 

    //without reduce

     let max = array[0]
    for(let i=1; i < array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
    } 

    //with reduce

  return  array.reduce((total, currentValue)=>{
       return (currentValue > total) ? currentValue : total
    }, 0)
 
} */


// ----------------- Exercise 7 - Movies -----------------

/* const movies = [
    {title: 'A', year: 2022, rating: 5.0},
    {title: 'B', year: 2022, rating: 4.5},
    {title: 'C', year: 2022, rating: 3.0},
    {title: 'D', year: 2022, rating: 2.0}
]


const titles = movies.filter(element => element.year === 2022 && element.rating >= 4.5)
.sort((a,b)=> a.rating - b.rating).reverse()
.map(element => element.title)


console.log(titles) */


