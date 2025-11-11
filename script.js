document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');

        links.forEach((link, index) => {
            link.style.animation = link.style.animation
                ? ''
                : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
    });

    // Navbar Scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Carrossel
    const slides = document.querySelectorAll('.carousel-item');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (index + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    if (prev && next && slides.length > 0) {
        prev.addEventListener('click', () => showSlide(currentSlide - 1));
        next.addEventListener('click', () => showSlide(currentSlide + 1));

        setInterval(() => showSlide(currentSlide + 1), 5000);
    }

    // Hover em produtos
    document.querySelectorAll('.produto-item').forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.produto-overlay');

        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
        });

        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });
    });

    // Animação ao rolar
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.destaque-item, .produto-item');
        const screenPosition = window.innerHeight / 1.2;

        elements.forEach(el => {
            if (el.getBoundingClientRect().top < screenPosition) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    document.querySelectorAll('.destaque-item, .produto-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carousel-item");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
  }

  prev.addEventListener("click", () => showSlide(currentSlide - 1));
  next.addEventListener("click", () => showSlide(currentSlide + 1));

  setInterval(() => showSlide(currentSlide + 1), 5000);

  // Garante que o primeiro slide apareça logo no carregamento
  showSlide(0);
});
