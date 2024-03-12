const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal-1");

function openModal() {
  modal.classList.add("opacity-100");
  modal.classList.remove("opacity-0");
  modal.classList.remove("pointer-events-none");
}

function closeModal() {
  console.log('close')
  modal.classList.add("opacity-0");
  modal.classList.remove("opacity-100");
  modal.classList.add("pointer-events-none");
}

closeModalButton.addEventListener("click", closeModal);