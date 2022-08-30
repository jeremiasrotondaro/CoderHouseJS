//Funciones

function saludo(){
    alert(`Hola ${nombre}, esta ingresando a su billetera virtual`);
}

const CargarDinero = () => {
    billetera = Number(prompt("Ingrese el saldo a cargar en su billetera ")); 
    billeteraTotal = billeteraTotal + billetera; 
}

function pagarServicio (){
    servicio = prompt( "Ingrese el número del servicio a abonar. \n 1. Servicio de luz \n 2. Servicio de agua \n 3. Servicio de gas ");

    if(servicio === "1"){
        alert("Seleccionaste abonar el servicio de luz");
    } else if (servicio === "2"){
        alert("Seleccionaste abonar el servicio de agua");
    } else if (servicio === "3"){
        alert("Seleccionaste abonar el servicio de gas");
    }

    menu = prompt ("Ingrese la opción deseada \n 2. Total a pagar \n 3. Terminar ");
}

function realizarPago () {
    if(servicio === "1" ){
        alert("Abonara el servicio de luz por un valor de $2000")
        billeteraTotal = billeteraTotal - servicioLuz ;
        
    } else if (servicio === "2" ){
        alert("Abonara el servicio de agua por un valor de $1800")
        billeteraTotal = billeteraTotal - servicioAgua ;
    } else if (servicio === "3"){
        alert("Abonara el servicio de gas por un valor de $2500")
        billeteraTotal = billeteraTotal - servicioGas ;
    }
}

// Variables

let servicio;
let servicioAgua = 1800;
let servicioLuz = 2000;
let servicioGas = 2500;
let billetera = 0;
let billeteraTotal = 0;

alert("Bienvenido a PagoMisCuentitas")

let nombre = prompt("Ingrese su nombre");

saludo();
CargarDinero();

let menu = prompt("Ingrese la opción deseada. \n 1. Seleccionar servicios para abonar \n 2. Realizar el pago de los servicios seleccionados \n 3. Terminar ");

while (menu !== "3"){
    if(menu === "1"){
        pagarServicio();
    }
    if(menu === "2"){
        realizarPago();
        menu = "3";
    }
}

alert(`Se realizo el pago de forma exitosa. EL saldo actual de su billetera es de $${billeteraTotal}`);

alert("Gracias por confiar en PagoMisCuentitas. Vuelva pronto.")


