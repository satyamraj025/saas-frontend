// Dark mode
const toggle = document.getElementById("themeToggle");
if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark"));
  };
}

// Countdown
const timer = document.getElementById("timer");
if (timer) {
  setInterval(() => {
    const diff = new Date("2026-01-01") - new Date();
    timer.innerText = Math.floor(diff / (1000 * 60 * 60 * 24)) + " days";
  }, 1000);
}

// Search
const search = document.getElementById("search");
if (search) {
  search.onkeyup = () => {
    document.querySelectorAll(".feature-box").forEach(box => {
      box.style.display = box.innerText.toLowerCase().includes(search.value.toLowerCase()) ? "block" : "none";
    });
  };
}

// Form
const form = document.getElementById("contactForm");
if (form) {
  form.onsubmit = e => {
    e.preventDefault();
    localStorage.setItem("contact", "submitted");
    document.getElementById("formMsg").innerText = "Form submitted successfully!";
  };
}
