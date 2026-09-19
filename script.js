const svg = document.querySelector(".svg-container svg");
const overlay = document.querySelector(".svg-overlay");

svg.addEventListener("click", () => {
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
  } else {
    overlay.style.display = "block";
  }
});

overlay.addEventListener("click", () => {
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});