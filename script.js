
      let toTop = document.querySelector("#nav2");
      window.addEventListener("scroll", (event) => {
        // console.log(window.scrollY);

        if (window.scrollY > 200) {
          toTop.style.opacity = "100%";
        } else {
          toTop.style.opacity = "0%";
        }
      });

      let stopScroll = document.querySelector("#search");
      let stay = document.querySelector("#cardContainer");
      window.addEventListener("scroll", (event) => {
        console.log(window.scrollY);

        if (window.scrollY > 120) {
          stopScroll.style.position = "fixed";
          stopScroll.style.top = "-40px";
          stopScroll.style.left = "0px";
          stopScroll.style.width = "100%";
          stopScroll.style.padding = "10px 10px";
          stay.style.top = "100px";
        } else {
          stopScroll.style.position = "static";
          stay.style.top = "";
        }
      });