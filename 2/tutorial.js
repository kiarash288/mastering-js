// Boolean Operators

const age = '18'; // یک رشته متنی

// استفاده از == (شل)
if (age == 18) {
   console.log("برابر هستند"); // این اجرا می‌شود
}

// استفاده از === (سفت و سخت - پیشنهاد شده)
if (age === 18) {
   console.log("دقیقاً برابر هستند"); // این اجرا نمی‌شود! چون نوع‌ها یکی نیست
}

// استفاده از !== (عدم تساوی دقیق)
if (age !== 18) {
   console.log("این‌ها یکی نیستند"); // این اجرا می‌شود (چون واقعاً یکی نیستند)
}

// Default Value

let n='ali';
const family= n||'reza';

// (Guard Clause

isLoggedIn=true;
const name= isLoggedin && 'ali';

// User Input Errors

try {
    userInput=123;
    console.log(userInput.toUppercase());

} catch(error) {
    console.log(error.message);
}

// Undefined and Null
const y= null;
const r = undefined;

// Falsly & Truthy

if('false'){
    console.log('true');  // این اجرا می‌شود
}

if (-1) {
    console.log('true');  // این اجرا می‌شود
}

const cart =[];
if(cart) {
    console.log('true');  // این اجرا می‌شود
}

// ۱. عدد صفر (Falsy)
const money = 0;
if (money) {
  console.log("پول داری!");
} else {
  console.log("پولی در کار نیست (چون 0 است)"); // این اجرا می‌شود
}

// ۲. رشته پر (Truthy)
const e = "Ali";
if (e) {
  console.log("نام وارد شده است"); // اجرا می‌شود چون رشته خالی نیست
}

// || in if

const f='ali';
const a= 12;
const isAdmin=true;
if (f=='reza' && a==12 || isAdmin) {
    console.log('true'); // این اجرا می‌شود
} else {
    console.log('false'); // این اجرا نمی‌شود
}

// تفاوت مقادیر اولیه (Primitives) و مقادیر ارجاعی (Reference Types)

// آبجکت اول
const person1 = { name: 'Max' };

// آبجکت دوم (دقیقاً کپی همان)
const person2 = { name: 'Max' };

// حالا مقایسه می‌کنیم:
console.log(person1 === person2); 
// خروجی: false ❌

const userA = { name: 'Sarah' }; // خانه ساخته شد (پلاک ۵)

const userB = userA; // اینجا خانه جدید نساختیم! 
// گفتیم کلید خانه userA را بده به userB

console.log(userA === userB); 
// خروجی: true ✅


// Ternary Operator 

//  بخش اول (isLogin): شرط را چک می‌کند.

// علامت سوال (?): یعنی "آیا شرط بالا درست بود؟"
// بخش دوم ('Max'): اگر شرط true (یا Truthy) بود، این مقدار انتخاب می‌شود.
// دو نقطه (:): یعنی "وگرنه/در غیر این صورت".
// بخش سوم (null): اگر شرط false (یا Falsy) بود، این مقدار انتخاب می‌شود.


const userName = isLoggedIn ? 'Max' : 'Guest';
  
// ❌ این کد غلط است و ارور می‌دهد!

const uuserName = if (isLogin) {
    return 'Max';
} else {
    return null;
}
// for actiiving strict mode use "use strict"; at the top of the file

// Functiom declaration
const k= callage(1991)
callage=function(year){
    return 2025-year;
}

// Function expression
// ❌ این ارور می‌دهد!
// const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
 // here we can call the function before the declaration because the function is stored in the variable w

// Arrow function
const calcAge3 = (birthday)=> 2027-birthday;
const cl= (birthday)=> {
    return 2027-birthday;
}
const yearsUntilRetirement = (birthday)=> {
    const age= 2027-birthday;
    const retirement= 65-age;
    return `${name} retires in ${retirement} years`;
}

// Functions Calling Other Functions  
const birthYear= [1991, 1990, 1992, 1993];
const agee= birthYear.map(year=> 2027-year);
const age2= birthYear.map(calcAge3);
const age3= birthYear.map(yearsUntilRetirement);

// Functions Returning Functions
const greet = function(name){
    return function(timeOfDay){
        return `Good ${timeOfDay}, ${name}!`;
    }
}

// Array
const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', 
    friends]; 
    console.log(jonas);// output: ['Jonas', 'Schmedtmann', 46, 'teacher', ['Michael', 'Peter', 'Steven']]

    const calcAge = function (birthYear) { 
        return 2037 - birthYear; 
        }; 
        const years = [1990, 1967, 2002, 2010, 2018]; 
        const ages = [ 
          calcAge(years[0]), 
          calcAge(years[1]), 
          calcAge(years[years.length - 1]), 
        ]; 
        console.log(ages); // [47, 70, 19]

// Basic aaray operations
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // 4

friends.unshift('John');
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

friends.pop();
console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

friends.shift();
console.log(friends); // ['Michael', 'Steven', 'Peter']

console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1

console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false


// Introduction to Objects

const jonnas = { 
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    age: 2037 - 1991, 
    job: 'teacher', 
    friends: ['Michael', 'Peter', 'Steven'], 
    }; 

// Dot vs. Bracket Notation in object 

const jonas = { 
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    age: 2037 - 1991, 
    job: 'teacher', 
    friends: ['Michael', 'Peter', 'Steven'], 
    }; 
    console.log(jonas.lastName); // 'Schmedtmann'
    console.log(jonas['lastName']); // 'Schmedtmann'

// The main difference is that bracket notation allows us to use expressions:

const nameKey = 'Name'; 
console.log(jonas['first' + nameKey]); // 'Jonas'
console.log(jonas['last' + nameKey]); // 'Schmedtmann' 
// This would NOT work with dot notation:
// console.log(jonas.'last' + nameKey); // Error

const interestedIn = prompt('What do you want to know about Jonas?'); 
if (jonas[interestedIn]) { 
console.log(jonas[interestedIn]); 
} else { 
console.log( 
'Wrong request! Choose between firstName, lastName, age, job and friends.'
  ); 
} 

//  Object Methods

const jonass = { 
    firstName: 'Jonas', 
    lastName: 'Schmedtmann', 
    birthYear: 1991, 
    job: 'teacher', 
    friends: ['Michael', 'Peter', 'Steven'], 
    hasDriversLicense: true, 
    // Method (function as property) 
    calcAge: function () { 
    // 'this' refers to the current object (jonas) 
    this.age = 2037 - this.birthYear; 
    return this.age; 
      }, 
    getSummary: function () { 
    return `${this.firstName} ${ 
    this.lastName 
        }
     is a ${this.calcAge()}-year old ${this.job}. He has ${ 
    this.friends.length 
        }
     friends and ${this.hasDriversLicense ? 'a' : 'no'} driver's 
    license.`; 
      }, 
    }; 
// Iteration the for loop

for (let o=0;  o<10; o++){
    console.log(o);
}

    const yearsss = [1991, 2007, 1969, 2020]; 
    const agesss = []; 
    for (let i = 0; i < yearsss.length; i++) { 
    ages.push(2037 - yearsss[i]); 
    } 
    console.log(ages); 

// break and continue

for (let i = 0; i < 10; i++) { 
    if (i === 5) break; 
    console.log(i); 
    } 
    
    for (let i = 0; i < 10; i++) { 
    if (i === 5) continue; 
    console.log(i); 
    } 
// Nested loops

for (let exercise = 1; exercise <= 3; exercise++) { 
    console.log(`----- Starting exercise ${exercise} ------`); 
   
    for (let rep = 1; rep <= 5; rep++) { 
      console.log(`Exercise ${exercise}: Lifting weights repetition 
  ${rep}    `); 
    } 
  } 

// The while loop

let rep=1;
while (rep<=10) {
    rep++;
    console.log(`Lifting weights repetition ${rep}`);
}
// Prompt

const enterPassword= Numberprompt('Enter your password'); // the output of prompt is string like python


