let tiempo = 10;

function actualizarContador() {
    document.getElementById('contador').textContent = tiempo;
    tiempo--;

    if (tiempo < 0) {
        tiempo = 10;
        generarCodigo(); 
    }
}


generarCodigo();
setInterval(actualizarContador, 1000);