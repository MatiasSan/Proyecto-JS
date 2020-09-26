
//Solicitando nombre a usuario

var nombre = prompt("Por favor ingresa tu nombre: ");

var primeraLetra = nombre.slice(0, 1);
00
var mayusPrimeraLetra = primeraLetra.toUpperCase();

var restoNombre = nombre.slice(1, nombre.length);

restoNombre = restoNombre.toLowerCase();

var mayusNombre = mayusPrimeraLetra + restoNombre;



while (nombre === '') {
    alert("Debes ingresar un nombre!");
    nombre = prompt('Tu nombre aca: ');
    var primeraLetra = nombre.slice(0, 1);

    var mayusPrimeraLetra = primeraLetra.toUpperCase();

    var restoNombre = nombre.slice(1, nombre.length);

    restoNombre = restoNombre.toLowerCase();

    var mayusNombre = mayusPrimeraLetra + restoNombre;

}

alert('Bienvenido a la web ' + mayusNombre);