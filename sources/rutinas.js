// window.onload = function() {
//     alert("Hola Bienvenidos a esta pagina");

// }
function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";


	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
  

    document.getElementById("dato").innerHTML ="Color de fondo: <b>"+ color+"</b>"; 
	document.body.style.background = color;
   
}
