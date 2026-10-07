const roles = [
  "Aspiring Data Science & Analytics Professional",
  "Front-End Web Developer",
  "AI & Machine Learning Learner",
  "Log Analytics Project Contributor"
];

const typingText = document.getElementById("typing-text");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeRole(){
  const role = roles[roleIndex];
  typingText.textContent = deleting ? role.slice(0, --charIndex) : role.slice(0, ++charIndex);
  let delay = deleting ? 45 : 75;
  if(!deleting && charIndex === role.length){ delay = 1700; deleting = true; }
  else if(deleting && charIndex === 0){ deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 350; }
  setTimeout(typeRole, delay);
}
typeRole();

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.background = window.scrollY > 20 ? "rgba(8,9,13,.96)" : "rgba(8,9,13,.84)";
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));
