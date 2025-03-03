document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item a");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    console.log(link.getAttribute("href"));
    console.log(currentPath);
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "#000";
    }
  });
});
