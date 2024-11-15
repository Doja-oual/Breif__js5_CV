
// document.querySelector("#btn").addEventListener("click", function () {
//     document.querySelector("#corps").classList.add("active");
// });

// const form = document.getElementById("form");
// const prenom = document.getElementById("prenom");
// const nom = document.getElementById("nom");
// const address = document.getElementById("Adresse");
// const ville = document.getElementById("Ville");
// const Pays = document.getElementById("heading-contry");
// const codePostal = document.getElementById("cd-postal");
// const addressEmail = document.getElementById("email");
// const Tele = document.getElementById("heading_phone");
// const Employeur = document.getElementById("employeur");
// const initPost = document.getElementById("intit-post");
// const Etat = document.getElementById("Etat");
// const DateDebutMonth = document.getElementById("experience_end_month");
// const DateDebutYear = document.getElementById("experience_start_year");
// const NomEcole = document.getElementById("nom-ecole");
// const Diplome = document.getElementById("edu-degreelist");
// const DomainEtude = document.getElementById("Domaine-etudey");
// const competence = document.getElementById("competence");
// const Niveau = document.getElementById("Niveau");
// const Francais = document.getElementById("french");
// const Anglais = document.getElementById("english");
// const Espagnol = document.getElementById("spanish");

// function resetErrors() {
//     const errors = document.querySelectorAll(".error");
//     errors.forEach(error => error.remove());
// }

// function showError(element, message) {
//     const errorMessage = document.createElement("div");
//     errorMessage.className = "error";
//     errorMessage.style.color = "red";
//     errorMessage.textContent = message;
//     element.parentNode.appendChild(errorMessage);
// }

// function validation() {
//     let isValide = true;
//     resetErrors();

//     if (nom.value.trim() === "") {
//         showError(nom, "Nom is required.");
//         isValide = false;
//     } else {
//         const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
//         if (!regex.test(nom.value.trim())) {
//             showError(nom, "Nom must only contain letters and spaces.");
//             isValide = false;
//         }
//     }

//     if (prenom.value.trim() === "") {
//         showError(prenom, "Prénom is required.");
//         isValide = false;
//     } else {
//         const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,30}$/;
//         if (!regex.test(prenom.value.trim())) {
//             showError(prenom, "Prénom must only contain letters and spaces.");
//             isValide = false;
//         }
//     }

//     if (address.value.trim() === "") {
//         showError(address, "Adresse is required.");
//         isValide = false;
//     }

//     if (ville.value.trim() === "") {
//         showError(ville, "Ville is required.");
//         isValide = false;
//     }

//     if (Pays.value.trim() === "") {
//         showError(Pays, "Pays is required.");
//         isValide = false;
//     }

//     if (codePostal.value.trim() === "") {
//         showError(codePostal, "Code Postal is required.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9]{5,6}$/;
//         if (!regex.test(codePostal.value.trim())) {
//             showError(codePostal, "Code Postal must be a valid number.");
//             isValide = false;
//         }
//     }

//     if (addressEmail.value.trim() === "") {
//         showError(addressEmail, "Email is required.");
//         isValide = false;
//     } else {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!regex.test(addressEmail.value.trim())) {
//             showError(addressEmail, "Please enter a valid email address.");
//             isValide = false;
//         }
//     }

//     if (Tele.value.trim() === "") {
//         showError(Tele, "Phone number is required.");
//         isValide = false;
//     } else {
//         const regex = /^[0-9\s\+\-()]{10,15}$/;
//         if (!regex.test(Tele.value.trim())) {
//             showError(Tele, "Please enter a valid phone number.");
//             isValide = false;
//         }
//     }

//     if (Employeur.value.trim() === "") {
//         showError(Employeur, "Employer name is required.");
//         isValide = false;
//     }

//     if (initPost.value.trim() === "") {
//         showError(initPost, "Job title is required.");
//         isValide = false;
//     }

//     if (DateDebutMonth.value.trim() === "" || DateDebutYear.value.trim() === "") {
//         showError(DateDebutMonth, "Experience start month and year are required.");
//         isValide = false;
//     }

//     if (NomEcole.value.trim() === "") {
//         showError(NomEcole, "School name is required.");
//         isValide = false;
//     }

//     if (Diplome.value.trim() === "") {
//         showError(Diplome, "Degree is required.");
//         isValide = false;
//     }

//     if (DomainEtude.value.trim() === "") {
//         showError(DomainEtude, "Field of study is required.");
//         isValide = false;
//     }

//     if (competence.value.trim() === "") {
//         showError(competence, "Skills are required.");
//         isValide = false;
//     }

//     if (!Francais.checked && !Anglais.checked && !Espagnol.checked) {
//         showError(Francais, "At least one language must be selected.");
//         isValide = false;
//     }

//     if (Niveau.value.trim() === "") {
//         showError(Niveau, "Niveau is required.");
//         isValide = false;
//     }

//     return isValide;
// }
//FUNCTION DE DOWNLOADPDF------------------------------------------------------------------------
// function downloadPDF(){
const btndwlond = document.querySelector("#download__pdf");
const resume = document.querySelector("#preview-section");
  btndwlond.addEventListener("click", async function () {

    const filename = "my-cv.pdf";
  
    const options = {
      margin: 0,
      filename: filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    try {
      await html2pdf().set(options).from(resume).save();
    } catch (error) {
      console.error("false:", error.message);
    }
  });
// FUNCTION STEPEER--------------------------//

 const steps =document.querySelectorAll('.stepper .step');
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

     
      }  else{
        step.classList.remove('text-blue-500','font-bold');
        step.classList.add('text-gray-500')
        form_steps[i].classList.add('hidden');

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


// // ----------------------------- Function DYnamique form------------------------///

function ajouteSection(type){
    let parent;
    let sections;
     
    if(type==="experience"){
        parent=document.getElementById("experience-parent");
        sections=document.getElementById("experience-section");
        let newsections=sections.cloneNode(true);
    newsections.removeAttribute("id");
    sections.appendChild(newsections);
    }
    else if(type==="etude"){
        parent=document.getElementById("etudes-parent");
        sections=document.getElementById("etude-section");
        let newsections=sections.cloneNode(true);
        newsections.removeAttribute("id");
        sections.appendChild(newsections);
        }
    else if(type==="competence"){
        parent=document.getElementById("competence-parent");
        sections=document.getElementById("competence-section");
        let newsections=sections.cloneNode(true);
        newsections.removeAttribute("id");
        sections.appendChild(newsections);
        }
    }
   


    




document.getElementById("add-competence").addEventListener('click', function(){
    ajouteSection("competence");
});
document.getElementById("add-etude").addEventListener('click', function(){
    ajouteSection("etude");
});
document.getElementById("add-experience").addEventListener('click', function(){
    ajouteSection("experience");
});



let resumeData = []
//Recuperation de donne -----------------------------//
function getFormValues() {
  const infoPersonnel = {
    prenom: document.getElementById("prenom").value,
    nom: document.getElementById("nom").value,
    adresse: document.getElementById("Adresse").value,
    ville: document.getElementById("Ville").value,
    pays: document.getElementById("heading-contry").value,
    postalCode: document.getElementById("cd-postal").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("heading_phone").value,
  };

  const experiences = Array.from(document.querySelectorAll(".experience-groups")).map((exper) => ({
    employer: exper.querySelector("#employeur").value,
    intitPost: exper.querySelector("#intit-post").value,
    ville: exper.querySelector("#Ville").value,
    Etat: exper.querySelector("#Etat").value,
    startDateMonth: exper.querySelector("#experience_end_month").value,
    startDateYear: exper.querySelector("#experience_start_year").value,
    endDateMonth: exper.querySelector("#experience_end_month").value,
    endDateYear: exper.querySelector("#experience_end_year").value,
  }));

  const etudes = Array.from(document.querySelectorAll(".etude-groups")).map((etude) => ({
    schoolName: etude.querySelector("#nom-ecole").value,
    ville: etude.querySelector("#Ville").value,
    Etat: etude.querySelector("#Etat").value,
    degree: etude.querySelector("#edu-degreelist").value,
    fieldOfStudy: etude.querySelector("#Domaine-etudey").value,
    graduationDate: `${etude.querySelector("#experience_end_month").value} ${etude.querySelector("#experience_start_year").value}`,
  }));

  const competences = Array.from(document.querySelectorAll(".competence-groups")).map((comp) => ({
    competenceName: comp.querySelector("#competence").value,
    competenceLevel: comp.querySelector("#Niveau").value,
  }));

  const languages = {
    french: document.getElementById("french").value,
    english: document.getElementById("english").value,
    spanish: document.getElementById("spanish").value,
  };

  resumeData.push(infoPersonnel, experiences, etudes, competences, languages)
  
}

const form = document.querySelector("#form");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    // document.querySelector(".toggle-section").classList.remove("hidden");
     getFormValues()
     
     affichage()
     console.log(resumeData)
})


 // CV---------------

const affichage = () => {
  const [infoPersonnel, experiences, etudes, competences, languages] = resumeData;

  document.querySelector("#preview-section").innerHTML = `
    <div class="max-w-4xl mx-auto my-8 bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Header -->
      <div class="bg-[#820E65] text-white py-6 px-8">
        <h1 class="text-3xl font-bold">${infoPersonnel.prenom} ${infoPersonnel.nom}</h1>
        <p class="text-lg">${infoPersonnel.adresse}, ${infoPersonnel.ville}, ${infoPersonnel.pays}</p>
        <p class="text-sm mt-2">${infoPersonnel.email} | ${infoPersonnel.phone}</p>
      </div>

      <!-- About Section -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">À Propos</h2>
        <p class="text-gray-600">Résumé ou description à ajouter ici.</p>
      </div>

      <!-- Experience Section -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Expérience Professionnelle</h2>
        ${experiences.map(exp => `
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800">${exp.intitPost}</h3>
            <p class="text-sm text-gray-500">${exp.employer}, ${exp.ville}, ${exp.Etat} | ${exp.startDateMonth}/${exp.startDateYear} - ${exp.endDateMonth}/${exp.endDateYear}</p>
            <ul class="list-disc list-inside text-gray-600 mt-2">
              <li>Tâche ou responsabilité 1</li>
              <li>Tâche ou responsabilité 2</li>
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Education Section -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Éducation</h2>
        ${etudes.map(edu => `
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800">${edu.degree} - ${edu.fieldOfStudy}</h3>
            <p class="text-sm text-gray-500">${edu.schoolName}, ${edu.ville}, ${edu.Etat} | Diplômé en ${edu.graduationDate}</p>
          </div>
        `).join('')}
      </div>

      <!-- Skills Section -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Compétences</h2>
        <div class="flex flex-wrap gap-2">
          ${competences.map(comp => `
            <span class="bg-green-200 text-green-700 px-4 py-2 rounded-full text-sm">${comp.competenceName} (${comp.competenceLevel})</span>
          `).join('')}
        </div>
      </div>

      <!-- Languages Section -->
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Langues</h2>
        <ul class="text-gray-600">
          <li>Français : ${languages.french}</li>
          <li>Anglais : ${languages.english}</li>
          <li>Espagnol : ${languages.spanish}</li>
        </ul>
      </div>
    </div>
  `;
};


 



  








 








 




    




    










