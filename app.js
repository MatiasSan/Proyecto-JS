// Solicitud nombre y apellido. 

var nombre = prompt("Por favor ingresa tu nombre: ");

let nombreProcesado = procesarNombre(nombre);

var apellido = prompt("Por favor ingresa tu apellido: ");

let apellidoProcesado = procesarApellido(apellido);



// LOOP si no ingresa datos. 

while (nombre === "" || nombre == null) {
    alert("Debes ingresar tu nombre y tú apellido!!");
    nombre = prompt("Tu nombre acá: ");
    apellido = prompt("Tu apellido acá: ");
    let nombreProcesado = procesarNombre(nombre);
    let apellidoProcesado = procesarApellido(apellido);

    

}

 


alert('Bienvenido a la web ' + nombreProcesado + " " + apellidoProcesado);


// probando función. 


function procesarNombre(nombre) {

    var primeraLetra = nombre.slice(0, 1);
    var mayusPrimeraLetra = primeraLetra.toUpperCase();
    var restoNombre = nombre.slice(1, nombre.length);
    restoNombre = restoNombre.toLowerCase();
    var mayusNombre = mayusPrimeraLetra + restoNombre;
    return mayusNombre;
}

function procesarApellido(apellido) {
    var primeraLetraApellido = apellido.slice(0, 1);
    var mayusPrimeraLetra = primeraLetraApellido.toUpperCase();
    var restoApellido = apellido.slice(1, apellido.length);
    restoApellido = restoApellido.toLowerCase();
    var mayusApellido = mayusPrimeraLetra + restoApellido;
    return mayusApellido;
}