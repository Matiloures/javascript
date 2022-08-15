const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById ('carritoTotal').innerHTML = carrito.length;

const producto = [
    {
        id:1, 
        nombre: 'Triceratops',
        categoria: 'Productos',
        img: '../img/Tricera.png',
        category: 'Animales', 
        precio: 1600,
    },
    {
        id:2, 
        nombre: 'Dino', 
        categoria: 'Productos',
        category: 'Animales', 
        precio: 1700
    },
    {
        id:3, 
        nombre: 'Hipopotas',
        categoria: 'Productos',
        category: 'Animales',
        precio: 2000
    },
    {
        id:4, 
        nombre: 'Principito',
        categoria: 'Productos',
        category: 'Personajes', 
        precio: 2500
    },
    {
        id:5, 
        nombre: 'Batman',
        categoria: 'Productos',
        category: 'Personajes',  
        precio: 2500
    },
    {
        id:6, 
        nombre: 'Canasta de Frutas',
        categoria: 'Productos',
        category: 'Objetos',  
        precio: 3000
    },
];

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
    
}

producto.forEach((producto) => { 
const idButton = `add-cart${producto.id}`
document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="../img/${producto.img}.png"/>
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
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
        console.log(carrito);

})

