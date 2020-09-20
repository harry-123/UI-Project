document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn-cta");
  let overlay = document.getElementById("overlay");

  btn.addEventListener("click", () => {
    overlay.classList.add("animate-overlay");
    removeOverlay();
  });
});

function removeOverlay() {
  let overlay = document.getElementById("overlay");
  setTimeout(() => {
    overlay.classList.remove("animate-overlay");
  }, 3000);
}
