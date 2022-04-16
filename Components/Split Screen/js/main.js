function uiKitSplitScreen1() {
    document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelectorAll('.uikit-split-screen-1');

    for (let i = 0; i < wrapper.length; i++) {
      const topLayer = wrapper[i].querySelector('.left');
      const handle = wrapper[i].querySelector('.handle');
      let skew = 0;
      let delta = 0;
    
      if(wrapper[i].className.indexOf('uikit-split-screen-1') != -1) {
        skew = 1000;
      }
      
      wrapper[i].addEventListener('mousemove', function(e) {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
      
        handle.style.left = e.clientX + delta + 'px';
    
        topLayer.style.width = e.clientX + skew + delta + 'px';
      }); 
    }
  });
}

uiKitSplitScreen1();



