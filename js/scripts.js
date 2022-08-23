const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById ('carritoTotal').innerHTML = carrito.length;

const producto = [
    {id:1, nombre: 'Ranita', categoria: 'Productos', category: 'Animales', precio: 1600, img: './img/Rana.png'},
    {id:2, nombre: 'Osito Nordico', categoria: 'Productos', category: 'Animales', precio: 1700, img: './img/Oso.png'},
    {id:7, nombre: 'Ciervo Nordico', categoria: 'Productos', category: 'Animales', precio: 2000, img: './img/Ciervo.png'},
    {id:3, nombre: 'Hipopotas', categoria: 'Productos', category: 'Animales', precio: 2000, img: './img/Hipo.png'},
    {id:4, nombre: 'Frida', categoria: 'Productos', category: 'Personajes', precio: 2500, img: './img/frida.png'},
    {id:5, nombre: 'Batman', categoria: 'Productos', category: 'Personajes', precio: 2500, img: './img/Batman.png'},
    {id:6, nombre: 'Canasta de Frutas', categoria: 'Productos', category: 'Objetos', precio: 3000, img: './img/BolsaFrutas.png'},   
];

//Todos los productos
for (const nodoHTML of document.getElementsByClassName('TodosLoProductos')) {
    nodoHTML.onclick = (event) => {
        const categoria = event.target.getAttribute('data-categoria')
        filtrarTodosLosProductos(categoria)
    } ;
} 

function filtrarTodosLosProductos (categoria) {
    document.getElementById("seccion-card").innerHTML = "";
    const todosLosProductos = producto.filter((producto) => producto.categoria === categoria);

    todosLosProductos.forEach((producto) => { 
        const idButton = `add-cart${producto.id}`
        document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src=${producto.img}>
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
    
}

//Categorias
for (const nodoHTML of document.getElementsByClassName('filtrarCategorias')) {
    nodoHTML.onclick = (event) => {
        const category = event.target.getAttribute('data-category')
        filtrarProductosPorCategoria(category)
    } ;
}   

function filtrarProductosPorCategoria (category) {
    document.getElementById("seccion-card").innerHTML = "";
    const productoFiltrado = producto.filter((producto) => producto.category === category);

    productoFiltrado.forEach((producto) => { 
        const idButton = `add-cart${producto.id}`
        document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src=${producto.img}>
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
    
}

producto.forEach((producto) => { 
const idButton = `add-cart${producto.id}`
document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src=${producto.img}>
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
    document.getElementById(idButton).onclick = () => {
        carrito.push(producto);
        document.getElementById("carritoTotal").innerHTML = carrito.length;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        Swal.fire({
            icon: 'success',
            title: 'Se agrego al carrito',
            showConfirmButton: false,
            timer: 1500
          });
        }
        console.log(carrito);
})

