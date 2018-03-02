document.addEventListener("DOMContentLoaded", function() {
    
    // init slider
    var slider = tns({
        container: '#time-slides',
        autoHeight: true,
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: false,
        controlsText: ["Previous", "Next"]
    });

    // handle timeline toggle
    var slide = document.getElementById('time-wrap'),
    list = document.getElementById('time-list'),
    toggleinstructions = document.getElementById('toggle-instructions'),
    togglebtnwrap = document.getElementById('toggle-btn-wrap'),
    togglebtn = document.getElementById('toggle-btn');
    // console.log(slide.style.display);
    // console.log(list.style.display);
   
    function toggle(){
        //console.log(slide.style.display);
        //console.log(list.style.display);
        if (slide.style.display == 'block') {
            slide.style.display = 'none';
            list.style.display = 'block';
            toggleinstructions.innerHTML = '';
            togglebtn.innerHTML = 'Click here to return to timeline slides.';
        } else {
            list.style.display = 'none';
            slide.style.display = 'block';
            toggleinstructions.innerHTML = 'Use the buttons below or swipe to move year-by-year through the timeline.';
            togglebtn.innerHTML = 'Click here to show the full timeline.';
        }
    }

    togglebtn.addEventListener('click', toggle);
    
});