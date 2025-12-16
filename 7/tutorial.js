// .map()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// روش قدیمی 
const movementsUSD = [];
for (const mov of movements) {
  movementsUSD.push(mov * 1.1); // دستی ضرب می‌کنیم و هل میدیم تو آرایه جدید
}
// حالا با map()
// میگیم: تک‌تک اعضا (mov) رو بگیر، ضربدر ۱.۱ کن و بریز تو آرایه جدید.
const movementsUSD = movements.map(mov => mov * 1.1);

console.log(movementsUSD); 
// خروجی: [220, 495, -440, ...] (همون تعداد، ولی تبدیل شده)

// filter()
// روش قدیمی
const deposits = [];
for (const mov of movements) {
  if (mov > 0) { // شرط می‌ذاریم
    deposits.push(mov);
  }
}
// حالا با filter()
// میگیم: فقط اونایی رو نگه دار که بزرگتر از صفر هستن
const deposits = movements.filter(mov => mov > 0);

console.log(deposits); 
// خروجی: [200, 450, 3000, 70, 1300] (منفی‌ها حذف شدن)

// reduce()
// روش قدیمی
let balance = 0; // انبار اولیه خالیه
for (const mov of movements) {
  balance = balance + mov; // هر دور، عدد جدید رو به انبار اضافه می‌کنیم
}
// حالا با reduce()
// فرمول: (انبار , عدد_فعلی) => انبار + عدد_فعلی
const balance = movements.reduce((acc, cur) => acc + cur, 0); 
// اون ۰ آخر یعنی: انبار رو با صفر شروع کن.

console.log(balance); 
// خروجی: 3840 (جمع کل اعداد)

// find()
const accounts = [account1, account2, account3, account4];

// میگیم: برو بگرد ببین کی owner مساوی با 'Jessica Davis' هست
const account = accounts.find(acc => acc.owner === 'Jessica Davis');

console.log(account);
// خروجی: { owner: 'Jessica Davis', movements: [...], ... } 
// (کل آبجکت اون آدم رو برگردوند)

// chaining 
const totalDepositsUSD = movements
  .filter(mov => mov > 0)        // ۱. فقط مثبت‌ها (واریزی)
  .map(mov => mov * 1.1)         // ۲. تبدیل به دلار
  .reduce((acc, mov) => acc + mov, 0); // ۳. جمع کل

console.log(totalDepositsUSD);

// flatMap()

accounts = [ {movements: [10, 20]}, {movements: [30, 40]} ]

const step1 = accounts.map(acc => acc.movements);
console.log(step1);
// [ [10, 20], [30, 40] ]
const step2 = step2.flat();
console.log(step2);
// [10, 20, 30, 40]

// nested array 
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// nested objects 
const restaurant = {
  name: 'Classico Italiano', // لایه اول (String)
  location: 'Italy',
  
  // لایه دوم: اینجا یک آبجکت شروع میشه
  openingHours: { 
    thu: { // لایه سوم: باز هم آبجکت!
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
  },
};
// slice()

// آرایه اصلی (تغییر نمیکنه)
let arr = ['a', 'b', 'c', 'd', 'e'];

// ۱. از ایندکس ۲ شروع کن تا آخر
console.log(arr.slice(2)); 
// خروجی: ['c', 'd', 'e']

// ۲. از ایندکس ۲ تا ۴ (خود ۴ رو نمیاره!)
console.log(arr.slice(2, 4)); 
// خروجی: ['c', 'd']

// ۳. گرفتن ۲ تای آخر (عدد منفی)
console.log(arr.slice(-2)); 
// خروجی: ['d', 'e']

// ۴. کپی کردن کل آرایه (بدون ورودی)
console.log(arr.slice());
// خروجی: ['a', 'b', 'c', 'd', 'e']

// ✅ نکته مهم: آرایه اصلی هنوز سالمه
console.log(arr); 
// ['a', 'b', 'c', 'd', 'e']

// splice()

// آرایه اصلی
let arr2 = ['a', 'b', 'c', 'd', 'e'];

// از ایندکس ۲ شروع کن و ۲ تا دونه رو حذف کن
// (خروجیِ خودِ دستور splice، چیزایی هست که حذف کرده)
console.log(arr2.splice(2, 2)); // خروجی: ['c', 'd']

// 😱 آرایه اصلی داغون شد:
console.log(arr2); 
// خروجی: ['a', 'b', 'e'] (اون وسطیا حذف شدن)