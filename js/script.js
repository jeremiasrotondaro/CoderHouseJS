
document.addEventListener(`DOMContentLoaded`, ()=> {
    if (localStorage.getItem("dineroEnCuenta")){
        dineroEnCuenta = JSON.parse(localStorage.getItem("dineroEnCuenta"));
        cargarSaldo();
    }
});



//CARGAR SALDO CUENTA

let tipoTarjeta = "";
let numeroTarjeta = ""; 
let dineroEnCuenta = 0;

let saldoActual = document.getElementById("saldoActualBille");


let botonCargar = document.getElementById("botonCargaSaldo");
botonCargar.addEventListener("click",cargarSaldo);

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


        Swal.fire({
            icon: 'success',
            title: 'Recarga exitosa',
            text: `Se acredito la carga de $${dineroIngresado}, realizado con la tarjeta de ${tipoTarjeta} finalizada en ${numeroTarjeta}`,
            footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
            grow: 'row',
            timer: 2500,
            toast: true,
            position: 'top-end',
            showConfirmButton: false, 
        });




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

        Swal.fire({
            icon: 'error',
            title: 'No se pudo realizar la carga de saldo.',
            text: 'Intentelo nuevamente.',
            footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
            grow: 'row',
            timer: 2500,
            toast: true,
            position: 'top-end',
            showConfirmButton: false, 
        });


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






// Pintar servicios 


const pagarServicios = document.getElementById("pagarServicios");

fetch("/desafio1/js/serviciosbase.json")
.then((res) => res.json())
.then((servicios) =>{
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
            Swal.fire({
                icon: 'success',
                title: 'Agregado al carrito',
                text: `Se agrego el servicios de ${servicio.nombre}, por un importe de $${servicio.precio}`,
                footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
                grow: 'row',
                timer: 3000,
                toast: true,
                position: 'top-end',
                showConfirmButton: false, 
            });
        });
    
    
    
    });

    const agregarAlCarrito = (servId) =>{
        const servicioSelec = servicios.find((serv) => serv.id === servId);
        carrito.push(servicioSelec);
    
    
        actualizarCarrito();
        
    };


})





//MODIFICAR CARRITO
let carrito = [];

document.addEventListener(`DOMContentLoaded`, ()=> {
    if (localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"));
        actualizarCarrito();
    }
});



const espacioCarrito = document.getElementById("espacioCarrito");

const contadorCarrito = document.getElementById("contadorCarrito");

const precioTotal2 = document.getElementById("precioTotal");
let precioTotal ;





const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.addEventListener("click", ()=> {
    carrito.length = 0;
    actualizarCarrito();

    localStorage.setItem(`carrito`, JSON.stringify(carrito));
})




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
        <button onclick = "eliminarDelCarrito(${serv.id})" class = "botonEliminar">X</button>
        `;

        espacioCarrito.appendChild(div);

        localStorage.setItem(`carrito`, JSON.stringify(carrito));

    });
    contadorCarrito.innerText = carrito.length;
    precioTotal = carrito.reduce ((acumulador, serv) => acumulador + serv.precio, 0 );
    precioTotal2.innerText = precioTotal;


    

};







// PAGAR SERVICIOS
let pagarServ = document.getElementById("pagar");
pagarServ.addEventListener("click", pagar)
function pagar(){
    if (dineroEnCuenta > precioTotal ){
        dineroEnCuenta = dineroEnCuenta - precioTotal; 
    } else {

    }


    mostrarPagos();

};


function mostrarPagos (){
    let formulario = document.getElementById("ultimosMov");

    if (dineroEnCuenta > precioTotal && precioTotal > 1){

        Swal.fire({
            icon: 'success',
            title: 'Pago exitoso',
            text: `Se realizo el pago de $${precioTotal} por los servicios seleccionados.`,
            footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
            timer: 2500,
            toast: true,
            position: 'top-start',
            showConfirmButton: false, 
            
        });


        let nuevoContenido2 = document.createElement("div");
        nuevoContenido2.innerHTML = `<h3> Se realizo el pago de $${precioTotal} por los servicios seleccionados. El saldo actual de la cuenta es de $${dineroEnCuenta} </h3>`;

        nuevoContenido2.className = "bille-total";
        formulario.appendChild(nuevoContenido2);

        carrito.length = 0;
        actualizarCarrito();


        localStorage.setItem(`carrito`, JSON.stringify(carrito));
        localStorage.setItem(`dineroEnCuenta`, JSON.stringify(dineroEnCuenta));

    } else if (dineroEnCuenta < precioTotal && precioTotal > 1) {



        Swal.fire({
            icon: 'error',
            title: 'Error en el pago',
            text: `No se pudo realizar el pago de $${precioTotal} por los servicios seleccionados, porque el saldo actual de la cuenta es insuficiente`,
            footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
            timer: 2500,
            toast: true,
            position: 'top-start',
            showConfirmButton: false, 
            
        });

        let nuevoContenido2 = document.createElement("div");
        nuevoContenido2.innerHTML = `<h3> No se pudo realizar el pago de $${precioTotal} por los servicios seleccionados, porque el saldo actual de la cuenta es insuficiente. Saldo actual $${dineroEnCuenta} </h3>`;

        nuevoContenido2.className = "bille-total"
        formulario.appendChild(nuevoContenido2);

        
    } else{
        Swal.fire({
            icon: 'question',
            title: 'No hay servicios para pagar',
            footer: `<span class = "rojo">Su saldo actual es $${dineroEnCuenta}</span>`,
            timer: 2500,
            toast: true,
            position: 'top-start',
            showConfirmButton: false, 
            
            
        });
    }
}










