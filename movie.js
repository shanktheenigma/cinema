fetch("movies.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("cardContainer");
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
            <img src="${item.Poster}" alt="${item.Title}" />
            <h3>${item.Title}</h3>
            <p>${item.Year}</p>
            <p><strong>Genre:</strong> ${item.Genre}</p>
          `;
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
