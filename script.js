// Simple smooth scroll effect
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Thank you! Your message has been received.");
//   this.reset();
// });

  