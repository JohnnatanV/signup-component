const validateForm = document.getElementById("form");
const inputBox = document.querySelectorAll(".input-box input");
const inputText = document.querySelectorAll("input[type=text]");
const inputEmail = document.querySelector("input[type=email]");
const inputPassword = document.getElementById("password");

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

validateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  inputBox.forEach((box) => {
    if (!box.value || !validateEmail(inputEmail.value)) {
      box.parentElement.classList.add("post-error");
      box.nextElementSibling.classList.remove("hidden");
    } else {
      box.parentElement.classList.remove("post-error");
      box.nextElementSibling.classList.add("hidden");
    }
  });
});
// let rxEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+/;
// let rxPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-]).{8,}$/g;

// inputEmail.addEventListener("input", (event) => {
//   if (!rxEmail.test(event.target.value)) {
//     inputEmail.parentElement.classList.add("post-error");
//     inputEmail.nextElementSibling.classList.remove("hidden");
//   } else {
//     inputEmail.parentElement.classList.remove("post-error");
//     inputEmail.nextElementSibling.classList.add("hidden");
//   }
// });

// inputPassword.addEventListener("change", (event) => {
//   if (rxPass.test(event.target.value)) {
//     inputPassword.parentElement.classList.remove("post-error");
//     inputPassword.nextElementSibling.classList.add("hidden");
//   } else {
//     inputPassword.parentElement.classList.add("post-error");
//     inputPassword.nextElementSibling.classList.remove("hidden");
//   }
// });
