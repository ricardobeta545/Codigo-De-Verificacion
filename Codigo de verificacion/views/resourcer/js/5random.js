function generarCodigo() {
    let codigo = '';
    for (let i = 0; i < 5; i++) {
        codigo += Math.floor(Math.random() * 10);
    }
    document.getElementById('codigo').textContent = codigo;

    // 🔹 Guardar en localStorage
    localStorage.setItem("codigoVerificacion", codigo);
}

// Llamar cuando cargue la página
generarCodigo();