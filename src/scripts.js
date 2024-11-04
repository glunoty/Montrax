document.addEventListener("DOMContentLoaded", function () {
  const fadeUpElements = document.querySelectorAll(".fade-up");

  const observerOptions = {
    threshold: 0,
    rootMargin: "30px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Hanya animasi sekali
      }
    });
  }, observerOptions);

  fadeUpElements.forEach((element) => observer.observe(element));
});
