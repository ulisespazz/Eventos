class productos {
    constructor(id,nombre,producto,precio){
        this.id = id
        this.nombre = nombre
        this.producto = producto
        this.precio = precio
    }
}
class Carro {
    constructor(total){
        this.productos = []
        this.total = total
    }
    agregarAlCarro (producto){
        this.productos.push(producto)
        this.total += producto.precio
    }
    
    MostrarCarro(){
        this.productos.forEach(listado => {
            console.log(listado);
        });
    }
    MostrarTotal(){
        console.log(`Total: ${this.total}`)
    }
}
const producto1 = new productos(1,"Agua", "Bebida", 60)
const producto2 = new productos(2,"CocaCola", "Bebida", 130)
const producto3 = new productos(3,"Pepsi", "Bebida", 130)
const producto4 = new productos(4,"7up", "Bebida", 120)
const producto5 = new productos(5,"Mirinda", "Bebida", 110)
const producto6 = new productos(6,"Speed", "Bebida", 150) 
const producto7 = new productos(7,"Gomitas", "Golosina", 60)
const producto8 = new productos(8,"Caramelos", "Golosina", 60)
const producto9 = new productos(9,"Alfajor", "Golosina", 100)
const producto10 = new productos(10,"Chupetin", "Golosina", 40)
const producto11 = new productos(11,"Chicle", "Golosina", 60) 
const producto12 = new productos(12,"PapasLays", "Snacks", 100)
const producto13 = new productos(13,"Doritos", "Snacks", 120)
const producto14 = new productos(14,"3d", "Snacks", 100)
const producto15 = new productos(15,"Cheetos", "Snacks", 110)
const producto16 = new productos(16,"Pringles", "Snacks", 400)
const carro = new Carro(0);

let productosArray = [producto1, producto2, producto3, producto4, producto5, 
    producto6, producto7, producto8, producto9, producto10, producto11, 
    producto12, producto13, producto14, producto15, producto16]

let divProductos = document.getElementById('divProductos')
//let inputText = document.getElementById('inputText')

function mostrarProductos(productosArray){
    productosArray.forEach(producto =>{
        divProductos.innerHTML += `
            <div class="card divProductos" id="Producto${producto.id}" style="width: 18rem;">
                <img src="/img/producto${producto.id}.jpg" class="card-img-top" alt="...">
                <div class="card-body" >
                    <p>Nombre: ${producto.nombre}</p>
                    <p>Tipo de producto: ${producto.producto}</p>
                    <p>Precio: ${producto.precio}</p>
                    <button id="boton${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `
    })
}

/*
mostrarProductos(productosArray)
inputText.addEventListener('change', function() {
    let consulta = inputText.value
    console.log(consulta)
    console.log(productosArray.filter(producto => producto.nombre.toLowerCase().includes(consulta.toLowerCase())))
})
*/

mostrarProductos(productosArray)

//toca en 'comprar' y se suma el total en consola.
boton1.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto1)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton2.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto2)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton3.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto3)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton4.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto4)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton5.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto5)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton6.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto6)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})

boton7.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto7)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton8.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto8)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton9.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto9)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton10.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto10)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton11.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto11)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton12.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto12)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton13.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto13)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton14.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto14)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton15.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto15)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
boton16.addEventListener('click', ()=> {
    carro.agregarAlCarro(producto16)
    console.clear()
    carro.MostrarCarro()
    carro.MostrarTotal()
})
