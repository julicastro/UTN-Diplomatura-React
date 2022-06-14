

function cambiarMensaje() {
    let distancia = document.getElementById("distancia").value;
    let mensaje;

    if (distancia > 0 && distancia < 1000) {
        mensaje = "a pie";
    } else if (distancia >= 1000 && distancia < 10000) {
        mensaje = "en bicicleta";
    } else if (distancia >= 10000 && distancia < 30000) {
        mensaje = "en colectivo";
    } else if (distancia >= 30000 && distancia < 100000) {
        mensaje = "en auto";
    } else if (distancia >= 100000) {
        mensaje = "en avion";
    } else {
        mensaje = "numero invalido";
    }
    document.getElementById("metros").innerHTML = ("Distancia: " + distancia + "mts");
    document.getElementById("mensaje").innerHTML = ("Conviene viajar " + mensaje);
    console.log("funcion ejecutada");
}
