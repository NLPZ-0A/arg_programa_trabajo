/*------------------------------button y cards--------------------------------------------------*/ 
const buttonLeft = document.querySelector('.button__left-carrousel');
const buttonRight = document.querySelector('.button__right-carrousel');
const carrousel = document.querySelector('.carousel__cards');
const cards = document.querySelectorAll('.carousel__cards .card');
const searchButton = document.querySelector('.button_search');

/*----------------------------------properties card----------------------------------------------*/
const title_propertie = document.querySelector('#title');
const description_car = document.querySelector('#descripcion');

const autonomia = document.querySelector('#autonomia');
const velocidad = document.querySelector('#velocidad');
const aceleracion = document.querySelector('#aceleracion');
const potencia = document.querySelector('#potencia');

const imageCar = document.querySelector('#car_image')
const imageInterior = document.querySelector('#interior_image')
/*-------------------------------------AUX-----------------------------------------------------*/
let carsInputSelect = document.querySelector('#cars__input');
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

searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let brand = carsInputSelect.value;
    let cars = bbdd[0].vehiculos;

    let carsFilteredByBrand = selectCarsByBrand(cars, brand);
    console.log(carsFilteredByBrand);
    setCarsOnCarrousel(carsFilteredByBrand);
    
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
    let id_card = $(this).data('id');

    if(localStorage.getItem('id_car')){
       localStorage.removeItem('id_car')
    }

    let id_memory = localStorage.setItem('id_car', id_card);
   
    //quitamos o ponemos la clase selected a la card que toquemos
    this.classList.toggle('selected');
    
    //seleccionamos todas las cartas menos la que contiene a this en este entorno de función
    $('.card').not(this).removeClass('selected');

    const getCar = searchCardById(id_card);
    let current_car = getCar[0]; 
    modifyProperties(current_car);
    console.log(getCar);
    
});

const addBrandToSelect = () =>{
   // let bbdd_cars = JSON.stringify(bbdd);
   let marcas = [];
   let vehiculos = bbdd[0].vehiculos;
   console.log(vehiculos);

   vehiculos.forEach((vehiculo, index) => {
      if(!marcas.includes(vehiculo.marca)){
        marcas.push(vehiculo.marca);
        
        let option = document.createElement('option');
        option.value = vehiculo.marca;
        option.style = "color: black";
        option.text = vehiculo.marca;
        carsInputSelect.appendChild(option);

      }
    });

};

const priceQuality = (cars) =>{
  let priceDefault = 100000;
  return cars.filter(car => car.precio <= priceDefault);
};

const selectCarsByBrand = (cars, brand) =>{
    return cars.filter(car => car.marca === brand);
};

const searchCardById = (id_card) =>{
  let cars = bbdd[0].vehiculos;
  return cars.filter( car => car.id === id_card);
};

const modifyProperties = (car) =>{

  /*--------------------------properties modified----------------------------------- */
    title_propertie.innerHTML = car.modelo;
    description_car.innerHTML = car.descripcion;

    autonomia.innerHTML = car.autonomia + ' km';
    velocidad.innerHTML = car.velocidad + ' km/h';
    aceleracion.innerHTML = car.aceleracion + 's';
    potencia.innerHTML = car.potencia + ' hp';


    /*--------------------------image modified----------------------------------- */
    imageCar.innerHTML = ``;
    imageInterior.innerHTML = ``;

    let newImageCar = document.createElement('img');
    newImageCar.src = car.images[0].img1;

    let newImageInteriorCar = document.createElement('img');
    newImageInteriorCar.src = car.images[0].img2;

    imageCar.appendChild(newImageCar);
    imageInterior.appendChild(newImageInteriorCar);

};

const setCarsOnCarrousel = (cars) => {

    carrousel.innerHTML = ``;
    cars.forEach(car => {
      let newCard = document.createElement('div');
      newCard.className = 'card';
      newCard.setAttribute('data-id', car.id);

      newCard.innerHTML = `<img src="${car.sideImage}" alt="imagen-coche">`;
      carrousel.appendChild(newCard);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    let cars = bbdd[0].vehiculos;

    addBrandToSelect();

    let carsDefault = priceQuality(cars);
    console.log(carsDefault);
    setCarsOnCarrousel(carsDefault);
});



