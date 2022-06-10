const slideWrapper = document.querySelector('.slide-wrapper');
const listSlide = document.querySelector('.list-slide');
const sliderItems = document.querySelectorAll('.slide');
const dotItems = document.querySelectorAll('.dot');
const buttonNext = document.querySelector('.button-next');
const buttonPrev = document.querySelector('.button-prev');

const sliderLength = sliderItems.length;
const sliderItemWidth = sliderItems[0].offsetWidth;
const maxSize = sliderLength * sliderItemWidth + (sliderLength - 1) * 20 - listSlide.offsetWidth;

let positionX = 0;
let cnt = 0;

buttonNext.onclick = function(){
    positionX -=  sliderItemWidth * 1.6;
    positionX = Math.max(positionX, -maxSize);
    if(positionX == -maxSize) buttonNext.style.backgroundColor = '#333';
    else buttonNext.style.backgroundColor = '#fb6c27e6';
    if(positionX == 0) buttonPrev.style.backgroundColor = '#333';
    else buttonPrev.style.backgroundColor = '#fb6c27e6';
    listSlide.style.transform = `translateX(${positionX}px)`;

    if( positionX == -maxSize) cnt = 3;
    else cnt = -positionX / 1.6 / sliderItemWidth;
    cnt -= 0.5;
    cnt = parseInt(cnt) +1;
    [...dotItems].forEach(dot => dot.style.backgroundColor = '#000');
    [...dotItems].forEach(dot => dot.style.opacity = '.2');
    dotItems[cnt].style.backgroundColor = 'red';
    dotItems[cnt].style.opacity = '.8';
};
buttonPrev.onclick = function(){
    positionX +=  sliderItemWidth * 1.6;
    positionX = Math.min(positionX, 0);
    if(positionX + sliderItemWidth * 1.6 == -maxSize) buttonNext.style.backgroundColor = '#333';
    else buttonNext.style.backgroundColor = '#fb6c27e6';
    if(positionX == 0) buttonPrev.style.backgroundColor = '#333';
    else buttonPrev.style.backgroundColor = '#fb6c27e6';
    listSlide.style.transform = `translateX(${positionX}px)`;
    
    cnt = -positionX / 1.6 / sliderItemWidth;
    cnt -= 0.5;
    if(cnt < 0) cnt = -1;
    cnt = parseInt(cnt) +1;
    [...dotItems].forEach(dot => dot.style.backgroundColor = '#000');
    [...dotItems].forEach(dot => dot.style.opacity = '.2');
    dotItems[cnt].style.backgroundColor = 'red';
    dotItems[cnt].style.opacity = '.8';
};

[...dotItems].forEach(function(element, index){
    element.onclick = function(){
        positionX = Math.max(-sliderItemWidth * 1.6 * index, -maxSize);
        listSlide.style.transform = `translateX(${positionX}px)`;
        [...dotItems].forEach(dot => dot.style.backgroundColor = '#000');
        [...dotItems].forEach(dot => dot.style.opacity = '.2');
        element.style.backgroundColor = 'red';
        element.style.opacity = '.8';
        if(index == 0){
            buttonNext.style.backgroundColor = '#fb6c27e6';
            buttonPrev.style.backgroundColor = '#333';
        }
        else if(index == 3){
            buttonNext.style.backgroundColor = '#333';
            buttonPrev.style.backgroundColor = '#fb6c27e6';
        }
        else{
            buttonNext.style.backgroundColor = '#fb6c27e6';
            buttonPrev.style.backgroundColor = '#fb6c27e6';
        }
    }
});
