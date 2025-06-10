let allMovies = [];

fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    allMovies = data;
    displayMovies(data); // Show all movies initially
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const container = document.getElementById("filterList");

// Add "All" button
const allBtn = document.createElement("button");
allBtn.className = "filter-button all-button";
allBtn.textContent = "All";
container.appendChild(allBtn);

// Add A–Z buttons
for (let i = 65; i <= 90; i++) {
  const btn = document.createElement("button");
  btn.className = "filter-button";
  btn.textContent = String.fromCharCode(i); // A to Z
  container.appendChild(btn);
}

// Attach click event
container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-button")) return;

  [...container.children].forEach((btn) =>
    btn.classList.remove("active")
  );
  e.target.classList.add("active");

  const selected = e.target.textContent;

  if (selected === "All") {
    displayMovies(allMovies);
  } else {
    const filteredMovies = allMovies.filter((movie) =>
      movie.Title.toLowerCase().startsWith(selected.toLowerCase())
    );
    displayMovies(filteredMovies);
  }
});

function displayMovies(movies) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  if (movies.length === 0) {
    cardContainer.innerHTML = "<p>No movies found.</p>";
    return;
  }

  movies.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.Poster}" alt="${item.Title}" />
      <h3>${item.Title}</h3>
      <p>${item.Year}</p>
      <p><strong>Genre:</strong> ${item.Genre}</p>
    `;
    cardContainer.appendChild(card);
  });
}
