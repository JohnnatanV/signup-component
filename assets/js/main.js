const inputError = document.querySelectorAll(".input-box[data-error] input");

inputError.forEach((dataError) => {
  dataError.addEventListener("input", () =>
    dataError.parentElement.removeAttribute("data-error")
  );
});
