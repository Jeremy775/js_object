// on instancie la classe modal-container 
const modalContainer = document.querySelector(".modal-container");
// on instancie les classes modal-trigger
const modalTriggers = document.querySelectorAll(".modal-trigger");

// on ajoute un event listener 'click' sur tous les triggers
modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    // on ajoute la classe 'active' a la classe modal-container
    modalContainer.classList.toggle("active")
}