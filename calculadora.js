$("#error").hide();

$.ajax({
    url: 'data/tiendas.json', //Url o path del archivo o servicio
    success: function (tiendas) { //La funcion en caso que todo vaya bien
        //Con foreach
        // tiendas.forEach(function (tienda, indice) {
        //     $("#casasComerciales").append(`<option value="${indice + 1}">${tienda}</option>`);
        // });
        //Con For nativo
        for (i = 0; i < tiendas.length; i++) {
            $("#casasComerciales").append(`<option value="${i + 1}">${tiendas[i]}</option>`);
        }
    },
    error: function () { //La funcion que controla error
        desplegarMensaje("Se cayo la consulta al archivo");
    }
});


$("").on("click", function () {
    $(".titulo").slideToggle();
});

function desplegarMensaje(textoError) {
    $("#error").html(textoError).fadeIn("slow");
}

function resetBtn() {
    $('#montoFinal').empty();
    $('#error').fadeOut("slow");
    $('#error1').empty();
    $('#error2').empty()
}

function interes() {
    var montoIngresado;
    var interesFalabella;
    var interesRipley;
    var interesPAris;
    var cantidadDeCuotas;



    //Validar monto de la compra


    montoIngresado = parseInt($("#monto").val());
    if ($("#monto").val() == '') {
        desplegarMensaje("Debe ingresar un valor");

        return;
    }

    if (Number.isNaN(montoIngresado)) {
        desplegarMensaje("Debe ingresar un valor");

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
        desplegarMensaje("Debe ingresar una casa comercial");

        return;
    }
    casaSeleccionada = parseInt(casaComercial.options[casaComercial.selectedIndex].value);

    //Validar numero de cuotas
    var numeroDeCuotasSeleccionada;
    var cuotaSeleccionada = document.getElementById("cuotas");
    if (cuotaSeleccionada.options[cuotaSeleccionada.selectedIndex].value == '0') {
        desplegarMensaje("Debe ingresar una cantidad de cuotas");
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

    $("#error").hide();
    $("#montoFinal").html(`El monto a pagar es de $${montoTotal} y tu cuota mensual es de $${valorFinalCuota}`);

    
    return;
}
