// first class functions

// ۱. ذخیره کردن تابع در یک متغیر (مثل یک عدد)
const sayHello = function() {
    return "سلام!";
 };
 
 // ۲. گذاشتن تابع داخل یک آبجکت (مثل یک ویژگی)
 const jonas = {
    name: 'Jonas',
    age: 30,
    greet: sayHello // تابع رو اینجا پاس دادیم
 };
 
 console.log(jonas.greet()); // خروجی: سلام!


// higher order functions

 // توابع کارگر (Callbacks)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// تابع رئیس (Higher-Order Function)
// این تابع نمیدونه قراره جمع کنه یا ضرب، فقط ابزار رو میگیره و اجرا میکنه
const calculator = function(num1, num2, operationFunc) {
   console.log("🧮 در حال محاسبه...");
   return operationFunc(num1, num2); // اینجا تابع ورودی رو صدا میزنه
};

// استفاده:
console.log(calculator(5, 10, add));      // خروجی: 15
console.log(calculator(5, 10, multiply)); // خروجی: 50

// closures

const secureBooking = function() {
    let passengerCount = 0; // این متغیر توی کوله‌پشتی میره
 
    // این تابع داره برمی‌گرده (Return میشه)
    return function() {
       passengerCount++; // داره از متغیر پدر استفاده میکنه!
       console.log(`${passengerCount} مسافر ثبت شد.`);
    };
 };
 
 // ۱. اجرای تابع پدر
 const booker = secureBooking(); 
 // الان کار secureBooking تموم شد و از Call Stack حذف شد!
 // قاعدتاً passengerCount باید نابود میشد، اما...
 
 // ۲. اجرای تابع فرزند (که الان تو متغیر booker هست)
 booker(); // خروجی: 1 مسافر ثبت شد.
 booker(); // خروجی: 2 مسافر ثبت شد.
 booker(); // خروجی: 3 مسافر ثبت شد.


 // split and join

 const fullName = 'Jonas Schmedtmann';

// ۱. تکه‌تکه کردن (Split): متن رو از جایی که فاصله ' ' داره می‌بره
const parts = fullName.split(' ');
console.log(parts); 
// خروجی: ['Jonas', 'Schmedtmann'] (تبدیل شد به آرایه)

// ۲. پردازش: فامیلی رو بزرگ می‌کنیم
const lastNameUpper = parts[1].toUpperCase();

// ۳. چسباندن (Join): آرایه رو با فاصله ' ' بهم می‌چسبونه
const newName = ['Mr.', parts[0], lastNameUpper].join(' ');

console.log(newName); 
// خروجی: "Mr. Jonas SCHMEDTMANN"

// padStart and padEnd

const str = '5';

// می‌خوام طولش بشه ۲، با '0' پُر کن
console.log(str.padStart(2, '0')); 
// خروجی: "05"

console.log('12'.padStart(2, '0'));
// خروجی: "12" (چون خودش ۲ تا بود، دیگه صفر نذاشت!)
const title = 'Chapter 1';

// می‌خوام طول کلش بشه ۲۰، تهش نقطه بذار
console.log(title.padEnd(20, '.'));
// خروجی: "Chapter 1..........."

  // repeat 

  const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
  console.log(announcement.repeat(5));
  // خروجی: All passengers come to boarding door 23. Boarding door 23!All passengers come to boarding door 23. Boarding door 23!All passengers come to boarding door 23. Boarding door 23!All passengers come to boarding door 23. Boarding door 23!All passengers come to boarding door 23. Boarding door 23!

// replace: فقط اولین door رو عوض می‌کنه (اشتباه رایج)
console.log(announcement.replace('door', 'gate'));
// خروجی: ... boarding gate 23. Boarding door 23! (دومی عوض نشد!)

// replaceAll: تمام doorها رو عوض می‌کنه (روش درست)
console.log(announcement.replaceAll('door', 'gate'));
// خروجی: ... boarding gate 23. Boarding gate 23! (هر دو درست شد)

// conver object to map
const hoursMap = {
    opening: 0,
    closing: 24,
  };
  
  console.log(Object.entries(hoursMap));
  // خروجی: [['opening', 0], ['closing', 24]]
  
  const entries = Object.entries(hoursMap);
  console.log(new Map(entries));
  // خروجی: Map(2) { 'opening' => 0, 'closing' => 24 }
  
  // destructuring in objects and arrays

const { name, categories, openingHours } = restaurant;

console.log(name); // Classico Italiano
console.log(categories); // ['Italian', 'Pizzeria', ...]

const food = ['Pizza', 'Pasta', 'Risotto'];

// قدیم:
// const item1 = food[0];
// const item2 = food[1];

// جدید (خط ۵۰۶ فایل):
const [item1, item2] = food; 
console.log(item1, item2); // Pizza Pasta

// spread operator

// خط ۳۸۶ فایل اسکریپت
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu); 
// نتیجه: همه غذاها توی یک آرایه واحد لیست میشن.


// chaining 

// خط ۲۰۵ فایل اسکریپت
console.log(restaurant.openingHours.mon?.open);

// اگر دوشنبه وجود نداشته باشه، ارور نمیده! فقط مینویسه: undefined
// برنامه هم کرش نمیکنه.

// new for loop

// خط ۲۱۰ فایل اسکریپت
for (const item of menu) {
    console.log(item);
}