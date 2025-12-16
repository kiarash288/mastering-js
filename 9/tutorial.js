/* ۱. تکنیک Event Delegation (نمایندگی رویداد) 🎩
یادته در مورد Bubbling (حباب شدن) صحبت کردیم؟ این بهترین کاربرد عملی‌اش است.

مسئله: فرض کن توی نوار منو (nav)، ما ۱۰ تا لینک داریم.

روش آماتور: روی تک‌تک لینک‌ها addEventListener بذاریم (۱۰ تا تابع!). اگر ۱۰۰۰ تا لینک بود چی؟ مرورگر می‌مرد!

روش حرفه‌ای (Delegation): رویداد رو فقط روی پدرشون (ul) می‌ذاریم. وقتی روی بچه کلیک شه، حباب میاد بالا و پدر می‌فهمه. */

// Event Delegation 

// ۱. ایونت رو می‌ذاریم روی "پدر" (کلِ نوارِ لینک‌ها)
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault(); // جلوگیر از پرش ناگهانی
  
    // ۲. حالا باید بفهمیم کدوم "بچه" کلیک شده؟
    // e.target یعنی: دقیقاً انگشتت رو کجا زدی؟
    
    // شرط: اگر انگشتت خورده روی چیزی که کلاس 'nav__link' داره (یعنی بچه مورد نظر)
    if (e.target.classList.contains('nav__link')) {
      
      // ۳. حالا کارمون رو انجام میدیم
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Closest() method
  /* این متد دقیقاً برعکس querySelector عمل می‌کنه.

querySelector: می‌گرده پایین تا بچه رو پیدا کنه.

closest: می‌گرده بالا تا نزدیک‌ترین پدر (یا جدول) رو پیدا کنه. */
e.target.closest('.operations__tab');
// یعنی: "آقای مرورگر! مهم نیست انگشت کاربر دقیقاً روی چی خورده (روی عدد، روی آیکون، یا هر چی). برو بالا و بالاتر تا برسی به اولین کسی که کلاسش .operations__tab هست. همون رو به من بده."

const clicked = e.target.closest('.operations__tab');

/*حالت الف (کلیک روی خود دکمه): e.target میشه خود دکمه. closest نگاه می‌کنه می‌بینه خود دکمه کلاس .operations__tab رو داره، پس همون رو برمی‌گردونه. (همه چی عالیه).

حالت ب (کلیک روی عدد 01): e.target میشه اون تگ span. ولی ما دکمه رو می‌خوایم! closest میره به سمت بالا (پدر) تا برسه به دکمه. پس باز هم دکمه رو پیدا می‌کنه. (نجات دهنده!).

حالت ج (کلیک روی فضای خالی): کاربر بین دو دکمه کلیک کرده. e.target میشه خودِ tabsContainer. متد closest میره بالا دنبال دکمه می‌گرده، ولی دکمه‌ای پیدا نمی‌کنه (چون دکمه‌ها زیرمجموعه کانتینر هستن، نه پدرش). پس نتیجه میشه null.*/

<div class="tabs-container">
   <button class="operations__tab"> <span>01</span> تب اول </button>
   <button class="operations__tab"> <span>02</span> تب دوم </button>
   </div>

tabsContainer.addEventListener('click', function (e) {
    // ۱. جستجوی هوشمند:
    // حتی اگه روی عددِ توی دکمه کلیک شده باشه، این خط خودِ دکمه رو پیدا می‌کنه.
    const clicked = e.target.closest('.operations__tab');
  
    // ۲. گارد (Guard Clause):
    // اگه کاربر روی فضای خالیِ بین دکمه‌ها کلیک کرده باشه، closest هیچی پیدا نمی‌کنه (null میشه).
    // پس می‌گیم: اگه چیزی پیدا نشد، همینجا تموم کن و بقیه کد رو اجرا نکن.
    if (!clicked) return;
  
    // ۳. بقیه کارها (فعال کردن تب و ...)
    clicked.classList.add('operations__tab--active');
  });
  // Data set in html

/*<button class="operations__tab" data-tab="1"> تب ۱ </button>
<button class="operations__tab" data-tab="2"> تب ۲ </button>

<div class="operations__content operations__content--1"> متن ۱... </div>
<div class="operations__content operations__content--2"> متن ۲... </div>*/

// مرحله ۱: خاموش کردن همه چراغ‌ها (Reset Pattern)
// اول کلاس active رو از "همه" تب‌ها و "همه" محتواها می‌گیریم.
tabs.forEach(t => t.classList.remove('operations__tab--active'));
tabsContent.forEach(c => c.classList.remove('operations__content--active'));

// مرحله ۲: روشن کردن دکمه‌ای که کلیک شده
clicked.classList.add('operations__tab--active');

// مرحله ۳: پیدا کردن و روشن کردنِ محتوای مربوطه (جادوی dataset) 🪄
document
  .querySelector(`.operations__content--${clicked.dataset.tab}`) 
  .classList.add('operations__content--active');

  // Bind method

  // ❌ غلط (این تابع همون لحظه اجرا میشه و خراب میشه)
nav.addEventListener('mouseover', handleHover(0.5));

// ✅ درست (ولی نمیشه بهش عدد 0.5 رو پاس داد!)
nav.addEventListener('mouseover', handleHover);

// خط ۱۳۲ و ۱۳۳ فایل script.js
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// intersection observer api 

// ۱. تعریف دستورالعمل (وقتی هدر دیده شد یا رفت بیرون، این اجرا میشه)
const stickyNav = function (entries) {
    const [entry] = entries; // وضعیتِ لحظه‌ایِ هدف رو می‌گیریم
  
    // entry.isIntersecting: آیا الان توی صفحه هست؟ (True/False)
    // ما میگیم: اگه توی صفحه "نیست" (!)، کلاس sticky رو اضافه کن.
    if (!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
  };
  
  // ۲. ساختن نگهبان با تنظیمات
  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,     // null یعنی "کل صفحه نمایش" (Viewport) رو دید بزن
    threshold: 0,   // "آستانه": 0 یعنی وقتی ۰٪ از هدر دیده می‌شد (یعنی کاملاً رفت بیرون)
    rootMargin: `-${navHeight}px`, // یه حاشیه ایمنی (زودتر خبر بده)
  });
  
  // ۳. مأموریت دادن به نگهبان
  headerObserver.observe(header); // آهای نگهبان! چهارچشمی "هدر" رو بپا.

  