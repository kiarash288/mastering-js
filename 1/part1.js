let n = "Jonas";
const age = 30;

// قدیم (سخت):
console.log("I'm " + n + " and I am " + age + " years old.");

// جدید (راحت و تمیز)[cite: 212]:
console.log(`I'm ${n} and I am ${age} years old.`);

if (age>20){
    console.log('happy birthday');
} else{
    console.log('Hi!!')
} 

n && age 
n||age 

//14
const inputYear = '1991';
// تبدیل دستی رشته به عدد
console.log(Number(inputYear) + 18); // خروجی: 2009 (چون عدد شد و جمع ریاضی انجام شد) [cite: 243]

console.log(Number('Jonas')); // خروجی: NaN (چون جوناس عدد نمی‌شود!) [cite: 245, 246]
console.log(String(23)); // خروجی: "23" (تبدیل عدد به رشته) [cite: 247]

// مثال عجیب جاوااسکریپت:
console.log('I am ' + 23 + ' years old'); 
// خروجی: "I am 23 years old" -> عدد 23 به رشته تبدیل شد [cite: 249]

console.log('23' - '10' - 3); 
// خروجی: 10 -> اینجا منها باعث شد رشته‌ها عدد شوند! [cite: 251]

console.log('23' + '10' + 3);
// خروجی: "23103" -> به خاطر پلاس، همه چیز رشته شد و بهم چسبید.

let z= '1' + 1; // خروجی رشته "11"
z= n - 1; // حالا رشته "11" منهای 1 می‌شود عدد 10
console.log(n); // 10 [cite: 256, 257]

const day = 'monday';

//20 The Switch Statement
switch (day) {
    case 'monday': // یعنی اگر day === 'monday'
        console.log('برنامه ریزی برای هفته'); 
        console.log('شرکت در جلسه تیم');
        break; // اینجا توقف کن و برو بیرون [cite: 352-355]

    case 'tuesday':
        console.log('ضبط ویدیوهای آموزشی');
        break; [cite: 356-358]

    case 'wednesday':
    case 'thursday': // این یعنی برای چهارشنبه و پنجشنبه یک کار مشترک انجام بده
        console.log('نوشتن کدهای تمرینی');
        break; [cite: 359-362]

    default:
        console.log('روز معتبر نیست!'); [cite: 370, 371]
}

//22 Ternary Operator
const agee= 23;

// روش قدیمی با if/else (خیلی طولانی):
let drink2;
if (agee>= 18) {
  drink2 = 'Wine 🍷';
} else {
  drink2 = 'Water 💧';
} 

// روش حرفه‌ای با Ternary Operator (یک خط):
const drink = age >= 18 ? 'Wine 🍷' : 'Water 💧'; 
console.log(drink); // خروجی: Wine 🍷 [cite: 406]

// قدرت اصلی: استفاده داخل Template Literal (چون Expression است)
console.log(`من دوست دارم ${age >= 18 ? 'Wine 🍷' : 'Water 💧'} بنوشم.`); 
// خروجی: من دوست دارم Wine 🍷 بنوشم. [cite: 416]

let gg= age>18 ? 'wine' : 'water';


// function

function name(parameter) {
    // بدنه تابع (کارهایی که انجام می‌دهد)
    return result; // خروجی تابع
  }

// Array

let logEntries = [];

// Objects

const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
};

// Event Listeners

addBtn.addEventListener('click', add);

