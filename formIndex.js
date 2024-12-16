"use strict";
function isValidName(name) {
    return typeof name === 'string' && name.trim().length > 0;
}
function isValidEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPassword(password) {
    return typeof password === 'string' && password.length >= 6;
}
function isValidAge(age) {
    return typeof age === 'number' && age >= 18;
}
// Validação do formulário
const form = document.getElementById("registrationForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Captura dos elementos do formulário
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const ageInput = parseInt(document.getElementById("age").value);
    // Elementos de erro
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const ageError = document.getElementById("ageError");
    const successMessage = document.getElementById("successMessage");
    // Limpar mensagens anteriores
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    ageError.textContent = "";
    successMessage.textContent = "";
    let isValid = true;
    if (!isValidName(nameInput)) {
        nameError.textContent = "Nome é obrigatório.";
        isValid = false;
    }
    if (!isValidEmail(emailInput)) {
        emailError.textContent = "Email inválido.";
        isValid = false;
    }
    if (!isValidPassword(passwordInput)) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
        isValid = false;
    }
    if (!isValidAge(ageInput)) {
        ageError.textContent = "A idade deve ser um número maior ou igual a 18.";
        isValid = false;
    }
    if (isValid) {
        successMessage.textContent = "Usuário registrado com sucesso!";
        form.reset();
    }
});
