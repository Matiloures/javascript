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
*/
const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x * 0.21;
let precioProducto = 2400; 
let precioProducto1 = 600;
let descuento = 400;  

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento); 
let nuevoPrecio1 = resta(suma(precioProducto1, iva(precioProducto1)), descuento); 

console.log(suma(nuevoPrecio,nuevoPrecio1));
