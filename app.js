// Mittagessen System - Haupt-JavaScript

console.log('app.js geladen');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM vollständig geladen');
    
    // Login-Formular Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout Button Handler
    const logoutBtns = document.querySelectorAll('#logoutBtn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', handleLogout);
    });
});

function handleLogin(e) {
    e.preventDefault();
    console.log('Login-Versuch');
    // Login-Logik hier
}

function handleLogout() {
    console.log('Logout');
    // Logout-Logik hier
}