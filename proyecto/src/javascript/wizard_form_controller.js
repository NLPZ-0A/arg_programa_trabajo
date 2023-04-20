
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const currentStep = document.querySelector(".form-step-active");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

const requiredFields = currentStep.querySelectorAll('[required]');

console.log(requiredFields);

nextBtns.forEach((btn) => {
 

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if(validateInput()){
          formStepsNum++;
          updateFormSteps();
          updateProgressbar();
        }
      });
   
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

const updateFormSteps =()=> {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
};

const updateProgressbar =()=> {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
};


function validateInput(){

      // Validar si los campos requeridos tienen algún valor
    let isValid = true;

    requiredFields.forEach((field) => {
      console.log(field);
      console.log(field.value);
      if (!field.value) {
        isValid = false;
      }
    });

    if (!isValid) {
      return false;
    }

    return true;

};

 