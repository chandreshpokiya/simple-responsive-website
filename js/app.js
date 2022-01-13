var scrollButton = document.querySelector(".scrollTop");

if (scrollButton) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > window.innerHeight * 0.6) {
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}
