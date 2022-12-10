let btnLog = document.querySelector(".signUp--btn");
let container = document.querySelector(".container-overlay");
btnLog.addEventListener("click", function () {
  container.classList.toggle("showOverlay");
});
