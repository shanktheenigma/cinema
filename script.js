function toggleOffcanvas() {
  const menuButton = document.getElementById("menu"); // The ">" button
  const offcanvasMenu = document.getElementById("offcanvasMenu");

  offcanvasMenu.classList.toggle("active");

  if (offcanvasMenu.classList.contains("active")) {
    menuButton.innerText = "<";
  } else {
    menuButton.innerText = ">";
  }
}

const input = document.querySelector(".search-input");
const clearBtn = document.querySelector(".clear-btn");
const searchBtn = document.querySelector(".search-button");
const results = document.querySelectorAll("#search-results li");

function filterResults() {
  const query = input.value.toLowerCase();
  results.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? "list-item" : "none";
  });
}

searchBtn.addEventListener("click", filterResults);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") filterResults();
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  results.forEach((item) => (item.style.display = "list-item"));
});
