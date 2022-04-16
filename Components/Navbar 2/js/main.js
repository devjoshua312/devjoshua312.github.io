function uiKitNavbar5() {
  const navbar = document.querySelectorAll(".uikit-navbar-5");

  for (let i = 0; i < navbar.length; i++) {
    //Select necessary elements from the DOM
    const navBtn = navbar[i].querySelector(".nav-menu-btn");
    const navMenu = navbar[i].querySelector(".nav-links");

    //Nav open/close animation
    navBtn.addEventListener("click", function () {
      navMenu.classList.toggle("nav-5-active");
    });

    //Nav scroll animation
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        navbar[i].classList.add("uikit-nav-5-fixed");
      } else {
        navbar[i].classList.remove("uikit-nav-5-fixed");
      }
    });
  }
}

uiKitNavbar5();
