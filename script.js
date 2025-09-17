function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.remove("active");
  });

  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach((link) => {
    if (link.getAttribute("onclick").includes(sectionId)) {
      link.classList.add("active");
    }
  });

  document.getElementById("mainNav").classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleMobileMenu() {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("open");
}

function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector("span:last-child");

  document.querySelectorAll(".faq-answer").forEach((item) => {
    if (item !== answer && item.classList.contains("open")) {
      item.classList.remove("open");
      item.parentElement.querySelector(
        ".faq-question span:last-child"
      ).textContent = "+";
    }
  });

  answer.classList.toggle("open");
  icon.textContent = answer.classList.contains("open") ? "−" : "+";
}

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject") || "Website Inquiry";
  const message = formData.get("message");

  const mailtoLink = `mailto:teampaws25@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  window.location.href = mailtoLink;

  alert(
    "Thank you for your message! Your email client should open now. If not, please email us directly at teampaws25@gmail.com"
  );

  event.target.reset();
}

document.addEventListener("click", function (e) {
  const nav = document.getElementById("mainNav");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
    nav.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("mainNav").classList.remove("open");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("mainNav").classList.remove("open");
  }
});

let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].classList.add("active");
}

// Auto play (optional)
setInterval(() => moveSlide(1), 10000);