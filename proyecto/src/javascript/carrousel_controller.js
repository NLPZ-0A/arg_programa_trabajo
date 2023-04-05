const buttonLeft = document.querySelector('.button__left-carrousel');
const buttonRight = document.querySelector('.button__right-carrousel');
const cards = document.querySelectorAll('.carousel__cards .card');
let currentPosition = 0;

buttonLeft.addEventListener('click', () => {
    //currentPosition -= 1;
    //setCurrentCard()
    $('.carousel__cards').animate({scrollLeft: '-=1000'}, 200);
    
});

buttonRight.addEventListener('click', () => {
    //currentPosition += 1;
    //setCurrentCard()
    $('.carousel__cards').animate({ scrollLeft: '+=1000'}, 200);
});

const setCurrentCard = () => {

  cards.forEach((card, index) => {
    if (index === currentPosition) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });

}


//usamos la delegación de eventos para evitar el binding de eventos para N numero de elementos
$('.carousel__cards').on('click', '.card', function() {
    console.log(this);

    //quitamos o ponemos la clase selected a la card que toquemos
    this.classList.toggle('selected');
    
     //seleccionamos todas las cartas menos la que contiene a this en este entorno de función
    $('.card').not(this).removeClass('selected');
    console.log('has clickeado la  tarjeta');
});
