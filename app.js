document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item a");
  const mainPage = document.querySelector("#mainPage");
  const aboutUsPage = document.querySelector("#aboutUsPage");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (currentPath.includes("aboutUs")) {
      aboutUsPage.classList.add("active");
    } else {
      mainPage.classList.add("active");
    }
  });
});
