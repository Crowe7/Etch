let slider = document.querySelector('#myRange');
let output = document.querySelectorAll('.gridAmount');
let gridContainer = document.querySelector('#gridContainer');
let grid = document.querySelector(".grid");
let gridCss = "grid-template:repeat(" +slider.value + ", 1fr) / repeat(" + slider.value + ", 1fr);"
initPage();
function initPage() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = slider.value;
    }
    grid.style.cssText = gridCss;
    makeGrid(slider.value);
}

slider.oninput = function() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = this.value; 
    }
    deleteGrid(this.value);
}
function makeGrid(a) {
    size = a;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            let div = document.createElement('div');
            gridContainer.appendChild(div);
        }
    }
}
function deleteGrid(b) {
    size = b;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            let div = gridContainer.lastElementChild;
            div.remove();
        }
    }
}

// make a bunch of divs and give class fill <div class="fill"></div> like that
// grid-template: repeat(16, 1fr) / repeat(16, 1fr);