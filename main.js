const featureListener = document.querySelector(".features-small");
const companyListener = document.querySelector(".company-small");
const navDropDown = document.querySelector(".mobile-features");
const navDropDownC = document.querySelector(".mobile-company");
const rt1 = document.querySelector(".r1");
const rt2 = document.querySelector(".r2");
const navToggle = document.querySelectorAll(".mobile-nav-toggle");
const sideNav = document.querySelector(".side-nav");

featureListener.addEventListener("click", () => {
  navDropDown.toggleAttribute("visible");
  rt1.toggleAttribute("rotate");
});

companyListener.addEventListener("click", () => {
  navDropDownC.toggleAttribute("visible");
  rt2.toggleAttribute("rotate");
});

navToggle.forEach((navListen) => {
  navListen.addEventListener("click", () => {
    sideNav.toggleAttribute("visible");
  });
});
