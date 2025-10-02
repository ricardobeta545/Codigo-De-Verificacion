document.addEventListener("DOMContentLoaded", () => {
  const inputNombre = document.getElementById("nombre");
  const errorNombre = document.getElementById("errorNombre");
  const inputCantidad = document.getElementById("cantidad");
  const errorCantidad = document.getElementById("errorCantidad");
  const btnGuardar = document.getElementById("btnGuardar");

  // Validación en vivo para el nombre
  inputNombre.addEventListener("input", () => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
    if (!regex.test(inputNombre.value)) {
      errorNombre.textContent = "Solo se permiten letras en el nombre.";
      inputNombre.value = inputNombre.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    } else {
      errorNombre.textContent = "";
    }
  });

  // Validación en vivo para la cantidad
  inputCantidad.addEventListener("input", () => {
    if (isNaN(inputCantidad.value) || Number(inputCantidad.value) <= 0) {
      errorCantidad.textContent = "Ingrese una cantidad válida mayor a 0.";
    } else {
      errorCantidad.textContent = "";
    }
  });

  // Validación al guardar
  btnGuardar.addEventListener("click", () => {
    let valido = true;

    // Validar nombre
    if (inputNombre.value.trim() === "") {
      errorNombre.textContent = "El nombre no puede estar vacío.";
      valido = false;
    }

    // Validar cantidad
    if (inputCantidad.value.trim() === "" || isNaN(inputCantidad.value) || Number(inputCantidad.value) <= 0) {
      errorCantidad.textContent = "Ingrese una cantidad válida mayor a 0.";
      valido = false;
    }

    if (valido) {
      // Guardar en localStorage
      localStorage.setItem("nombreUsuario", inputNombre.value.trim());
      localStorage.setItem("cantidadDinero", inputCantidad.value);

      // Redirigir
      window.location.href = "ingresar_cod.html";
    }
  });
});
