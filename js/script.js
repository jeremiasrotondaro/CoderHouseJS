
// Variable globales 
let opcion;
let billetera = 0 ;
let billeteraTotal = 0;
let cant = 0;
let nombreBilletera = "JR-PAY"
let total = 0 ;





class ServicioEnCanasta{
    constructor(servicio) {
        this.id = servicio.id;
        this.categoria = servicio.categoria;
        this.empresa = servicio.empresa;
        this.precio = servicio.precio;
        this.cantidad = 1;
    }

    modificarCantidad(operacion){
        switch(operacion){
            case 'suma' :
                this.cantidad += 1;
                break;
            case 'resta' :
                if (this.cantidad > 1){
                    this.cantidad -= 1;
                } else{
                    const findServicioIndex = serviciosAPagar.findIndex(servicio => servicio.id === this.id);
                    serviciosAPagar.splice(findServicioIndex, 1);
                }
                
                break;
        }
    }
}


// ARRAYS
const servicio = [
    {id: 1, categoria: `Agua`, empresa: `Aysa`, precio: 2500 },
    {id: 2, categoria: `Luz`, empresa: `Edenor`, precio: 1800 },
    {id: 3, categoria: `Gas`, empresa: `Metrogas`, precio: 2400 },
    {id: 4, categoria: `Internet`, empresa: `Cablevisión`, precio: 2300 },
    {id: 5, categoria: `Cable`, empresa: `Telecentro`, precio: 2700 },
    {id: 6, categoria: `Tarjeta de crédito VISA`, empresa: `Santander Rio`, precio: 22300 },
    {id: 7, categoria: `Tarjeta de crédito VisA`, empresa: `BBVA`, precio: 25500 },
    {id: 8, categoria: `Tarjeta de crédito AMEX`, empresa: `Hipotecario`, precio: 10100 },

]

const serviciosAPagar = [];


// Funciones
const CargarDinero = () => {
        billetera = Number(prompt("Ingrese el saldo a cargar")); 
        billeteraTotal = billeteraTotal + billetera; 
}



const servicioSeleccionado = () => {
    
    let consultarId = Number(prompt(`Ingrese el número del servicio a pagar \n 
    1- Servicio de Agua $2.500
    2- Servico de Luz $1.800
    3- Servicio de Gas $2.400
    4- Servicio de Internet $2.300
    5- Servicio de Cable $2.700
    6- T.C VISA Santander $22.300
    7- T.C VISA BBVA $25.500
    8- T.C AMEX Hipotecario $10.100
    `)); 3

    do{

        if (consultarId >= 1 && consultarId <= 8) {
            const findServicioIndex = servicio.findIndex(elem => elem.id === consultarId);

            const serviciosAAgregar = servicio.find(elem => elem.id === consultarId);

            console.log(serviciosAAgregar);

            console.log(servicio[findServicioIndex]);

            serviciosAPagar.push(new ServicioEnCanasta(servicio[findServicioIndex]));

        } else {
            alert("La opción ingresada no es correcta.")
        }

    

    } while(consultarId < 1 && consultarId > 8 )


}


const calcularTotal = () => {
    total = serviciosAPagar.reduce((acumulador, elemento) => acumulador + (elemento.precio * elemento.cantidad),0);

}



const verCant = () => {
    for(let index = 1; index <= serviciosAPagar.length; index++ ){
        alert(`El servicio a pagar número ${index} agregado fue : ${serviciosAPagar[index -1].categoria}`);
    }
    calcularTotal();
    alert(`El total a pagar es : $${total}`)
}


const Pagar = () => {
    billeteraTotal = billeteraTotal - total;
    mostrarMensaje(`Tu saldo actual es de $${billeteraTotal}`)
} 

function mostrarMensaje(msj){
    alert(msj)
}

//Menu bienvendia
alert(`Bienvendio a tu billetera ${nombreBilletera}`);

//Opciones

do {
    
  opcion = Number(prompt(`
/ Ingrese la opción deseada /

- Mi saldo es $${billeteraTotal} -

1- Cargar dinero
2- Ver servicios
3- Ver cantidad de elementos en el carrito
4- Pagar
5- Salir

`))
 

    switch (opcion) {
        case 1: {
            CargarDinero();
            break;
        }
        case 2: {
            servicioSeleccionado();
            break;
        }
        case 3: {
            verCant();
            break;
        }
        case 4: {
            calcularTotal();
            alert(`Pagaras $${total} `);
            if (total > billeteraTotal) {
                alert(`No tenes el saldo disponible para realizar este pago.
                Tu saldo actual es de $${billeteraTotal}`);
                break;

            } else{
                Pagar(); 
            }
            break;
        }
        case 5: {
            alert("Gracias por usar nuestros servicios, hasta pronto.")
            break;
        }
        default: {
            alert("El dato ingresado no es válido")
            break
        };

    }
} while (opcion !== 5)


