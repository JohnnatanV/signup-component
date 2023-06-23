const validateForm = document.getElementById("form");
// const inputBox = document.querySelectorAll(".input-box input");
// const inputText = document.querySelectorAll("input[type=text]");
// const inputEmail = document.querySelector("input[type=email]");
// const inputPassword = document.getElementById("password");

const inputs = [...validateForm.querySelectorAll(".data-error")];
console.log(inputs);

const allValid = inputs.forEach((input) => {
  input.addEventListener("input", () => input.reportValidity());
});
// console.log(allValid);

inputs.forEach((data) => {
  data.addEventListener("input", () => console.log(data.reportValidity()));
});

if (allValid) {
  console.log("OK");
} else {
  console.log("error");
}
