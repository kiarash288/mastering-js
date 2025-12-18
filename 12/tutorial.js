// asynchronous and synchronous 
// AJAX = Asynchronous JavaScript And XML

/* : پشت صحنه چه خبره؟ (Event Loop) ⚙️
این بخش فنی‌ترین قسمت ماجراست و خیلی جذابه. چطور جاوااسکریپت که فقط یک دست داره (Single Thread)، می‌تونه چند تا کار رو با هم مدیریت کنه؟

جواب: جاوااسکریپت تنها نیست! مرورگر (Browser) بهش کمک می‌کنه.

معماری اجرا شامل این بخش‌هاست:

موتور JS (Call Stack): جایی که کدهای معمولی (همگام) اجرا میشن. مثل میز کار اصلی.

Web APIs: بخش‌های قدرتمند مرورگر (مثل تایمر، درخواست شبکه، کار با DOM). کارهای زمان‌بر اینجا انجام میشن.

صف انتظار (Callback Queue): وقتی کارِ Web API تموم شد (مثلاً ۳ ثانیه تایمر گذشت)، تابع مربوطه میاد توی این صف و منتظر می‌مونه.

حلقه رویداد (Event Loop): این مثل یک نگهبانه. مدام چک می‌کنه:

آیا میز کار اصلی (Call Stack) خالیه؟

آیا کسی توی صف انتظار هست؟

اگر میز خالی بود، نفر اول صف رو هل میده روی میز کار تا اجرا بشه.

یک نکته طلایی (Microtasks Queue):
یک صف ویژه هم داریم به اسم Microtasks. این صف مخصوص Promise هاست. نکته مهم: این صف پارتی‌بازی داره! اولویتش از صف معمولی بالاتره. یعنی اگر هم تایمر تموم شده باشه و هم یک Promise جواب داده باشه، اول Promise اجرا میشه */


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
    // اینجا HTML مربوط به کارت کشور رو می‌سازیم
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    
    // این خط HTML ساخته شده رو می‌چسبونه تهِ لیست کشورها
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // شفافیت ظرف رو ۱ می‌کنیم تا دیده بشه (احتمالا قبلا مخفی بوده)
    countriesContainer.style.opacity = 1;
  };
  // .then is a old way to handle the data

  const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    });
  };

  const whereAmI = function (lat, lng) {
    // ۱. درخواست به یک API نقشه برای تبدیل مختصات به نام کشور
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
      .then(res => {
        // چک می‌کنیم اگه سرور ارور داد، ما هم دستی ارور درست کنیم
        if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
        return res.json();
      })
      .then(data => {
        // اینجا نام شهر و کشور رو چاپ می‌کنیم
        console.log(`You are in ${data.city}, ${data.countryCode}`);
  
        // ۲. حالا که فهمیدیم کدوم کشوریم، درخواست می‌زنیم تا اطلاعات اون کشور رو بگیریم
        return fetch(`https://restcountries.com/v2/name/${data.country}`);
      })
      .then(res => {
        if (!res.ok) throw new Error(`Country not found (${res.status})`);
        return res.json();
      })
      // ۳. در نهایت کارت کشور رو روی صفحه می‌سازیم
      .then(data => renderCountry(data[0]))
      // ۴. اگر هر جای این زنجیره اروری پیش بیاد، اینجا مدیریتش می‌کنیم
      .catch(err => console.error(`${err.message} 💥`));
  };

  const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lotter draw is happening 🔮');
    
    // شبیه‌سازی زمان‌بر بودن قرعه‌کشی (۲ ثانیه)
    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve('You WIN 💰'); // اگر برنده شدیم
      } else {
        reject(new Error('You lost your money 💩')); // اگر باختیم
      }
    }, 2000);
  });
  
  // استفاده از پرامیس ساخته شده
  lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

  const whereAmI = async function () {
    try {
      // ۱. گرفتن موقعیت مکانی خودِ مرورگر (GPS)
      const pos = await getPosition(); // صبر کن تا موقعیت پیدا بشه
      const { latitude: lat, longitude: lng } = pos.coords;
  
      // ۲. تبدیل مختصات به نام کشور
      const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
      if (!resGeo.ok) throw new Error('Problem getting location data');
      const dataGeo = await resGeo.json();
  
      // ۳. گرفتن اطلاعات کشور
      const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryCode}`);
      if (!res.ok) throw new Error('Problem getting country');
      const data = await res.json();
      
      // ۴. نمایش کشور
      renderCountry(data[0]);
  
    } catch (err) {
      // اگر هر اروری رخ بده، می‌پره اینجا
      console.error(`${err} 💥`);
      renderError(`💥 ${err.message}`);
    }
  };