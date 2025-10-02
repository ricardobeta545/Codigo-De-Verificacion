document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("validarBtn");
  const input = document.getElementById("codigoInput");
  const mensajeError = document.getElementById("mensajeError");

  btn.addEventListener("click", () => {
    const codigoGuardado = localStorage.getItem("codigoVerificacion"); // recuperamos el generado
    const codigoIngresado = input.value.trim();

    if (codigoIngresado === "") {
      mensajeError.textContent = "Por favor, ingresa el código.";
    } else if (codigoIngresado === codigoGuardado) {
      mensajeError.textContent = "";
    
      window.location.href = "pagina_final.html";
    } else {
      mensajeError.textContent = "Código incorrecto, intenta de nuevo.";
    }
  });
});
