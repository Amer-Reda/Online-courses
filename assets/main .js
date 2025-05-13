document.addEventListener("DOMContentLoaded", function () {
  // اختر كل الروابط
  const navLinks = document.querySelectorAll("nav ul li a");

  // دالة لوضع الكلاس active بناءً على الـ URL
  function setActiveLink() {
    const currentURL = window.location.href;

    // نشيل الكلاس active من كل الروابط
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // لو الرابط الحالي يتطابق مع الرابط في الـ href
    navLinks.forEach(link => {
      if (currentURL.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }

  // لما نضغط على أي لينك
  navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // نمنع إعادة تحميل الصفحة
      // نضيف الـ hash للـ URL بدون إعادة تحميل الصفحة
      window.location.href = this.getAttribute("href");
      setActiveLink(); // نضيف الكلاس active
    });
  });

  // لما الصفحة تتحمل نطبق الكلاس على الرابط المُختار في الـ URL
  setActiveLink();
});
