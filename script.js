let slider = document.querySelector('#myRange');
let output = document.querySelectorAll('.gridAmount');
let gridContainer = document.querySelector('#gridContainer');
for (i=0; i < output.length; i++) {
    output[i].textContent = slider.value;
}
slider.oninput = function() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = this.value; 
    }
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
makeGrid(100);
function deleteGrid(b) {
    size = b;
    for(i = 0; i < size; i++) {
        for(j = 0; j < size; j++) {
           let div = gridContainer.lastElementChild;
            div.remove();
        }
    }
}
deleteGrid(100);
// make a bunch of divs and give class fill <div class="fill"></div> like that
 