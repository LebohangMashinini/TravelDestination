function switchToLightMode() {
  let body = document.querySelector("body");
  let button = document.querySelector(".theme-button");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    button.classList.remove("light-mode");
    button.textContent = "Switch to Light Mode";
  } else {
    body.classList.add("light-mode");
    button.classList.add("light-mode");
    button.textContent = "Switch to Dark Mode";
  }
}

function askForEmail() {
  let email = prompt(
    "Want to stay updated on my Icelandic adventure? Drop your email below, and I'll make sure you're the first to know about the trip details, travel tips, and exclusive content!"
  );

  if (email) {
    alert(
      "Thank you for sharing your email! We'll keep you updated on all the exciting details about my Icelandic adventure."
    );
  } else {
    alert(
      "No email entered. If you change your mind, feel free to come back and share it!"
    );
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", switchToLightMode);

let contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", askForEmail);
