function uiKitContentSlider3(slideSpeed) {
  const parent = document.querySelectorAll('.uikit-content-slider-3');

  for (let i = 0; i < parent.length; i++) {
    const slider = parent[i].querySelector(".slider");
    const item = parent[i].querySelectorAll(".item");

    let int = 0;
    const itemLength = item.length;

    setInterval(function () {
      slider.style.transition = "none";
      slider.style.left = "0";

      item[int].style.order = itemLength;

      if (int == itemLength - 1) {
        for (let i = 0; i < item.length; i++) {
          item[i].style.order = i;
        }
        int = -1;
      }

      int++;
    }, slideSpeed);

    setInterval(function () {
      slider.style.left = "-13.28em";
      slider.style.transition = "0.4s";
    }, slideSpeed - slideSpeed / 8);
  }
}

uiKitContentSlider3(3700);
//Slider Speed
