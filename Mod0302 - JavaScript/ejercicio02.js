function obtenerMaximo() {
    let uno = document.getElementById("num1").value;
    let dos = document.getElementById("num2").value;
    let tres = document.getElementById("num3").value;
    let cuatro = document.getElementById("num4").value;

    var numeros = [uno, dos, tres, cuatro];
    let max = Math.max(...numeros);
    document.getElementById("max").innerHTML = max;

}

