export const openModal = (modalToOpen) =>{
 
  var Mymodal = new window.bootstrap.Modal(document.getElementById(modalToOpen));
  Mymodal.show()

}
