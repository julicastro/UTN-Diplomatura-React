var red = document.getElementById('rojo');
var blue = document.getElementById('azul');
var yellow = document.getElementById('amarillo');

var color = "";

red.addEventListener('click', function handleClick(event) {
    console.log(event.target.id);
    color = "red";
    document.getElementById('back').style.backgroundColor = "red";

});
blue.addEventListener('click', function handleClick(event) {
    console.log(event.target.id);
    color = "blue";
    document.getElementById('back').style.backgroundColor = "blue";
});
yellow.addEventListener('click', function handleClick(event) {
    console.log(event.target.id);
    color = "yellow";
    document.getElementById('back').style.backgroundColor = "yellow";
});

