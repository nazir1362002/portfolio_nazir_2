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