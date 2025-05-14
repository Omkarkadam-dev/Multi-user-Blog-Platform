// Future dynamic features (e.g., animated typing, login modal, etc.)
console.log("Hero section loaded");


// Scroll-based reveal animation
const animatedCards = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedCards.forEach(card => observer.observe(card));


// Scroll-in animation for all ".animate-on-scroll" elements
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const scrollObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

scrollElements.forEach(el => scrollObserver.observe(el));


// Scroll-in animation for creator cards (reuse if already implemented)
document.querySelectorAll(".animate-on-scroll").forEach(el => {
    new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    ).observe(el);
  });
  