document.addEventListener("DOMContentLoaded", () => {

  const startScreen = document.getElementById("startScreen");
  const scene1 = document.getElementById("scene1");
  const slideImage = document.getElementById("slideImage");
  const bgMusic = document.getElementById("bgMusic");
  const overlayText = document.getElementById("overlayText");
  const blackScreen = document.getElementById("blackScreen");
  const penguinCouple = document.getElementById("penguinCouple");

  const heartsContainer = document.getElementById("heartsContainer");
  const valentineBoard = document.getElementById("valentineBoard");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  const finalMessage = document.getElementById("finalMessage");
  const envelope = document.querySelector(".envelope");

  const images = [
    "./images/pic1.jpg",
    "./images/pic2.jpg",
    "./images/pic3.jpg",
    "./images/pic4.jpg",
    "./images/pic5.jpg",
    "./images/pic6.jpg",
    "./images/pic7.jpg",
    "./images/pic8.jpg",
    "./images/pic9.jpg",
    "./images/pic10.jpg"
  ];

  let index = 0;
  let heartsStarted = false;

  /* START EXPERIENCE */
  startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
    scene1.style.display = "flex";
    bgMusic.volume = 0.5;
    bgMusic.play().catch(() => {});
    showNext();
  });

  /* SLIDESHOW */
  function showNext() {
    if (index >= images.length) {
      startPenguinScene();
      return;
    }

    slideImage.src = images[index];
    slideImage.onload = () => {
      slideImage.style.opacity = "1";
      overlayText.style.opacity = "1";
    };

    setTimeout(() => {
      slideImage.style.opacity = "0";
      overlayText.style.opacity = "0";
      index++;
      setTimeout(showNext, 2000);
    }, 3000);
  }

  /* PENGUIN SCENE */
  function startPenguinScene() {
    blackScreen.style.opacity = "1";

    // Penguins appear
    setTimeout(() => {
      penguinCouple.classList.add("hug");

      // Question appears AFTER penguins settle
      setTimeout(() => {
        startPhase4();
      }, 1200);

    }, 1000);
  }

  /* HEARTS + QUESTION */
  function startPhase4() {
    if (heartsStarted) return; // 🔒 prevent duplicates
    heartsStarted = true;

    valentineBoard.style.display = "block";

    setInterval(() => {
      const heart = document.createElement("span");
      heart.textContent = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 4 + "s";
      heartsContainer.appendChild(heart);

      heart.onclick = () => {
        const questions = [
          "Do you like me? 💕",
          "Do you love me? 🥰",
          "Am I cute? 😳"
        ];
        alert(questions[Math.floor(Math.random() * questions.length)]);
      };

      setTimeout(() => heart.remove(), 7000);
    }, 900);
  }

  /* NAUGHTY OPTION 1 */
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });

  /* YES → FINAL ENVELOPE */
  yesBtn.addEventListener("click", () => {
    blackScreen.style.opacity = "0";

    setTimeout(() => {
      finalMessage.style.display = "flex";

      setTimeout(() => {
        envelope.classList.add("open");
      }, 800);

    }, 800);
  });

});