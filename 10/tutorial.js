// goToSlide for pictures 

const goToSlide = function (slide) {
    // s: خود اسلاید (المنت div)
    // i: شماره ایندکس اسلاید (0, 1, 2, ...)
    // slide: شماره اسلایدی که می‌خوایم نشون بدیم (مقصد)
    
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    // maxSlide تعداد کل عکس‌هاست (مثلاً ۴ تا)
    // maxSlide - 1 میشه ایندکسِ آخری (۳)
  
    if (curSlide === maxSlide - 1) {
      curSlide = 0; // اگه آخری بودیم، بپر اول (Reset)
    } else {
      curSlide++; // در غیر این صورت، یکی برو جلو
    }
  
    goToSlide(curSlide); // حالا موتور رو روشن کن تا بره اونجا
    activateDot(curSlide); // نقطه‌ها رو هم آپدیت کن
  };

  const createDots = function () {
    slides.forEach(function (_, i) {
      // یه دکمه می‌سازیم و بهش دیتا میدیم: data-slide="0", data-slide="1", ...
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  document
  .querySelector(`.dots__dot[data-slide="${slide}"]`) // انتخاب نقطه با دیتا
  .classList.add('dots__dot--active');

  document.addEventListener('keydown', function (e) {
    // اگه کلید چپ بود، تابع prevSlide رو صدا بزن
    if (e.key === 'ArrowLeft') prevSlide();
    
    // اینم یه مدل نوشتن شرطیِ کوتاه (Short Circuiting):
    // اگه راست بود، تابع nextSlide رو صدا بزن
    e.key === 'ArrowRight' && nextSlide();
  });

  // Lazy Loading Images

  const loadImg = function (entries, observer) {
    const [entry] = entries; // (توضیح: همون تکنیک گرفتن اولین گزارش از نگهبان)
  
    // ۱. اگه عکس توی کادر نیست، برگرد (کاری نکن)
    if (!entry.isIntersecting) return;
  
    // ۲. تعویض عکس (The Swap)
    // entry.target: همون عکسیه که الان اسکرول کردیم روش.
    // ما آدرسِ مخفی (dataset.src) رو برمیداریم و می‌ریزیم توی آدرس اصلی (src).
    entry.target.src = entry.target.dataset.src;
  
    // ۳. برداشتن تاری (نکته انحرافی داره!)
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
  
    // ۴. خداحافظی با نگهبان (دیگه لازم نیست این عکس رو بپایی)
    observer.unobserve(entry.target);
  };

  // Document Loaded 

  document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree built!', e);
  });

  // load
  window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
  });

  // beforeUnload

  window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); // استاندارد جدید برای برخی مرورگرها
    console.log(e);
    e.returnValue = ''; // این خط باعث نمایش پیام هشدار پیش‌فرض مرورگر می‌شود
  });