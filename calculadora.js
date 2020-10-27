

function interes() {
    var montoIngresado;
    var interesFalabella;
    var interesRipley;
    var interesPAris;
    var cantidadDeCuotas;


    //error 
   /*  $(document).ready(function() {
        $("#error").hide(); 
    }); */
     

  /*    function mensajeError(mensaje) {
        $("#error").html(mensaje).fadeToggle(2000);
    }  */


    //Validar monto de la compra

     

    montoIngresado = parseInt($("#monto").val());
    if ($("#monto").val() == '') {
        
        $("#error").html("Debe ingresar un valor").fadeToggle(2000);
        return;
    }

    if (Number.isNaN(montoIngresado)) {
        $("#error").html("Debe ingresar un valor").fadeToggle(2000);

        return;
    }

    

    //Validar la casa comercial
    var casaComercial = document.getElementById("casasComerciales");
    var casaSeleccionada;
    if (casaComercial.options[casaComercial.selectedIndex].value == '0') {
        $("#error1").html("Debe ingresar una casa comercial").fadeToggle(2000);

        return;
    }
    casaSeleccionada = parseInt(casaComercial.options[casaComercial.selectedIndex].value);

    //Validar numero de cuotas
    var numeroDeCuotasSeleccionada;
    var cuotaSeleccionada = document.getElementById("cuotas");
    if (cuotaSeleccionada.options[cuotaSeleccionada.selectedIndex].value == '0') {
        $("#error2").html("Debe ingresar una cantidad de cuotas").fadeToggle(2000);
        return;
    }
    numeroDeCuotasSeleccionada = parseInt(cuotaSeleccionada.options[cuotaSeleccionada.selectedIndex].value);

    //Calcular monto total
    var montoTotal = 0;
    var valorFinalCuota = 0;

    interesFalabella = 1.05;
    interesRipley = 1.06;
    interesPAris = 1.08;

    //aqui se opera en base al valor de select "casasComerciales"

    switch (casaSeleccionada) {
        case 1: //Falabella
            montoTotal = montoIngresado * interesFalabella;
            break;
        case 2: //Ripley
            montoTotal = montoIngresado * interesRipley;
            break;
        case 3: //Paris
            montoTotal = montoIngresado * interesPAris;
            break;
        default:
            break;
    }

    // Calculo cuota mensual

    console.warn("Numero de cuotas seleccionada" + numeroDeCuotasSeleccionada);

    valorFinalCuota = Math.floor(parseInt(montoTotal) / numeroDeCuotasSeleccionada);

    document.getElementById("montoFinal").innerHTML = `El monto a pagar es de $${montoTotal} y tu cuota mensual es de $${valorFinalCuota}`;

    return;
}