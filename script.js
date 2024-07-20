var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  // JavaScript для плавной прокрутки к якорным ссылкам
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Добавление анимации для всех тегов <input>
  document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", function () {
      this.classList.add("animate__animated", "animate__tada");
    });
  
    input.addEventListener("blur", function () {
      this.classList.remove("animate__animated", "animate__tada");
    });
  });
  // Добавление анимации для всех тегов <a>
  document.querySelectorAll("a").forEach((a) => {
    a.addEventListener("focus", function () {
      this.classList.add("animate__animated", "animate__rubberBand");
    });
  
    a.addEventListener("blur", function () {
      this.classList.remove("animate__animated", "animate__rubberBand");
    });
  });