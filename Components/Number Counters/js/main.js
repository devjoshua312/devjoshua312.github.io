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

uiKitNumberCounters(200);
//Count speed, 200 recommended










