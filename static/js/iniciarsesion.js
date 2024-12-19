// Referencias a los elementos
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const confirmButton = document.getElementById('iniciarsesion');
const confirmButton2 = document.getElementById('registrarse');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Función para mostrar el modal
function showModal() {
  modal.classList.add('show');
}

// Función para ocultar el modal
function hideModal() {
  modal.classList.remove('show');
}

// Función para mostrar el formulario de inicio de sesión
function showLoginForm() {
  loginForm.classList.remove('d-none');
  registerForm.classList.add('d-none');
  loginTab.classList.add('active');
  registerTab.classList.remove('active');
}

// Función para mostrar el formulario de registro
function showRegisterForm() {
  loginForm.classList.add('d-none');
  registerForm.classList.remove('d-none');
  loginTab.classList.remove('active');
  registerTab.classList.add('active');
}

// Eventos de cierre
closeModal.addEventListener('click', hideModal);
confirmButton.addEventListener('click', hideModal);
confirmButton2.addEventListener('click', hideModal);

// Eventos de cambio de formulario
loginTab.addEventListener('click', showLoginForm);
registerTab.addEventListener('click', showRegisterForm);
/*
// Ejemplo: Mostrar el modal en un evento específico
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(showModal, 1000); // Mostrar el modal después de 1 segundo
});*/


let asklogin=false;
document.addEventListener("scroll", function() {
    
    if (window.scrollY > 200 && !asklogin) {
        asklogin=true;
        setTimeout(showModal, 1000);
    } 
  });