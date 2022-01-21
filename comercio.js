/*
Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:

Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL

Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente

Implementen los objetos Artículo y Venta usando JavaScript.
*/

let productos = {
    producto1: {
        nombre:"chachitos",
        descripcion:"cereal a base de trigo muy delicioso",
        precio:15,
        cantidad:250,
        foto:"https://tenor.com/es/ver/john-cena-chachitos-cereal-gif-19932615"
    },
    producto2: {
        nombre:"nutrileche",
        descripcion:"leche muy deliciosa",
        precio:10,
        cantidad:1,
        foto:"https://i.redd.it/ctfhavulsx231.jpg"
    },
    producto3: {
        nombre:"ChocoTavo de Fresa",
        descripcion:"Chocomilk muy deli",
        precio:18.50,
        cantidad:500,
        foto:"https://http2.mlstatic.com/D_NQ_NP_875348-MLM43826141959_102020-V.jpg"
    }
}

let venta={
    articulos: function(){
        return (productos.producto1.nombre+"\n"+productos.producto2.nombre +"\n"+productos.producto3.nombre);
    },
    total: function (){
        return productos.producto1.precio + productos.producto2.precio + productos.producto3.precio;
    },
    id: 1234456,
    email: "atlas_hokage97@gmail.com"
}

document.getElementById("articulos").innerHTML = venta.articulos();
document.getElementById("totalArticulos").innerHTML = venta.total();