/*const inputError = document.querySelectorAll(".input-box[data-error] input");

inputError.forEach((dataError) => {
  dataError.addEventListener("input", () =>
    dataError.parentElement.removeAttribute("data-error")
  );
});
*/

const inputBox = document.querySelectorAll(".input-box input");

console.log(inputBox[0]);

inputBox.forEach((box) => {
  box.addEventListener("input", () => {
    if (!box.value) {
      box.parentElement.classList.add("post-error");
    } else {
      box.parentElement.classList.remove("post-error");
    }
  });
});
