// Slider 

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

let imageMax = document.querySelector('.div-12-max .img-12-max');

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;
//next.ontouchstart = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;
//prev.ontouchstart = prevFunction;

function nextFunction(event) {
    images[count].classList.remove('active-img');
    if (count + 1 == images.length) {
        count = 0;
    }
    else {
        count++;
    }
    images[count].classList.add('active-img');
    imageMax.src = images[count].src;
}

function prevFunction() {
    images[count].classList.remove('active-img');
    if (count == 0) {
        count = images.length - 1;
    }
    else {
        count--;
    }
    images[count].classList.add('active-img');
    imageMax.src = images[count].src;
}


// Modal

const show = function (state) {
    document.querySelector('.modal-form').style.display = state;
    document.querySelector('.modal-filter').style.display = state;
}

