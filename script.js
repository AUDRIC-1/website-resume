// Toggle menu for mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
});

// Basic form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from submitting

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

 if (name === "" || email === "" || message === "") {
  alert("Please fill in all fields.");
} else {
  // Show modal
  const modal = document.getElementById("thankYouModal");
  modal.classList.remove("hidden");

  // Reset the form
  document.getElementById("contactForm").reset();
}
// Close modal when clicking X
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("thankYouModal").classList.add("hidden");
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("thankYouModal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

});

// Highlight active nav link when scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// Fade-in sections on scroll
const fadeElements = document.querySelectorAll(".fade-in");

const revealOnScroll = () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll); // run once when page loads
