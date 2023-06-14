const button_bars = document.querySelector('.button-bars .material-icons')
const slides = document.querySelectorAll('#slide');
const first_slide = document.querySelector('.first-slide-box');
const second_slide = document.querySelector('.second-slide-box');
const third_slide = document.querySelector('.third-slide-box');
const fourth_slide = document.querySelector('.fourth-slide-box');
const bolinha1 = document.querySelector('.bolinha1')
const bolinha2 = document.querySelector('.bolinha2')
const bolinha3 = document.querySelector('.bolinha3')
const bolinha4 = document.querySelector('.bolinha4')

var contador = 0;
let contadorBolinha = 0;

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
    console.log("Im here");
    console.log("O contador: " + contador)
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

setInterval(() => {
    actualSlide();
    passSlides();
}, 3000);