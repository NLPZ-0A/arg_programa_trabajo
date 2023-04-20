const buttonGenerate = document.querySelector('.btn.btn-generate');
const form_general = document.querySelector('.form-step-general');
let dataGenerate = {};


buttonGenerate.addEventListener('click', (e) =>{
    e.preventDefault();
    generateInfo();


   
} );

const generateInfo = ()=> {

    dataGenerate = {
        nombre : $('#nombre').val(),
        apellido : $('#apellido').val(),
        telefono : $('#telefono').val(),
        email : $('#email').val(),
        fdn : $('#fdn').val(),
        DNI : $('#DNI').val(),
        direccion : $('#direccion').val(),
        localidad : $('#location').val(),
        codPostal : $('#codigoPostal').val()
    }

    if(localStorage.getItem('personal_data')){
        localStorage.removeItem('personal_data')
    }

    localStorage.setItem('personal_data', JSON.stringify(dataGenerate));

    form_general.reset();
    popupWizard.classList.toggle("hidden");

    window.open('./views/factura.html');
}