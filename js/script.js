/*
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

*/
/*
//Cargar saldo
let plataIngresada = 0 ;

class CargaSaldo {
    constructor(cantidad, tipoTarjeta, numeroTarjeta){
        this.cantidad = cantidad;
        this.tipoTarjeta = tipoTarjeta;
        this.numeroTarjeta = numeroTarjeta;
    }
}

let botonCargar = document.getElementById("botonCargaSaldo");
botonCargar.addEventListener("click", cargarSaldo);

function cargarSaldo (){
    let cantidad = document.getElementById("cantidad").value;
    let tipoTarjeta = document.getElementById("tarjeta").value;
    let numeroTarjeta = document.getElementById("numeroTarjeta").value;
    let cargaSaldo1 = new CargaSaldo(cantidad, tipoTarjeta, numeroTarjeta);
    plataIngresada = Number(cargaSaldo1.cantidad) + plataIngresada;
    mostrarSaldoActual(cargaSaldo1);

}

function mostrarSaldoActual (cargaSaldo1) {
    if (cantidad.value > 0){
        let formulario = document.getElementById("recarga");
        formulario.innerHTML = "";
    
        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = `
        <h3> Se acredito la carga de $${cargaSaldo1.cantidad}, realizado con la tarjeta de ${cargaSaldo1.tipoTarjeta} finalizada en ${cargaSaldo1.numeroTarjeta}. Su saldo actual es de $${plataIngresada} </h3>
        <button id="botonVolver"><a href="../paginas/carga.html">Volver a cargar</a></button>`
        ;
    
        nuevoContenido.className = "bille-total"
        formulario.appendChild(nuevoContenido);
    } else {
        let formulario = document.getElementById("recarga");
        formulario.innerHTML = "";
    
        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = `
        <h3> No se pudo realizar la carga de saldo. Su saldo actual es ${plataIngresada}. Intentelo nuevamente.</h3>
        <button id="botonVolver"><a href="../paginas/carga.html">Volver a cargar</a></button>`
        ;
    
        nuevoContenido.className = "bille-total"
        formulario.appendChild(nuevoContenido);
        
    }
  
}*/
















document.addEventListener(`DOMContentLoaded`, ()=> {
    if (localStorage.getItem("dineroEnCuenta")){
        dineroEnCuenta = JSON.parse(localStorage.getItem("dineroEnCuenta"));
        cargarSaldo();
    }
});


let tipoTarjeta = "";
let numeroTarjeta = ""; 
let dineroEnCuenta = 0;

let saldoActual = document.getElementById("saldoActualBille");


let botonCargar = document.getElementById("botonCargaSaldo");
botonCargar.addEventListener("click",cargarSaldo);
// Cargar saldo
function cargarSaldo (){
    dineroIngresado = Number(document.getElementById("dineroIngresado").value);
    tipoTarjeta = document.getElementById("tarjeta").value;
    numeroTarjeta = document.getElementById("numeroTarjeta").value;
    dineroEnCuenta = dineroEnCuenta + dineroIngresado;
    mostrarSaldoActual();
    

    localStorage.setItem(`dineroEnCuenta`, JSON.stringify(dineroEnCuenta));



};
function mostrarSaldoActual (){
    if (dineroIngresado >= 1){

        alert(`Se acredito la carga de $${dineroIngresado}, realizado con la tarjeta de ${tipoTarjeta} finalizada en ${numeroTarjeta}. Su saldo actual es de $${dineroEnCuenta}`);

        let formulario = document.getElementById("ultimosMov");
        
        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = `<ul><li> <h3> Se acredito la carga de $${dineroIngresado}, realizado con la tarjeta de ${tipoTarjeta} finalizada en ${numeroTarjeta}. Su saldo actual es de $${dineroEnCuenta} </h3></li></ul>`
       
        ;
        
        nuevoContenido.className = "bille-total"
        formulario.appendChild(nuevoContenido);

        saldoActual.innerText = dineroEnCuenta;

        dineroIngresado = document.getElementById("dineroIngresado").value = "";
        tipoTarjeta = document.getElementById("tarjeta").value = "";
        numeroTarjeta = document.getElementById("numeroTarjeta").value = "";
        


        
    } else {

        alert(`No se pudo realizar la carga de saldo. Su saldo actual es ${dineroEnCuenta}. Intentelo nuevamente.`)


        let formulario = document.getElementById("ultimosMov");
        
    
        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML = `<ul><li><h3> No se pudo realizar la carga de saldo. Su saldo actual es ${dineroEnCuenta}. Intentelo nuevamente.</h3></li></ul>`
        ;
    
        nuevoContenido.className = "bille-total"
        formulario.appendChild(nuevoContenido);

        saldoActual.innerText = dineroEnCuenta;
        
        dineroIngresado = document.getElementById("dineroIngresado").value = "";
        tipoTarjeta = document.getElementById("tarjeta").value = "";
        numeroTarjeta = document.getElementById("numeroTarjeta").value = "";
        
    }

};












// ARRAYS
const servicios = [
    {id: 1, nombre: `Agua`, empresa: `Aysa`, precio: 2500, img: `../img/pagos.webp` },
    {id: 2, nombre: `Luz`, empresa: `Edenor`, precio: 1800, img: `../img/posnet.webp` },
    {id: 3, nombre: `Gas`, empresa: `Metrogas`, precio: 2400, img: `../img/posnet.webp` },
    {id: 4, nombre: `Internet`, empresa: `Cablevisión`, precio: 2300, img: `../img/posnet.webp` },
    {id: 5, nombre: `Cable`, empresa: `Telecentro`, precio: 2700, img: `../img/posnet.webp` },
    {id: 6, nombre: `Tarjeta de crédito VISA`, empresa: `Santander Rio`, precio: 22300, img: `../img/posnet.webp` },
    {id: 7, nombre: `Tarjeta de crédito VisA`, empresa: `BBVA`, precio: 25500, img: `../img/posnet.webp` },
    {id: 8, nombre: `Tarjeta de crédito AMEX`, empresa: `Hipotecario`, precio: 10100, img: `../img/posnet.webp` },

]


let carrito = [];

document.addEventListener(`DOMContentLoaded`, ()=> {
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
});


const pagarServicios = document.getElementById("pagarServicios");

const espacioCarrito = document.getElementById("espacioCarrito");

const contadorCarrito = document.getElementById("contadorCarrito");

const precioTotal2 = document.getElementById("precioTotal");
let precioTotal ;






const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.addEventListener("click", ()=> {
    carrito.length = 0;
    actualizarCarrito();
})


servicios.forEach((servicio) => {
    const div = document.createElement("div");
    div.classList.add("servicio");
    div.innerHTML = `
    <img src=${servicio.img} alt = "">
    <h3> ${servicio.nombre}</h3>
    <p>${servicio.empresa}</p>
    <p class= "precioServicio">Precio : $${servicio.precio}</p>
    <button id="agregar${servicio.id}" class"boton-agregar"> Agregar servicio a pagar</button>
    ` ;

    pagarServicios.appendChild(div);

    const botonAgregar = document.getElementById(`agregar${servicio.id}`);
    botonAgregar.addEventListener("click", ()=> {
        agregarAlCarrito(servicio.id);
    });



});


const agregarAlCarrito = (servId) =>{
    const servicioSelec = servicios.find((serv) => serv.id === servId);
    carrito.push(servicioSelec);
    actualizarCarrito();
    
};

const eliminarDelCarrito = (servId) =>{
    const servicioSelec = carrito.find((serv) => serv.id === servId);

    const indice = carrito.indexOf(servicioSelec);
    carrito.splice(indice, 1);

    actualizarCarrito();
}



const actualizarCarrito = () => {

    espacioCarrito.innerHTML="";

    carrito.forEach((serv) => {
        const div = document.createElement (`div`);
        div.className = (`servicioEnCarrito`);
        div.innerHTML = `
        <p>${serv.nombre}</p>
        <p> Precio: ${serv.precio}</p>
        <p> Cantidad: <span id= "cantidad"> ${serv.cantidad} </span></p>
        <button onclick = "eliminarDelCarrito(${serv.id})" class = "botonEliminar"</button>
        `;

        espacioCarrito.appendChild(div);

        localStorage.setItem(`carrito`, JSON.stringify(carrito));

    });
    contadorCarrito.innerText = carrito.length;
    precioTotal = carrito.reduce ((acumulador, serv) => acumulador + serv.precio, 0 );
    precioTotal2.innerText = precioTotal;


    

};

























// Pagar Servicio
let pagarServ = document.getElementById("pagar");
pagarServ.addEventListener("click", pagar)
function pagar(){
    if (dineroEnCuenta > precioTotal ){
        dineroEnCuenta = dineroEnCuenta - precioTotal;
        console.log(dineroEnCuenta);
    } else {

    }


    mostrarPagos();

};

function mostrarPagos (){
    let formulario = document.getElementById("ultimosMov");

    if (dineroEnCuenta > precioTotal ){

        alert(`Se realizo el pago de $${precioTotal} por los servicios seleccionados. El saldo actual de la cuenta es de $${dineroEnCuenta}`)

        let nuevoContenido2 = document.createElement("div");
        nuevoContenido2.innerHTML = `<h3> Se realizo el pago de $${precioTotal} por los servicios seleccionados. El saldo actual de la cuenta es de $${dineroEnCuenta} </h3>`;

        nuevoContenido2.className = "bille-total";
        formulario.appendChild(nuevoContenido2);

    } else{

        alert(`No se pudo realizar el pago de $${precioTotal} por los servicios seleccionados, porque el saldo actual de la cuenta es insuficiente. Saldo actual $${dineroEnCuenta}`)
        let nuevoContenido2 = document.createElement("div");
        nuevoContenido2.innerHTML = `<h3> No se pudo realizar el pago de $${precioTotal} por los servicios seleccionados, porque el saldo actual de la cuenta es insuficiente. Saldo actual $${dineroEnCuenta} </h3>`;

        nuevoContenido2.className = "bille-total"
        formulario.appendChild(nuevoContenido2);
    }
}










