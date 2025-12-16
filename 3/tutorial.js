let rep = 10;
while (rep <=10) {
    rep++;
    console.log(`Lifting weights repetition ${rep}`);
    if (rep == 3) break;
}
// set and map in js
// in set we can't have duplicate values and we can't get the value by index
// in map we can have duplicate values and we can get the value by key
// in map we can have any type of key and value
// in map we can have any type of key and value

// ۱. یک آرایه با مقادیر تکراری داریم
const orders = ['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta'];

// ۲. ساختن Set (تکراری‌ها خودکار حذف می‌شن)
const uniqueOrders = new Set(orders);

console.log(uniqueOrders); 
// خروجی: Set(3) { 'Pasta', 'Pizza', 'Risotto' }
// دیدی؟ پاستا که ۳ بار بود، شد ۱ بار!

// ۳. کار با متدها
console.log(uniqueOrders.size); // خروجی: 3 (اندازه ست)
console.log(uniqueOrders.has('Pizza')); // خروجی: true (آیا پیتزا داریم؟)
console.log(uniqueOrders.has('Bread')); // خروجی: false

uniqueOrders.add('Garlic Bread'); // اضافه کردن آیتم جدید
uniqueOrders.delete('Risotto');   // حذف کردن آیتم

// ۴. تبدیل دوباره به آرایه (خیلی پرکاربرد!)
// با استفاده از Spread Operator (...)
const finalMenuArray = [...uniqueOrders];
console.log(finalMenuArray); // ['Pasta', 'Pizza', 'Garlic Bread'

// map in js
// ۱. ساختن یک Map خالی
const rest = new Map();

// ۲. پر کردن Map با متد .set(کلید, مقدار)
rest.set('name', 'Classico Italiano'); // کلید رشته‌ای (مثل آبجکت معمولی)
rest.set(1, 'Firenze, Italy');         // ⭐️ کلید عددی (این تو آبجکت ممکن نیست!)
rest.set(2, 'Lisbon, Portugal');       // ⭐️ یک کلید عددی دیگه

// نکته باحال: متد set خودِ مپ رو برمی‌گردونه، پس می‌تونی زنجیره‌ای بنویسی:
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')  // ⭐️ کلید Boolean (true)
  .set(false, 'We are closed :('); // ⭐️ کلید Boolean (false)

// ۳. خواندن اطلاعات با .get(کلید)
console.log(rest.get('name')); // 'Classico Italiano'
console.log(rest.get(1));      // 'Firenze, Italy' (دقت کن عدد ۱ دادیم، نه رشته '1')

// ۴. استفاده هوشمندانه از کلیدهای Boolean
const time = 21; // ساعت ۹ شب
// منطق: آیا ساعت ۲۱ بین ۱۱ و ۲۳ هست؟ (نتیجه میشه true یا false)
// بعد اون true یا false میره تو متد get و پیام مناسب رو چاپ می‌کنه!
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// خروجی: We are open :D

const students = new Map(
    [
        [1,'jonas'],
        [2,'matilda'],
    ]
)
console.log(students.get(2));

students.set(3,'jimy');


lists = set(['one','two','three']);

lists.add('four');
list.remove('two');