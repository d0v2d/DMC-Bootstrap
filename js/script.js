
// PARA INICIALIZAR LOS "TOOLTIPS" QUE USO EN ALGUNOS BOTONES ( COMO EL BOTON "CONTINUAR COMPRANDO" O "PAGAR" EN LA PAGINA CARRITO.HTML; DEJANDO EL MOUSE ENCIMA PODRÁS VERLO)

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))