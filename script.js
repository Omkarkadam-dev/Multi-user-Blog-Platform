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
