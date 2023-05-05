const listener = document.querySelector(".mobile-drop-down");
const navDropDown = document.querySelector(".mobile-features");
const rotateImg = document.querySelector(".rt-img");

listener.addEventListener("click", () => {
  navDropDown.toggleAttribute("visible");
  rotateImg.toggleAttribute("rotate");
});
