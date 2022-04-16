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
	
	/*box.addEventListener('mouseout', removeCoors);
	
	function removeCoors() {
		//box.classList.add('box-transition');
		box.style.backgroundPosition = '0 0';
	}*/
	}
}

//backgroundCursorFollow(15);

