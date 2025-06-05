 function toggleOffcanvas() {
        const menu = document.getElementById("menu");
        const offcanvas = document.getElementById("offcanvasMenu");

        document.getElementById("offcanvasMenu").classList.toggle("active");

        if (offcanvas.classList.contains("active")) {
          menu.innerText = "<";
        } else {
          menu.innerText = ">";
        }
      }