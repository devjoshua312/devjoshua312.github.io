function uiKitProgressCirclesTwo(speed) {
  const parent = document.querySelectorAll(".uikit-progress-circles-2");

  for (let i = 0; i < parent.length; i++) {
    const progText = parent[i].querySelectorAll(".progText");
    const progress = parent[i].querySelectorAll(".progress");
    const progContainer = parent[i].querySelector(".progress-container");

    let bol = false;

    window.addEventListener("scroll", function () {
      if (pageYOffset > progContainer.offsetTop - 600 && bol === false) {
        //Select All Circles
        for (let i = 0; i < progText.length; i++) {
          progText[i].innerText = 0;
          count = 0;

          progress[i].style.transition = `bottom ${speed * 50}ms`;

          //Dynamic Fill Animation depending on percetage
          progress[i].style.bottom = "100%";
          progress[i].style.bottom = progText[i].dataset.count - 100 + "%";

          //Function for counting up
          function updateCount() {
            target = parseInt(progText[i].dataset.count);

            if (count < target) {
              count++;
              progText[i].innerText = count;
              setTimeout(updateCount, speed); /*Count Speed*/
            } else {
              progText[i].innerText = target + "%";
            }
          }
          updateCount();
          bol = true; /*Onscroll function runs only once when condition is met*/
        }
      }
    });
  }
}

uiKitProgressCirclesTwo(50);
//Count speed, 50 recommended
