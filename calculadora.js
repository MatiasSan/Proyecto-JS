function interes() {
    var montoIngresado;
    var interesFalabella;
    var interesRipley;
    var interesPAris;
    var cantidadDeCuotas;






    //Validar monto de la compra
    montoIngresado = parseInt(document.getElementById("monto").value);
    if (document.getElementById("monto").value == '') {
        alert('Debe ingresar un valor');
        return;
    }

    if (Number.isNaN(montoIngresado)) {
        alert('Debe ingresar un monto');
        return;
    }

    if (montoIngresado < 0) {
        alert('Debe ingresar un monto superior a 0');
        return;
    }

    //Validar la casa comercial
    var casaComercial = document.getElementById("casasComerciales");
    var casaSeleccionada;
    if (casaComercial.options[casaComercial.selectedIndex].value == '0') {
        alert('Debe seleccionar una casa comercial');
        return;
    }
    casaSeleccionada = parseInt(casaComercial.options[casaComercial.selectedIndex].value);

    //Validar numero de cuotas
    var numeroDeCuotasSeleccionada;
    var cuotaSeleccionada = document.getElementById("cuotas");
    if (cuotaSeleccionada.options[cuotaSeleccionada.selectedIndex].value == '0') {
        alert('Debe seleccionar una cantidad de cuotas');
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

    switch (numeroDeCuotasSeleccionada) {
        case 1:
            valorFinalCuota = parseInt(cuotaSeleccionada) / 1; 
            break;
        case 2:
            valorFinalCuota = parseInt(cuotaSeleccionada) / 2;
            break;
        case 3:
            valorFinalCuota = parseInt(cuotaSeleccionada) / 3;
            break;
        default:
            break;
    }

    console.log(montoTotal)
    document.getElementById("montoFinal").innerHTML = montoTotal;

    //Calcular el valor de la cuota

    console.log(valorFinalCuota);
    document.getElementById("cuotaMensual").innerHTML = valorFinalCuota;

    return;
}