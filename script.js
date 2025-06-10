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
