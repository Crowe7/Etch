let slider = document.querySelector('#myRange');
let output = document.querySelectorAll('.gridAmount');
let gridContainer = document.querySelector('#gridContainer');
let grid = document.querySelector(".grid");
let gridCss = 0;
let onButton = 1;
let gridDivs = gridContainer.children;
initPage();
 function initPage() {
    gridCss = "grid-template:repeat(" + slider.value + ", 1fr) / repeat(" + slider.value + ", 1fr);"
    for (i=0; i < output.length; i++) {
        output[i].textContent = slider.value;
    }
    grid.style.cssText = gridCss;
    makeGridDiv(slider.value);
    addEventToDiv();
}

function addEventToDiv() {
    for(i = 0; i < gridDivs.length; i++) {
        gridDivs[i].addEventListener('mouseenter', function (e) {
            if(onButton === 1) {
                e.target.classList.add('fill');
            }
            else if(onButton === 2) {
                e.target.classList.remove('fill');
                e.target.style.cssText = pastelColors();
            }
            else if(onButton === 3) {
                e.target.classList.remove('fill');
                e.target.style.cssText = ""
            }
        });
    }
}


slider.oninput = function() {
    for (i=0; i < output.length; i++) {
        output[i].textContent = this.value; 
    }
}
slider.onchange = function() {
    makeGrid(slider.value, slider.value);
    addEventToDiv();
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



// allows buttons to stay on when clicked/ and removes any other button thats active
 let buttonParent = document.querySelector('#buttons');
 buttonParent.addEventListener('click', function(e) {
     if(e.target && e.target.id === 'regBtn') {
        removeOtherButtonClasses();
        e.target.classList.add('regClass', 'active');
        onButton = 1;
     }
     if(e.target && e.target.id === 'rainbowBtn') {
        removeOtherButtonClasses();
        e.target.classList.add('rainbowClass', 'active');
        onButton = 2;
     }
     if( e.target && e.target.id === 'eraseBtn') {
        removeOtherButtonClasses();
        e.target.classList.add('eraseClass', 'active');
        onButton = 3;
     }
      if(e.target && e.target.id === 'clearBtn') {
        removeOtherButtonClasses();
        makeGrid(slider.value, slider.value);
        addEventToDiv();
     }
 });

function removeOtherButtonClasses() {
    let currentButton = document.getElementsByTagName('button');
     for (i = 0; i < currentButton.length; i++) {
        if(currentButton[i].classList.contains('active')) {
            currentButton[i].className = '';
        }
        else if(currentButton[i].classList.contains('regClass')) {
            currentButton[i].className = '';
        }
     }
}
//got this from stackoverflow. generating 100% random colors was much worse looking
function pastelColors(){
    var r = (Math.round(Math.random()* 127) + 127).toString(16);
    var g = (Math.round(Math.random()* 127) + 127).toString(16);
    var b = (Math.round(Math.random()* 127) + 127).toString(16);
    return 'background-color:' + '#' + r + g + b + ';';
}