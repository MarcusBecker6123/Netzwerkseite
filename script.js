document.addEventListener("DOMContentLoaded", () => {
  var hamburger = document.getElementsByClassName("hamburger");

  var sidebar = document.querySelector("nav");

  function toggleing(hamburger.addEventListener("toggle", (event) => {
    if (hamburger.classList === "hide") {
      sidebar.classList.remove("hide");
    } else {
      sidebar.classList.add("hide");
    }
  });
});
