// header

const section = document.getElementById('section');
const header = document.getElementById('header');

// Отслеживаем прокрутку страницы
window.onscroll = function () {
  if (window.pageYOffset > section.offsetHeight) {
    // Когда страница прокручена, фиксируем header и поднимаем section
    header.classList.add('fixed', 'top-0', 'w-full', 'z-10');
    section.classList.add('transform', '-translate-y-[4em]', 'opacity-0');  // Поднимаем section и скрываем его
  } else {
    // Если прокрутка меньше, возвращаем элементы в исходное состояние
    header.classList.remove('fixed', 'top-0', 'w-full', 'z-10');
    section.classList.remove('transform', '-translate-y-[4em]', 'opacity-0');  // Возвращаем section
  }
};

// SlideShow

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const texts = document.querySelectorAll(".text-slide");
const dots = document.querySelectorAll(".dot")
const slideInterval = 4000;


function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.opacity = "0";
    texts[index].style.opacity = "0";
    texts[index].style.transform = "translate(100%)";
    dots[index].classList.remove("active")
  });

  slides[slideIndex].style.opacity = "1";
  texts[slideIndex].style.opacity = "1";
  texts[slideIndex].style.transform = "translate(0)";
  dots[slideIndex].classList.add("active");

  slideIndex = (slideIndex + 1) % slides.length;
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    slideIndex = parseInt(dot.getAttribute("data-index"));
    showSlides();
  });

});

setInterval(showSlides, slideInterval);
showSlides();



// BurgerMenu

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

window.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});




// Div animation



// document.addEventListener("DOMContentLoaded", function () {
//   const animatedTitle = document.getElementById("animated-title");
//   const serviceCards = document.querySelectorAll(".service-card");

//   function checkScroll() {
//       const titleRect = animatedTitle.getBoundingClientRect();
//       if (titleRect.top < window.innerHeight - 100) {
//           animatedTitle.classList.add("visible-element");
//       } else {
//           animatedTitle.classList.remove("visible-element");
//       }

//       serviceCards.forEach(function (card) {
//           const rect = card.getBoundingClientRect();
//           if (rect.top < window.innerHeight - 100) {
//               card.classList.add("visible-element");
//           } else {
//               card.classList.remove("visible-element");
//           }
//       });
//   }

//   window.addEventListener("scroll", checkScroll);
//   checkScroll(); // Проверить сразу при загрузке страницы

//   // Обработчики кликов для запуска анимации
//   animatedTitle.addEventListener("click", function () {
//       animatedTitle.classList.remove("visible-element");
//       setTimeout(() => {
//           animatedTitle.classList.add("visible-element");
//       }, 0);
//   });

//   serviceCards.forEach(function (card) {
//       card.addEventListener("click", function () {
//           card.classList.remove("visible-element");
//           setTimeout(() => {
//               card.classList.add("visible-element");
//           }, 0);
//       });
//   });
// });




// //  About

// function revealOnScroll() {
//   const aboutTitle = document.getElementById('about-title');
//   const aboutContent = document.getElementById('about-content');
//   const titleRect = aboutTitle.getBoundingClientRect();
//   const contentRect = aboutContent.getBoundingClientRect();

//   if (titleRect.top < window.innerHeight && titleRect.bottom >= 0) {
//       aboutTitle.classList.add('visible-element');
//   } else {
//       aboutTitle.classList.remove('visible-element');
//   }

//   if (contentRect.top < window.innerHeight && contentRect.bottom >= 0) {
//       aboutContent.classList.add('visible-element');
//   } else {
//       aboutContent.classList.remove('visible-element');
//   }
// }

// window.addEventListener('scroll', revealOnScroll);
// window.addEventListener('resize', revealOnScroll);
// document.addEventListener('DOMContentLoaded', revealOnScroll);


// Accardion

function toggleAccardion(index) {
  const sections = document.querySelectorAll('.space-y-2 > div');
  sections.forEach((section, i) => {
      const content = section.querySelector('div.hidden, div.block');
      const arrow = section.querySelector('.arrow');
      if (i === index){
          content.classList.toggle('hidden')
          content.classList.toggle('block');
          arrow.textContent = content.classList.contains('hidden') ? '▼' : '▲'
      }else{
          content.classList.add('hidden');
          content.classList.remove('block');
          arrow.textContent = '▼'
      }
  })

}

// Animation

function toggleAccordion() {
  const content = document.querySelector('.accordion-content');
  content.classList.toggle('open');
}


document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".blockanim");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, { threshold: 0.2 }); // Покажет блок, когда он на 20% в зоне видимости

  blocks.forEach(blockanim => observer.observe(blockanim));
});