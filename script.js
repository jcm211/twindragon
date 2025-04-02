// Loading Screen
window.addEventListener("load", () => {
  document.getElementById("loading-screen").style.display = "none";
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});