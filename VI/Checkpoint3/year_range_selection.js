let sliderOne, sliderTwo, minGap, displayValOne, displayValTwo, finalValOne, finalValTwo;


function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    updateValue(); 
}

function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    updateValue(); 
}

function updateValue() {
    displayValOne.textContent = sliderOne.value; 
    displayValTwo.textContent = sliderTwo.value; 

    finalValOne = sliderOne.value;
    finalValTwo = sliderTwo.value;
    //console.log(finalValOne, finalValTwo)
    return [finalValOne,finalValTwo];
}


window.onload = init;
