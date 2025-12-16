// parseInt() and parseFloat()
console.log(parseInt('10'));
console.log(parseFloat('10.5'));

// isFinite()
console.log(isFinite(10));
// true
console.log(isFinite(Infinity));
// false
console.log(isFinite(NaN));
// false
// isNaN()
console.log(isNaN(10));
// false
console.log(isNaN(NaN));
// true

// isInteger()
console.log(isInteger(10));
// true
console.log(isInteger(10.5));
// false

// to Fixed()
console.log((2.345).toFixed(2)); // خروجی: "2.35" (رشته است!)
console.log(+(2.345).toFixed(2)); // خروجی: 2.35 (با گذاشتن + تبدیل به عدد شد)

// numeric separators

const diameter = 287_460_000_000; // خواندنش خیلی راحت‌تر از 287460000000 است
console.log(diameter); // خروجی همان عدد اصلی است

// internationalization

// خط ۱۲۶ فایل script.js
const formatCur = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency', // میگیم می‌خوایم پول نشون بدیم
      currency: currency, // واحد پول چیه؟ (EUR, USD, ...)
    }).format(value); // عددی که باید فرمت بشه
  };

  // timers

  // خط ۲۳۵ فایل script.js
setTimeout(function () {
    // این کد بعد از ۲۵۰۰ میلی‌ثانیه (۲.۵ ثانیه) اجرا میشه
    currentAccount.movements.push(amount); 
    // ... آپدیت کردن صفحه ...
  }, 2500);

  // خط ۲۱۶ فایل script.js
const startLogOutTimer = function () {
    let time = 120; // ۱۲۰ ثانیه وقت داری
  
    const tick = function () {
      // ... کد نمایش دقیقه و ثانیه ...
      
      time--; // یکی از زمان کم کن
      
      if (time === 0) {
        clearInterval(timer); // 🛑 استپ! وقتی صفر شد تایمر رو بکش
        // ... لاگ‌اوت کردن کاربر ...
      }
    };
  
    // این دستور tick رو "هر ۱۰۰۰ میلی‌ثانیه" (۱ ثانیه) اجرا می‌کنه
    const timer = setInterval(tick, 1000); 
    return timer;
  };

  const logOutTimer =  function () {
    let time=120;
    time--;
    const timer = setInterval(tick, 1000);
    if (time==0) {
        clearInterval(timer);
    }
  }