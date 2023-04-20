
$( document ).ready(function() {
   
    const saveButton = document.querySelector('#save-as-pdf');

    let data = localStorage.getItem('personal_data');
    let personalData = JSON.parse(data);
    console.log(personalData);
    let idCurrentCar = localStorage.getItem('id_car');
    let currentCar = searchCardById(idCurrentCar)[0];
    
    const hoy = new Date();
    const anio = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();
    if (mes < 10) {
      mes = '0' + mes;
    }

    if (dia < 10) {
      dia = '0' + dia;
    }

    const fechaHoy = `${anio}/${mes}/${dia}`;

    let nameUser = `${personalData.nombre} ${personalData.apellido}`;
    let location = `${personalData.localidad} ${personalData.direccion} ${personalData.codPostal}`;
    let email = personalData.email;


    $('#nombrePersona').html(nameUser);
    $('#direccion').html(location);
    $('#email').html(email);

    let brand = currentCar.marca;
    let modelCar = currentCar.modelo;
    let price = `${currentCar.precio} U$D`;
    $('#marca').html(brand);
    $('#modelo').html(modelCar);
    $('#importe_parcial').html(price);
    $('#unit').html(price);
    $('#importe_total').html(price);

    $('#fecha_actual').html(fechaHoy);
    $('#fecha_vence').html(fechaHoy);


    saveButton.addEventListener('click', () => {
        window.print();
    });



    function searchCardById (id_card){
        let cars = bbdd[0].vehiculos;
        return cars.filter( car => car.id === id_card);
      };
});