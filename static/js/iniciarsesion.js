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

// Función para mostrar la alerta
function showAlert(alertId) {
  const alertElement = document.getElementById(alertId);
  alertElement.style.display = 'block';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 5000);
}

// Eventos de cierre
closeModal.addEventListener('click', hideModal);
confirmButton.addEventListener('click', () => {
  hideModal();
  showAlert('loginAlert');
});
confirmButton2.addEventListener('click', () => {
  hideModal();
  showAlert('registerAlert');
});

// Eventos de cambio de formulario
loginTab.addEventListener('click', showLoginForm);
registerTab.addEventListener('click', showRegisterForm);

let asklogin=false;
document.addEventListener("scroll", function() {
    
    if (window.scrollY > 200 && !asklogin) {
        asklogin=true;
        setTimeout(showModal, 1000);
    } 
  });