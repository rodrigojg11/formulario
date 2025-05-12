const form = document.getElementById("registerForm");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");

const validateEmail = () => {
  const valid = email.value.includes('@', '.')
  emailError.style.display = valid ? 'none' : "false";
  return valid;
};

const validatePassword = () => {
  const valid = password.value.length >= 8;
  passwordError.style.display = valid ? 'none' : "false";
  return valid;
};

email.addEventListener('input', () =>  validateEmail(email.value) );
password.addEventListener('input', () =>  validatePassword(password.value) );

form.addEventListener('submit', (e) => {
  if (!validateEmail() || !validatePassword()) {
      e.preventDefault();
  } else {
      alert('Formulario enviado correctamente');
  }
});
