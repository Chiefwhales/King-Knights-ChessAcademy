document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      menuBtn.textContent = mobileMenu.classList.contains("hidden")
        ? "☰"
        : "✕";
    });
  }

  // 2. Scroll Reveal Animation Logic
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < triggerBottom) {
        el.classList.add("active");
      }
    });
  };

  // Initial check and scroll event
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once on load to show hero section

  // 3. Navbar Background change on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("py-2", "bg-slate-950/90");
      nav.classList.remove("py-4", "bg-slate-950/70");
    } else {
      nav.classList.add("py-4", "bg-slate-950/70");
      nav.classList.remove("py-2", "bg-slate-950/90");
    }
  });
});
