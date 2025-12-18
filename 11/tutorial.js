// OOP in js

//  1-Constructor Functions

const Person = function (name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.calcAge = function () {
    console.log(2037 - this.age);
  };
const jonas = new Person('Jonas',20);
console.log(jonas);
// {name: 'Jonas', age: 20}
console.log(jonas.name);
// Jonas

// 2-ES6 Classes

class Person2 {
    constructor(name,age) {  // constructer = def __init__ in python
        this.name = name;
        this.age = age;
    }
    calcAge() {
        console.log(2025 - this.age);
    }
}
const jesica = new Person2('Jesica',20);
jesica.calcAge();

// Prototypes chaining

/* ۳. زنجیره پروتوتایپ (Prototype Chain) لازمه؟ ⛓️
بله، صد در صد لازمه بدونی، وگرنه رفتار کدهات رو نمی‌فهمی!

زنجیره یعنی چی؟ (بازی "من ندارم، بابام داره") وقتی تو به جاوااسکریپت می‌گی: jonas.calcAge()، اتفاقات زیر میفته:

JS میاد سراغ خودِ jonas. می‌پرسه: "تو تابعی به اسم calcAge داری؟"

جونس میگه: "نه من فقط اسم و سن دارم."

JS ناامید نمیشه. میره سراغ پدرش (Prototype). می‌پرسه: "تو چی؟ تو داری؟"

پروتوتایپ میگه: "آره دارم! بیا بگیرش.".


اگر پدرش هم نداشت، میره سراغ پدربزرگش (Object.prototype) و این زنجیره ادامه داره تا برسه به null (پایان خط). */

class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // متدها اینجا نوشته میشن و اتوماتیک میرن تو پروتوتایپ
    calcAge() {
      console.log(2037 - this.birthYear);
    }
    
    // Static Method (متد ایستگاه)
    static hey() {
      console.log('Hey there 👋');
    }
  } //static hey(): این تابع مالِ خودِ کلاسه، نه مالِ نمونه‌ها. یعنی jessica.hey() کار نمیکنه، باید بنویسی  
// Getter and Setter 

/*set fullName(newFullName) {
    // نگهبان چک می‌کنه:
    if (n.includes(' ')) this._fullName = name; // اگه اوکی بود، بریز تو متغیر اصلی (_fullName)
    else alert(`${name} is not a full name!`); // اگه نبود، داد بزن!
  }

  get fullName() {
    return this._fullName; // وقتی کسی اسم رو خواست، از متغیر اصلی بخون و بهش بده
  } */

// creat manual object 
const PersonProto = {
    calcAge() { console.log(2037 - this.birthYear); },
    init(firstName, birthYear) { this.firstName = firstName; this.birthYear = birthYear; console.log(this); }
  }; // init اسمش رو هرچی بخوایم میتونیم بذاریم در واقع حکم همون constructer هستش
  
  const steven = Object.create(PersonProto);
  steven.init('Steven', 1991);
  steven.calcAge();
  // {firstName: 'Steven', birthYear: 1991}
 