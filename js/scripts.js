const carrito = [];


const producto = [
    {
        id:1, 
        nombre: 'Triceratops', 
        precio: 1600,
    },
    {
        id:2, 
        nombre: 'Dino', 
        precio: 1700
    },
    {
        id:3, 
        nombre: 'Hipopotas', 
        precio: 2000
    },
    {
        id:4, 
        nombre: 'Gran Conejo', 
        precio: 2500
    },
];

producto.forEach((producto) => { 
const idButton = `add-cart${producto.id}`
document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src=${producto.img}/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${producto.nombre}</h5>
                    <p>$${producto.precio}</p>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center" id="${idButton}"><a class="btn btn-outline-dark mt-auto" href="#">Agregar</a></div>
            </div>
        </div>
     </div>`;
})

producto.forEach((producto) => {
    const idButton = `add-cart${producto.id}` 
    document.getElementById(idButton).addEventListener('click', () => {
        alert("Agregaste "+ producto.nombre); 
        carrito.push(producto);
    })
});


/*const carrito = [];

function agregarAlCarrito(producto){

    carrito.push(producto);
    console.log (carrito);
}

agregarAlCarrito({ id:1, name: "Triceratops", precio: 1600})
agregarAlCarrito({ id:2, name: "Dino", precio: 1700})
agregarAlCarrito({ id:3, name: "Hipopotas", precio: 2000})

function borrarProductoDelCarrito(idDelProducto){
    const index = carrito.findIndex((producto) => producto.id === idDelProducto);

    //Eliminar articulo

    if( index !== -1){
        carrito.splice(index, 1);
    }
   
    console.log(carrito);
}
borrarProductoDelCarrito(3);

//Buscador

const productos = [
    {id:1, nombre: 'Triceratops', precio:1600},
    {id:2, nombre: 'Dino', precio:1700},
    {id:3, nombre: 'Hipopotas', precio:2000},
    {id:4, nombre: 'Gran Conejo', precio:2500},
]

const resultado = productos.find((el) => el.nombre === "Dino")
const resultado2 = productos.find((el) => el.nombre === 'Principito')

console.log (resultado);
console.log (resultado2);

//Filtro
const filtro = productos.filter((el) => el.precio >= 2000)

console.log (filtro);

//Aumento de precio + IVA

const precioMasIVA = productos.map((el) => {
    return {
        nombre: el.nombre, 
        precio: el.precio * 1.21
    }
})
console.log(precioMasIVA)

//Valor total de mi compra

const miCompra = [
    {nombre: 'Triceratops', precio:1600},
    {nombre: 'Hipopotas', precio:2000},
]
const totalDeCompra = miCompra.reduce ((ac, el)=> ac + el.precio, 0)
console.log ('El valor a pagar es $' + totalDeCompra + ' más envío')



/*
let ingresarNumero = parseInt(prompt('Ingresar numero'));

for ( let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero + 'x' + i + " = " + resultado)
}


const notas = [7, 9, 5];
notas[0]

sumadorDeNotas = 0;
for(let i = 0; i < 3; i++){
    sumadorDeNotas = sumadorDeNotas + notas[i];
}
const promedio = sumadorDeNotas/3;
console.log(promedio);

if(promedio <= 5){
   console.log('Recursa la materia con un ' + promedio) 
} else{
    console.log('Aprobaste, felicidades! Te sacaste un ' + promedio); 326
}

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21;
let precioProducto = 2400; 
let precioProducto1 = 600;
let descuento = 400;  

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)), descuento); 

console.log(suma(nuevoPrecio,nuevoPrecio1));
*/