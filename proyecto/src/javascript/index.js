const popupWizard = document.querySelector('.form-popup');
const overlay = document.querySelector('.overlay');

$('.button__view_more').on("click", function(){
    popupWizard.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
});