const sunIcon = document.querySelector(".svg__sun");
const moonIcon = document.querySelector(".svg__moon");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.children[0].classList.toggle("dark");

  // Check if the dark class is present
  if (document.children[0].classList.contains("dark")) {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
});
