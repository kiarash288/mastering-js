// call() in functions

//  ۱. حالت عادی: وقتی یک تابع (متد) رو صدا می‌زنی، this به صورت پیش‌فرض به صاحبِ اصلی اون تابع (همون آبجکتی که تابع توش نوشته شده) اشاره می‌کنه.

// ۲. مشکل: تو می‌خوای اون تابع رو روی یک آبجکت دیگه (مهمان) اجرا کنی.

// ۳. راه حل (call): با استفاده از call، تو داری به جاوااسکریپت دستور میدی:

// "بی‌خیالِ صاحبِ اصلی شو! فقط برای همین یک بار، فرض کن که این آبجکتی که من دارم بهت میدم صاحب توئه."

// آبجکت اول: هواپیمایی لوفت‌هانزا
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    book(flightNum, name) {
      // اینجا this یعنی lufthansa
      console.log(`${name} booked a seat on ${this.airline}`);
    }
  };
  
  // آبجکت دوم: هواپیمایی یورو وینگز (که متد book نداره!)
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
  };
  
  // متد book رو از لوفت‌هانزا قرض می‌گیریم
  const book = lufthansa.book;
  
  // ❌ غلط: این کار نمیکنه چون this نامعلومه
  // book(23, 'Sarah'); 
  
  // ✅ درست با call:
  // میگیم: "تابع book رو اجرا کن، ولی این بار صاحبش (this) رو بذار eurowings"
  book.call(eurowings, 23, 'Sarah Williams'); 
  // خروجی: Sarah Williams booked a seat on Eurowings

  // apply() in functions

  const flightData = [583, 'George Cooper'];

// ورودی‌ها رو توی یه بسته (آرایه) تحویل میدیم
book.apply(eurowings, flightData);

 /* book.call(  eurowings   ,      23      ,   'Sarah'   );
                │              │              │
                │              │              │
       [ تبدیل میشه به ]    [ورودی ۱]      [ورودی ۲]
             this          flightNum        name
*/
// llfe

(function () {
    const isPrivate = 23;
    console.log('این تابع فقط یک بار اجرا میشه و بعد غیب میشه!');
  })();
  
  // console.log(isPrivate); // ❌ ارور میده! چون متغیر محرمانه بود و پاک شد.

  // default parameters

  const createBooking = function (
    flightNum,
    numPassengers = 1,      // اگر کاربر نگفت، خودت بذار ۱ نفر
    price = 199 * numPassengers // قیمت رو هم خودت حساب کن
  ) {
    // ... کد رزرو ...
    console.log(numPassengers, price);
  };
  
  createBooking('LH123'); // خروجی: 1, 199 (چون ما چیزی ندادیم، پیش‌فرض‌ها رو برداشت)
  createBooking('LH123', 2, 800); // خروجی: 2, 800 (چون خودمون دادیم، پیش‌فرض‌ها رو نادیده گرفت)

  // refrence vs value 

  const jonas = {
    name: 'Jonas',
    passport: 12345
  };
  
  const checkIn = function (flightNum, passenger) {
    // اینجا داریم اسم مسافر رو تغییر میدیم
    passenger.name = 'Mr. ' + passenger.name; 
  };
  
  checkIn('LH99', jonas);
  
  // 😱 ببین! آبجکت اصلی jonas برای همیشه عوض شد:
  console.log(jonas.name); // خروجی: "Mr. Jonas"

  