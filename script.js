// Typing Animation

const typing = document.querySelector(".typing");

if (typing) {

  const words = [
    "Full Stack Developer",
    "Flutter Developer",
    "Problem Solver",
    "CSE Student"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {

    const currentWord = words[wordIndex];

    if (isDeleting) {
      typing.textContent = currentWord.substring(0, charIndex--);
    } else {
      typing.textContent = currentWord.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      speed = 1500;
    }

    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();
}

// AOS Animation

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true
  });
}
//Email js Setup
emailjs.init("K1gfmeXvb_tJ8yYfp");

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");



form.addEventListener("submit", function (e) {

  e.preventDefault();
  const submitBtn = form.querySelector("button");

  submitBtn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;

  emailjs.sendForm(
    "service_c32vcoh",
    "template_j498l2l",
    form
  )
    .then(() => {

      formMessage.style.display = "block";
      formMessage.className = "success-message";
      formMessage.innerHTML =
        "✓ Message sent successfully! I'll get back to you soon.";

      form.reset();
      // Restore button
      submitBtn.innerText = "Send Message";
      submitBtn.disabled = false;
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);

    })
    .catch((error) => {

      formMessage.style.display = "block";
      formMessage.className = "error-message";
      formMessage.innerHTML =
        "✕ Something went wrong. Please try again.";

      console.error(error);
      // Restore button
      submitBtn.innerText = "Send Message";
      submitBtn.disabled = false;
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);

    });

});