document.addEventListener("scroll", function() {
  const header = document.querySelector("nav.navbar");
  if (window.scrollY > 50) {
    header.classList.add("bg-dark");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-dark");
  }
});
