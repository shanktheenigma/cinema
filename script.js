
      let toTop = document.querySelector("#nav2");
      window.addEventListener("scroll", (event) => {
        // console.log(window.scrollY);

        if (window.scrollY > 200) {
          toTop.style.opacity = "100%";
        } else {
          toTop.style.opacity = "0%";
        }
      });