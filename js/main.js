function agregaPosteo() {
	// llamamos el contenedor-posteos, el nombre y el comentario del usuario
	var containerPosteos = document.getElementById("contenedor-posteos");
	var nombreFF = document.getElementById("nombre").value;
	var contenidoFF = document.getElementById("cajaposteos").value;

	// creamos el nodo elemento donde ira el post
	var nuevoPost = document.createElement("div");

	// creamos elementos donde se guardara los valores
	var contenedorNombre = document.createElement("strong");
	var contenedorPost = document.createElement("p");
	var separacion = document.createElement("hr");

	// se crea elementos para corazon
	var parrafCorazon = document.createElement("p");
	var i = document.createElement("i");

	// se le asigna padre a icono de corazon
	parrafCorazon.appendChild(i);

	// atributos a corazon
	parrafCorazon.setAttribute("class","corazon");
	i.setAttribute("class", "fa fa-heart");
	i.setAttribute("arial-hiden", "true");

	//transformar el nombre a nodo texto
	var nodoNombre = document.createTextNode(nombreFF + " escribió: ");
	var nodoPosteo = document.createTextNode(contenidoFF);

	//asignar padres a nodos creados
	contenedorNombre.appendChild(nodoNombre);
	contenedorPost.appendChild(nodoPosteo);

	//asignaremos padres a nombre y contenido
	nuevoPost.appendChild(contenedorNombre);
	nuevoPost.appendChild(contenedorPost);
	nuevoPost.appendChild(parrafCorazon);

	//crear function click para el corazon y se le asigna clase rojo de css
	i.addEventListener("click", function() {
		i.classList.toggle("rojo");
	});

	// dar atributos al post y se agrega al contenedor-posteos
	nuevoPost.setAttribute("class", "posteo");
	containerPosteos.appendChild(nuevoPost);

	// resetear campos y dejorlos en blanco
	document.getElementById("nombre").value = "";
	document.getElementById("cajaposteos").value = "";



}