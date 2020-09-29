//Proto objeto



class Calculadora {
    TASA_INTERES;
    constructor(casa_comercial, nCuotas, montoCompra){
        this.casa_comercial = casa_comercial;
        this.nCuotas = nCuotas;
        this.montoCompra = montoCompra;
        this.getTasaInteres();
    }
    getTasaInteres = function(){
        if(this.casa_comercial === 'falabella'){
            this.TASA_INTERES = 1.44;
        } else if(this.casa_comercial === 'paris'){
            this.TASA_INTERES = 1.66;
        } else if(this.casa_comercial === 'ripley'){
            this.TASA_INTERES === 1.80;
        } else{
            console.log("La casa comercial ingresa no existe");
        }
    }
    calcularCuotaMes = function(){
        return  (this.montoCompra + (this.TASA_INTERES * this.nCuotas * this.montoCompra / 100)) / this.nCuotas
    }
    montototalapagar = function(){
        return (this.montoCompra + (this.TASA_INTERES * this.nCuotas * this.montoCompra / 100));
    }
}


let cal1 = new Calculadora('falabella', 12, 12000);


  //numero de cuotas
  //casa comercial
  //monto de compra
  //Tasa de interes????
