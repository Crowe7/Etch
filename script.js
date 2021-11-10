let slider = document.querySelector('#myRange');
let output = document.querySelectorAll('.gridAmount');
for (i=0; i < output.length; i++) {
    output[i].textContent = slider.value;
}
slider.oninput = function() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = this.value;
    }
}

// make a bunch of divs and give class fill <div class="fill"></div> like that
 