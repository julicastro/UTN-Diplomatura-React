var alumnos = [
	{
		nombre: 'Juan Gomez',
		nota: 7
	}, {
		nombre: 'Pedro Rodriguez',
		nota: 4
	}, {
		nombre: 'Roxana García',
		nota: 8
	}, {
		nombre: 'Luciano Lopez',
		nota: 5
	}, {
		nombre: 'Fernanda Gimenez',
		nota: 6
	}, {
		nombre: 'Florencia Martinez',
		nota: 10
	}, {
		nombre: 'Raul Sanchez',
		nota: 7
	}, {
		nombre: 'Sandra Figueroa',
		nota: 8
	}
];

function mostrarListado() {
	for (let i = 0; i < alumnos.length; i++) {
		if(alumnos[i].nota >= 7 ){
			var listado = document.getElementById("listado");
			var p = document.createElement("p");
			p.innerHTML = "Alumno: " + alumnos[i].nombre + " (Aprobado)";
			listado.appendChild(p);
			
		}else{
			var listado = document.getElementById("listado");
			var p = document.createElement("p");
			p.innerHTML = "Alumno: " + alumnos[i].nombre + " (Desaprobado)";
			listado.appendChild(p);
		}
	}
}



