export default function modal (stateModal,setstateModal, modal) {
   
    stateModal ? openModal()
    : closeModal()

// Open modal
function openModal(){    
    modal.style.display = 'flex'; 
    setstateModal(false)   
  }
  
  // Close modal
  function closeModal(){
    modal.style.display = 'none';
    setstateModal(true) 
  }
  
  window.addEventListener('click', outsideClick);
  // Click outside and close
  function outsideClick(e){
    if(e.target === modal){
      modal.style.display = 'none';
      setstateModal(true) 
    }

}

}
