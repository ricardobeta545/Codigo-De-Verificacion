document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("nombreUsuario");
  const cantidad = localStorage.getItem("cantidadDinero");

  const bienvenido = document.getElementById("bienvenido");
  const mensajeDinero = document.getElementById("mensajeDinero");

  bienvenido.textContent = `Bienvenido, ${nombre}`;
  mensajeDinero.textContent = `Tu cantidad de dinero es: $${cantidad}`;
});
