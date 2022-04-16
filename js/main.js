function uiKitNavbar5(offset) {
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
      if (window.scrollY > offset) {
        navbar[i].classList.add("uikit-nav-5-fixed");
      } else {
        navbar[i].classList.remove("uikit-nav-5-fixed");
      }
    });
  }
}

//uiKitNavbar5(200);
/*========================================*/ 
/*========================================*/ 
/*========================================*/
function backgroundCursorFollow(sensitivity) {
	const parent = document.querySelectorAll('.uikit-cursor-follow-header');

	for (let i = 0; i < parent.length; i++) {
		
    const box = parent[i].querySelector('.box');
    const boxContent = parent[i].querySelector('.box-content');
    
    box.addEventListener('mousemove', addCoors);
    boxContent.addEventListener('mousemove', addCoors2);
    
    function addCoors(e) {
      //box.classList.add('box-transition');
      const x = e.clientX;
      const y = e.clientY;
      box.style.backgroundPosition = 
      ` 
        ${x / sensitivity}px ${y / sensitivity}px
      `;
    }
    
    function addCoors2(e) {
      //box.classList.add('box-transition');
      const x = e.clientX;
      const y = e.clientY;
      box.style.backgroundPosition = 
      ` 
        ${x / sensitivity}px ${y / sensitivity}px
      `;
    }
	}
}

//backgroundCursorFollow(15); 
/*========================================*/ 
/*========================================*/ 
/*========================================*/
function uiKitNumberCounters(counterSpeed) {
	const parent = document.querySelectorAll('.uikit-counters');

	for (let i = 0; i < parent.length; i++) {
		
		const counters = document.querySelectorAll('.uikit-counters')[i].querySelectorAll(".counter");
		const counterSection = document.querySelectorAll('.uikit-counters')[i].querySelector('.counter-container');
		const speed = counterSpeed; // The lower the faster

		let bol = false;

		window.addEventListener('scroll', function () {
			if (pageYOffset > counterSection.offsetTop - 600 && bol === false) {

				counters.forEach(counter => {
					const updateCount = () => {
						const target = +counter.getAttribute('data-target');
						const count = +counter.innerText;

						// Lower inc to slow and higher to slow
						const inc = target / speed;

						// Check if target is reached
						if (count < target) {
							// Add inc to count and output in counter
							counter.innerText = count + inc;
							// Call function every ms
							setTimeout(updateCount, 1);
						} else {
							counter.innerText = target;
						}
					};
					updateCount();
					bol = true;
				});
			}
		});
	}
}

//uiKitNumberCounters(200);
//Count speed, 200 recommended
/*========================================*/ 
/*========================================*/ 
/*========================================*/
function uiKitFormLabelControl() {
  const field = document.querySelectorAll('.field');
  const label = document.querySelectorAll('.label');

  for (let i = 0; i < field.length; i++) {

    field[i].addEventListener('blur', function() {
      //If there is text in the input field, don't bring the label back down into the field
      if(field[i].value !== '') {
        label[i].classList.add('label-stay');
      } else {
        label[i].classList.remove('label-stay');
      }
    });
  };
}

uiKitFormLabelControl();
/*========================================*/ 
/*========================================*/ 
/*========================================*/
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

//uiKitContentSlider3(3700);
//Slider Speed











