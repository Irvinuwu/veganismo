document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales
    if (username === "veganismo" && password === "veganismo") {
        // Redirigir al usuario a la página de inicio después de un inicio de sesión exitoso
        window.location.href = "inicio.html";
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos.";
    }
});
