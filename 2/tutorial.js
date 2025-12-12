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
