const producto1 = new Producto(1, "Disco de Freno", "Disco de freno ventilado", 150000, 10);
const producto2 = new Producto(2, "Pastillas de Freno", "Pastillas cerámicas", 80000, 5);

const usuario = new Usuario(1, "Dairo", "dairo@email.com", "123456");

const carrito = new Carrito();

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);

console.log("Total del carrito:", carrito.total);