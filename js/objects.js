// ------------------- Factory Function -----------------

/* function createCircle(radius){
    return {
        radius,
        draw(){
            console.log('draw')
        }
    }
}
const circle1 = createCircle(1)
console.log(circle1) */


// ------------------- Constructor Function -----------------

/* function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(1)
console.log(circle)
     */

// ------------------- Enumerating properties of an Object -----------------

/* const circle = {
    radius: 1,
    draw(){
        console.log('draw')
    }
}
for(let key of Object.keys(circle)){
    console.log(key)
}

for(let entry of Object.entries(circle)){
    console.log(entry)
} */



// ------------------- Cloning an Object -----------------

/* const circle = {
    radius: 1,
    draw(){
        console.log('draw')
    }
}

const anotherObject = {}

for(let key in circle){
    anotherObject[key] = circle[key]
}
console.log(anotherObject) 


// const anotherObject = Object.assign({}, circle)

//const anotherObject = {...circle}

console.log(anotherObject) */


// ------------------- Template Literals -----------------
/* 
const name = 'X'
const another = 
`
Hi ${name}!

Congrats for u promotion

Regards,
Eyros
`
console.log(another)
 */



// ------------------- Date -----------------

/* const now = new Date()
const date1 = new Date('Feb 11 2010 05:00')
console.log(now)

 */



// ------------------------------- Exercises -----------------------------


// ------------------- Exercise 1 - Address Object -----------------
/* 
const address = {
    street: 'Street X',
    city: 'Brazil',
    zipCode: '0000-000'
}

function showAddress(address){
    for(let key in address){
        console.log(`${key}: ${address[key]}`)
    }
}


showAddress(address) */


// ------------------- Exercise 2 - Factory and Constructor Function -----------------

//Factory Function

/*  function showAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}
const result = showAddress('Street Z', 'Brazil', '0000-000')
console.log(result)  */

//Constructor Function

/* function ShowAddress(street, city, zipCode){
    this.street =street;
    this.city = city;
    this.zipCode = zipCode;
}

const result = new ShowAddress('Street Z', 'Brazil', '0000-000')
console.log(result)   */




// ------------------- Exercise 3 - Object Equality -----------------
/* 
function ShowAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address1 = new ShowAddress('Street Z', 'Brazil', '0000-000')
const address2 = new ShowAddress('Street Z', 'Brazil', '0000-000')


function areEqual(address1, address2){
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

function areSame(address1, address2){
    return address1 === address2;
}

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))
 */



// ------------------- Exercise 4 - Blog Post Object -----------------

/* let blogPost = {
    title: 'X',
    body: 'Y',
    author: 'Gustavo',
    views: 2,
    comments: [
        {
            author: 'X',
            body: 'Z'
        },
        {
            author: 'P',
            body: 'L'
        },
    ],
    isLive: true
};

console.log(blogPost) */



// ------------------- Exercise 5 - Constructor Functions -----------------

/* function BlogPost(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let blogPost = new BlogPost('Title', 'Body', 'Gustavo');

console.log(blogPost) */


// ------------------- Exercise 6 - Price Range Objects -----------------

/* let priceRanges = [
    {
        label: '$',
        tooltip: 'Inexpensive',
        minPerPerson: 0,
        maxPerPerson: 10
    },
    {
        label: '$$',
        tooltip: 'Moderate',
        minPerPerson: 11,
        maxPerPerson: 20
    },
    {
        label: '$$$',
        tooltip: 'Expensive',
        minPerPerson: 21,
        maxPerPerson: 50
    }
]

let restaurant = [
    {
        averagePerPerson: 5
    }
] */