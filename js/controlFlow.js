// ----- If...else ------

/* let hour = 10;

if(hour >=6 && hour <12){
    console.log("Bom dia!");
} else if(hour>12 && hour <18){
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
} */


// ---------- Switch...case ----------

/* 
let role = 'Administrator';

switch(role){
    case 'Common user':
        console.log("Common user");
        break;
    
    case 'Administrator':
        console.log("User administrator");
        break;
    default:
        console.log("Unknown user")
        break;
} */



// --------- For (Loops) ------------

/* for(let i=0; i<=10;i++){
   if(i%2==0){
    console.log(i)
   }
} */

// ----- While (Loops) ---- 

/* let i =0;
while(i<=10){
    if(i%2==0){
        console.log(i);
    }
    i++;
}
 */

// ----- Do-While (Loops) --------

/* let i = 0;
do{
    console.log(i);
    i++;
}while(i<=10) */

// ------- For-in (Loops) -------

/* const person = {
    name: 'Gustavo',
    age: 18
}
for (key in person){
    console.log(person[key]);
} */


// ------- For-of (Loops) -------

/* 
const colors = ['purple', 'black', 'white', 'red']

for (color of colors){
    console.log(color)
} */




// -------------------- Exercises ----------------------------

// --------- Exercise 1 - Max of Two Numbers ----------


/* 
function maxOfTwoNumbers(a,b){
    if(a>b){
        console.log(a)
    } else if(b>a){
        console.log(b)
    } else{
        console.log('equal')
    }
}

function max(a, b){
    return (a>b) ? a : b;
}
console.log(max(4,4))
 */
 


// ----------- Exercise 2 - Landscape or Portrait --------

/* 
function isLandscape(width, height){
    return (width>height);
}
let result = isLandscape(1,2)

console.log(result) */


// ------ Exercise 3 - FizzBuzz----------

/* Divisible by 3 = Fizz
   Divisibile by 5 = Buzz
   Divisible by both 3 and 5 = FizzBuzz
   Not divisible by 3 or 5 = input
   Not a number = 'Not a Number'
*/

/*  const output = fizzBuzz(7)
 console.log(output)

function fizzBuzz(input){
  if(typeof input != "number") {
    return 'Not a number';
  } else if((input % 3 == 0 && input % 5 == 0)){
    return 'FizzBuzz'
  } else if(input % 5 == 0){
    return 'Buzz';
  }else if(input % 3 == 0){
     return 'Fizz'
  } else {
    return input;
  }

}  */


// ---------- Exercise 4 Demerit Points ------------

/* Speed limit = 70
   5 -> 1 point
   Math.floor(1.3)
   12 points -> suspended
*/

/* let result = checkSpeed(71)
console.log(result)

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPoint = 5;
    const speedPoints = Math.floor((speed - speedLimit)/5);

    if(speedPoints >=12){
        return 'License suspended'
    }else if(speed < speedLimit + kmPoint){
        return 'Ok'
    }else{
        return `${speedPoints} points!`;
    }
}
 */

// ---------- Exercise 5 Even and Odd Numbers ------------

//showNumbers(15)

/* function showNumbers(limit){
    for(let i=0;i<=limit;i++){
        if(i%2==0) {
            console.log(i + ' EVEN');
        } else{
            console.log(i + ' ODD'); 
        }
    }
} */

/* function showNumbers(limit){
    for(let i=0; i<=limit; i++){
        const message = (i%2==0) ? 'EVEN' : 'ODD'
        console.log(i, message); 
    }
} */



// ---------- Exercise 6 Count Truthy ------------

/* let list = [undefined, 1, 2, '', null, 3]

countTruthy(list)

function countTruthy(array){
    let result = 0;
    for(let value of array){
        if(value){
            result++;
        } 
    }
    console.log(result);
} */


// ---------- Exercise 7 String Properties ------------

/* const people = {
    name: 'Gustavo',
    age: 18,
    role: 'Student'
}

showProperties(people)

function showProperties(obj){
   for (key in obj){
    if(typeof obj[key] === 'string'){
        console.log(`${key}: ${obj[key]}`)
    }
   }
}
 */




// ---------- Exercise 8 Sum of Multiples 3 and 5 ------------


//sum(10)

/* function sum(limit){
    let sumThree = 0;
    let sumFive = 0;
    for(let i = 0; i <= limit; i++){
        if(i%3==0){
            sumThree+=i;
        } else if(i%5==0){
            sumFive+=i;
        }
    }
    console.log(sumThree + sumFive)
}
 */

/* function sum(limit){
    let sum = 0;
    for(let i = 0; i <= limit; i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }
    console.log(sum)
} */


// ---------- Exercise 9 Grade ------------

/*
1-59 = F
60-69 = D
70-79 = C
80-89 = B
90-100 = A
*/
/* 
const marks = [100, 100, 100]
calculateGrade(marks)


function calculateGrade(marks){
    let total = 0;
    for(value of marks){
      total+=value
    }
    const average = total/marks.length;

    if(average >=1 && average<=59){
        console.log("F")
    } else if(average >=60 && average<=69){
        console.log("D")
    }else if(average >=70 && average<=79){
        console.log("C")
    }else if(average >=80 && average<=89){
        console.log("B")
    }else if(average >=90 && average<=100){
        console.log("A")
    }
} */


// ---------- Exercise 10 Stars ------------


//showStars(5)

/* function showStars(rows){
    for(i=1;i<=rows;i++){
        console.log("*".repeat(i))
    }
}

 */


/* function showStars(rows){
    for(let row=1;row<=rows;row++){
        let pattern = '';
        for(let i = 0; i <  row; i++){
            pattern += '*'
        }
        console.log(pattern)
    }
} */



// ---------- Exercise 10 Stars ------------

/* showPrimes(10)

function showPrimes(limit){
    for(let i = 2; i <= limit; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

function isPrime(i){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i%j==0){
            isPrime = false;
            return false;
        }
    }
    return true;
} */