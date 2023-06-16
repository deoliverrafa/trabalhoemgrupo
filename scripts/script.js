const button_bars = document.querySelector('.button-bars .material-icons')
const hamburger = document.querySelector('.fa-solid.fa-bars')
const x_mark = document.querySelector('.fa-solid.fa-xmark')
const nav_bar = document.querySelector('.nav-bar')
const slides = document.querySelectorAll('#slide')
const first_slide = document.querySelector('.first-slide-box');
const second_slide = document.querySelector('.second-slide-box');
const third_slide = document.querySelector('.third-slide-box');
const fourth_slide = document.querySelector('.fourth-slide-box');
const bolinha1 = document.querySelector('.bolinha1')
const bolinha2 = document.querySelector('.bolinha2')
const bolinha3 = document.querySelector('.bolinha3')
const bolinha4 = document.querySelector('.bolinha4')

let contador = 0;
let contadorBolinha = 0;
let interval = 3000;

actualSlide();
passSlides();

function passSlides(){

    if(contador === 1){
        first_slide.classList.remove('active');
        second_slide.classList.add('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.remove('active');
        contador++;
    } else{

    if(contador === 2){
        first_slide.classList.remove('active');
        second_slide.classList.remove('active');
        third_slide.classList.add('active');
        fourth_slide.classList.remove('active');
        contador++;
    } else{

    if(contador === 3){
        first_slide.classList.remove('active');
        second_slide.classList.remove('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.add('active');
        contador++;
    } else{
        contador = 0;

        first_slide.classList.add('active');
        second_slide.classList.remove('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.remove('active');
    }
    if (contador == 0) {
        contador++;
    }

}
}
}

function actualSlide(){
    
    if (contadorBolinha == 1) {
        bolinha1.classList.remove('active');
        bolinha2.classList.add('active');
        bolinha3.classList.remove('active');
        bolinha4.classList.remove('active');
        contadorBolinha++;
    } else{

    if (contadorBolinha == 2) {
        bolinha1.classList.remove('active');
        bolinha2.classList.remove('active');
        bolinha3.classList.add('active');
        bolinha4.classList.remove('active');
        contadorBolinha++;
    } else {
    
    if (contadorBolinha == 3) {
        bolinha1.classList.remove('active');
        bolinha2.classList.remove('active');
        bolinha3.classList.remove('active');
        bolinha4.classList.add('active');
        contadorBolinha++;
    } else{
            contadorBolinha = 0;

            bolinha1.classList.add('active');
            bolinha2.classList.remove('active');
            bolinha3.classList.remove('active');
            bolinha4.classList.remove('active');
    }

    if (contadorBolinha == 0) {
        contadorBolinha++;
    }
}
}
}

bolinha1.onclick = function (){

        first_slide.classList.remove('active');
        second_slide.classList.add('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.remove('active');
        contador = 0;
        contadorBolinha = 0;
}

bolinha2.onclick = function (){

        first_slide.classList.remove('active');
        second_slide.classList.remove('active');
        third_slide.classList.add('active');
        fourth_slide.classList.remove('active');
        contador = 1;
        contadorBolinha = 1;
}


bolinha3.onclick = function (){

        first_slide.classList.add('active');
        second_slide.classList.remove('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.remove('active');
        contador = 2;
        contadorBolinha = 2;
}


bolinha4.onclick = function (){

        first_slide.classList.add('active');
        second_slide.classList.remove('active');
        third_slide.classList.remove('active');
        fourth_slide.classList.remove('active');
        contador = 3;
        contadorBolinha = 3;
}

hamburger.onclick = function(){
    nav_bar.classList.toggle('active');    
    x_mark.classList.add('active');
    hamburger.classList.add('none')
}

x_mark.onclick = function(){
    nav_bar.classList.toggle('active');    
    x_mark.classList.remove('active');
    hamburger.classList.remove('none')
}


setInterval(() => {
    actualSlide();
    passSlides();
}, interval);