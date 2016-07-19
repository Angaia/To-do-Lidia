//Creo una función para que al hacer click en el botón de añadir,
//me añada un nuevo elemento a la lista con lo que haya escrito en
//el input.

function todoList () {
	//vamos a guardar lo escrito en input a una var llamada item
	var item = document.getElementById("todoInput").value;
	//esos items pásamelos estrictamente a texto? creo que es por una movida del input
	var text = document.createTextNode(item);
	//esos elementos hay que pasarlos a "lis"
	var newItem = document.createElement("li");
	//así que a los lis añádeles el texto del input:
	newItem.appendChild(text)
	//pero necesito también meterlos dentro de la ul 
	document.getElementById("todoList").appendChild(newItem)
	//quiero darles un fondo rojo
	newItem.style.background="#F5A9A9";
	//y la clase undone
	// newItem.classList.add('undone');
	//y que me alerte cuando añado algo
	// alert("To-do añadido");
	// };
};
//si hago click en mi tarea que por defecto está en rojo y con clase undone
//quiero que me la pases a clase "done" y fondo verde
// document.getElementById(todoList).getElementsByTagName('li').onclick = function () {
// 	if (newitem.style.background="#F5A9A9") {
// 		newItem.style.background="#82FA58";
// 		newitem.setAttribute("class", "done");
// 	}
// //y viceversa
// 	else {
// 		newitem.style.background="#F5A9A9";
// 		newitem.setAttribute("class", "undone");

// 	}

// };


function borrartodo () {
	document.getElementById("todoList").innerHTML = "";
};

// function cambiarclase () {
// 	var todosañadidos = document.getElementsByTagName("li");
	
// 	for (i = 0; i < y.length; i++) {
// 		todosañadidos.setAttribute("background-color", "red");
// 		}
// };
	// else {
	// 		todosañadidos.setAttribute("background-color", "green");
	// };




// function eraseAll () {
// //quiero coger todos los elementos <li> dentro de mi <ul>
// // y eliminarlos al hacer click en el botón clearAll
// // NO FUNCIONA T_T

// 	var elemLista = document.getElementById('todoList');
// 	document.getElementsByTagName("li").removeChild(newItem); 
// 	};

//OPCIONES FALLIDAS:

// var lista = document.getElementsByTagName("li");

// for(var i = 0, li = lista.length; i<il; i++) {
//     root.removeChild(lista[i]);
// }

// };

