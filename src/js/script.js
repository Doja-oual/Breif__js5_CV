
document.querySelector("#btn").addEventListener("click", function () {
    document.querySelector("#corps").classList.add("active");
});

const form = document.getElementById("form");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const address = document.getElementById("Adresse");
const ville = document.getElementById("Ville");
const Pays = document.getElementById("heading-contry");
const codePostal = document.getElementById("cd-postal");
const addressEmail = document.getElementById("email");
const Tele = document.getElementById("heading_phone");
const Employeur = document.getElementById("employeur");
const initPost = document.getElementById("intit-post");
const Etat = document.getElementById("Etat");
const DateDebutMonth = document.getElementById("experience_end_month");
const DateDebutYear = document.getElementById("experience_start_year");
const NomEcole = document.getElementById("nom-ecole");
const Diplome = document.getElementById("edu-degreelist");
const DomainEtude = document.getElementById("Domaine-etudey");
const competence = document.getElementById("competence");
const Niveau = document.getElementById("Niveau");
const Francais = document.getElementById("french");
const Anglais = document.getElementById("english");
const Espagnol = document.getElementById("spanish");

function resetErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.remove());
}

function showError(element, message) {
    const errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    element.parentNode.appendChild(errorMessage);
}

function validation() {
    let isValide = true;
    resetErrors();

    if (nom.value.trim() === "") {
        showError(nom, "Nom is required.");
        isValide = false;
    } else {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
        if (!regex.test(nom.value.trim())) {
            showError(nom, "Nom must only contain letters and spaces.");
            isValide = false;
        }
    }

    if (prenom.value.trim() === "") {
        showError(prenom, "Prénom is required.");
        isValide = false;
    } else {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
        if (!regex.test(prenom.value.trim())) {
            showError(prenom, "Prénom must only contain letters and spaces.");
            isValide = false;
        }
    }

    if (address.value.trim() === "") {
        showError(address, "Adresse is required.");
        isValide = false;
    }

    if (ville.value.trim() === "") {
        showError(ville, "Ville is required.");
        isValide = false;
    }

    if (Pays.value.trim() === "") {
        showError(Pays, "Pays is required.");
        isValide = false;
    }

    if (codePostal.value.trim() === "") {
        showError(codePostal, "Code Postal is required.");
        isValide = false;
    } else {
        const regex = /^[0-9]{5,6}$/;
        if (!regex.test(codePostal.value.trim())) {
            showError(codePostal, "Code Postal must be a valid number.");
            isValide = false;
        }
    }

    if (addressEmail.value.trim() === "") {
        showError(addressEmail, "Email is required.");
        isValide = false;
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(addressEmail.value.trim())) {
            showError(addressEmail, "Please enter a valid email address.");
            isValide = false;
        }
    }

    if (Tele.value.trim() === "") {
        showError(Tele, "Phone number is required.");
        isValide = false;
    } else {
        const regex = /^[0-9\s\+\-()]{10,15}$/;
        if (!regex.test(Tele.value.trim())) {
            showError(Tele, "Please enter a valid phone number.");
            isValide = false;
        }
    }

    if (Employeur.value.trim() === "") {
        showError(Employeur, "Employer name is required.");
        isValide = false;
    }

    if (initPost.value.trim() === "") {
        showError(initPost, "Job title is required.");
        isValide = false;
    }

    if (DateDebutMonth.value.trim() === "" || DateDebutYear.value.trim() === "") {
        showError(DateDebutMonth, "Experience start month and year are required.");
        isValide = false;
    }

    if (NomEcole.value.trim() === "") {
        showError(NomEcole, "School name is required.");
        isValide = false;
    }

    if (Diplome.value.trim() === "") {
        showError(Diplome, "Degree is required.");
        isValide = false;
    }

    if (DomainEtude.value.trim() === "") {
        showError(DomainEtude, "Field of study is required.");
        isValide = false;
    }

    if (competence.value.trim() === "") {
        showError(competence, "Skills are required.");
        isValide = false;
    }

    if (!Francais.checked && !Anglais.checked && !Espagnol.checked) {
        showError(Francais, "At least one language must be selected.");
        isValide = false;
    }

    if (Niveau.value.trim() === "") {
        showError(Niveau, "Niveau is required.");
        isValide = false;
    }

    return isValide;
}
//
// function downloadPDF(){
//     const {jsPDF}= window.jsPDF;
//     const doc = new jsPDF();
//     const 

//     const input1 = document.getElementById('input1').value; 
//     const input2 = document.getElementById('input2').value;
//     const input3= document.getElementById('input3').value;
//     const input4 = document.getElementById('input4').value;

// doc .setFont('arial');
// doc.setFontSize(18);
// doc.settextColor(200,50,80);
// doc.settext('gggggggggggg')



// doc.text(`input:${input1}`,80,60);




// doc.save('Test Forma');




// }
///IMAGE666666666666666
// FUNCTION STEPEER--------------------------//



 const steps =document.querySelectorAll('stepper .step');
 const form_steps =document.querySelectorAll('.form-steps .form-step');

 let active=1;

function etapSuivant(){
    
    if(active<steps.length){
        active++;
        updateProgress();
        }
   
 }

 function etapPrecedente(){
    if(active>1){
        active--;

        updateProgress();
    }
    

 }

 const updateProgress=()=>{
    
    steps.forEach((step,i)=>{
      if(i==(active-1)){
        step.classList.add('text-blue-500','font-bold');
        step.classList.remove('text-gray-500')
        form_steps[i].classList.remove('hidden');
        form_steps[i].classList.add('block');

     
      }  else{
        step.classList.remove('text-blue-500','font-bold');
        step.classList.add('text-gray-500')
        form_steps[i].classList.add('hidden');
        form_steps[i].classList.remove('block');

      }
    });
};
form_steps.forEach((step,i) => {
    const nextButton =step.querySelector('.btn-next');
    const prevButton =step.querySelector('.btn-prev');

    if (nextButton) {
        nextButton.addEventListener('click', (e)=>{
            e.preventDefault();
            etapSuivant();
        });
       
      }
      if (prevButton) {
        prevButton.addEventListener('click', (e)=>{
            e.preventDefault();
            etapPrecedente();
        });
      }
});



   



   




 








 




    




    










