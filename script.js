let slider = document.querySelector('#myRange');
let output = document.querySelectorAll('.gridAmount');
let gridContainer = document.querySelector('#gridContainer');
let grid = document.querySelector(".grid");
let gridCss = 0;
initPage();
function initPage() {
    gridCss = "grid-template:repeat(" + slider.value + ", 1fr) / repeat(" + slider.value + ", 1fr);"
    for (i=0; i < output.length; i++) {
        output[i].textContent = slider.value;
    }
    grid.style.cssText = gridCss;
    makeGridDiv(slider.value);
}

slider.oninput = function() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = this.value; 
    }
}
slider.onchange = function() {
    makeGrid(slider.value, slider.value);
}
function makeGridDiv(a) { 
    size = a;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
            let div = document.createElement('div');
            gridContainer.appendChild(div);
        }
    }
}
function deleteGridDiv() {
    size = gridContainer.children.length ;
    for(i = 0; i <+ size; i++) {
            let div = gridContainer.lastElementChild;
            if(div === null) {
                break;
            }
            else {
                div.remove();
            }
        }
    }
function makeGrid(gridSize, gridCssChange) {
    gridCss = "grid-template:repeat(" +gridCssChange + ", 1fr) / repeat(" + gridCssChange + ", 1fr);"
    grid.style.cssText = gridCss;
    deleteGridDiv();
    makeGridDiv(gridSize);
}


// make a bunch of divs and give class fill <div class="fill"></div> like that
// grid-template: repeat(16, 1fr) / repeat(16, 1fr);
// makeGrid(slider.value, slider.value);