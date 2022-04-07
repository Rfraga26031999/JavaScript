// Declaracion y asignacion de la variable iva, unico impuesto a tener en cuenta para la facturacion de la compra.
let iva = 0.21;

// Necesaria la declaracion y asignacion de la variable g para el funcionamiento de calcularGanancia().
let porcentajeGanancia = 0;

// Funcion para agregar el IVA al total del producto.
function calcularIva(precio) {
  return precio * (1 + iva);
}

class Articulo {

  constructor(producto, costo, peso, marca, descripcion) {
    this.producto = producto;
    this.costo = costo;
    this.peso = peso;
    this.marca = marca;
    this.descripcion = descripcion;
  }
  // En base al costo del producto, este metodo determinara un porcentaje de ganancia predeterminado.
  calcularPrecioDeVenta() {
    if(this.costo > 0 && this.costo < 2000) {
      porcentajeGanancia = 0.4;
      return calcularIva(this.costo * (1 + porcentajeGanancia));
    }
    else if(this.costo >= 2000 && this.costo < 4000) {
      porcentajeGanancia = 0.3;
      return calcularIva(this.costo * (1 + porcentajeGanancia));
    }
    else if(this.costo >= 4000 && this.costo < 8000) {
      porcentajeGanancia = 0.25;
      return calcularIva(this.costo * (1 + porcentajeGanancia));
    }
    else if(this.costo >= 8000) {
      porcentajeGanancia = 0.15;
      return calcularIva(this.costo * (1 + porcentajeGanancia));
    }
    else {
      return `ERROR: el producto ${this.producto} no puede costarnos $${this.costo}, salvo que el proveedor este bondadoso.`;
    }
  }
}

const producto1 = new Articulo(
  "Mancuerna",
  5000,
  "5 KG",
  "Fit",
  `La ${this.producto} de la marca ${this.marca} es recomendada por su agarre y dimensiones.
  Posee un peso de ${this.peso} excelente para principiantes, a tan solo un precio de $${this.costo}!`
);

const producto2 = new Articulo(
  "Proteina",
  3000,
  "2.9 KG",
  "Re-Groso",
  `La ${this.producto} de la marca ${this.marca} es recomendada por su alto contenido de aminoacidos y su sabor. 
  Posee un peso de ${this.peso} excelente para generar masa muscular, a tan solo un precio de $${this.costo}!`
);

// De esta manera, generamos un array a modo de carrito de compras donde se van agrupando los productos.
let productosElegidos = [
  producto1,
  producto2
];

// Solicitamos algunos datos para mejorar la experiencia de usuario.
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let eleccion = prompt(
  `Hola ${nombre}, bienvenid@ a Welfare!
  Selecciona los productos que desees.
  Digite 1 para: ${producto1.producto} $${producto1.calcularPrecioDeVenta()}
  Digite 2 para: ${producto2.producto} $${producto2.calcularPrecioDeVenta()}.`
);

let total = 0;
let seleccion = [];

// Esta funcion nos sirve para iterar la seleccion de productos del usuario y los va sumando al array vacio de arriba, hasta que este digite NO.
function eleccionDeProductos() {
  while(eleccion != "NO") {

    console.log(
      `Seleccionaste: ${productosElegidos[eleccion - 1].producto} con un valor de $${productosElegidos[eleccion - 1].calcularPrecioDeVenta()}`);
    
    seleccion.push(productosElegidos[eleccion - 1].producto);
    total += productosElegidos[eleccion - 1].calcularPrecioDeVenta(); 

    eleccion = prompt(
      `${nombre}, ¿Desea continuar con su compra?
      En caso de que su compra haya finalizado, digite NO.
      Digite 1 para: ${producto1.producto} $${producto1.calcularPrecioDeVenta()}
      Digite 2 para: ${producto2.producto} $${producto2.calcularPrecioDeVenta()}`
    );
  }
  console.log(`${nombre}, el total a pagar es: $${total}`);
}

eleccionDeProductos();

// TNA significa Tasa Nominal Anual, es la tasa que por lo general nos indican los bancos a la hora de ofrecernos sus servicios.
let tna = 0.3;

// Funcion utilizada para convertir la tasa anual a mensual.
function tasaMensual() {
  return (tna / 365) * 30;
}

let nPeriodo = 0;

// La tasa es nominal (de interes simple), por lo tanto, no esta considerando la verdadera forma de los intereses en una financiacion, la cual es de interes compuesto.
// Mediante esta funcion convertimos la tasa nominal a efectiva.
function conversionTasaEfectiva(nPeriodo) {
  return ((1 + tasaMensual()) ** nPeriodo) - 1;
}

// Dependiendo del digito ingresado por el usuario, esta funcion nos retorna el interes predeterminado para esa cantidad de cuotas.
function calcularInteres(digito) {
  if(digito === 3) {
    return conversionTasaEfectiva(3);
  }
  else if(digito === 6) {
    return conversionTasaEfectiva(6);
  }
  else if(digito === 12) {
    return conversionTasaEfectiva(12);
  }
  else {
    alert(`Nuestro sistema crediticio no maneja plazos de ${digito} meses.`);
  }
}

// Esta funcion convierte un numero ingresado por parametro a porcentaje y lo arregla con 2 decimales.
function convertirPorcentaje(numero) {
  return (numero * 100).toFixed(2);
}

// Esta funcion tiene como base la formula de un sistema de amortizacion frances, muy utilizado en prestamos y financiaciones.
// Nos ayudara a determinar la cuota que debera pagar el usuario dependiendo de la cantidad de meses de interes.
function calcularCuota(monto, tasa, meses) {
  return (monto * (tasa / (1 - (1 + tasa)**-meses))).toFixed(2);
}


// La siguiente funcion es utilizada para determinar el metodo de pago, dandonos opciones de pagar con credito o debito.
// Dependiendo de la opcion, nos regresara un mensaje de compra exitosa o nos dirigira a un prompt donde podremos elegir la cantidad de cuotas.
function pagar() {

  let metodoPago = parseInt(prompt(`${nombre}, el monto a pagar es: $${total}.
  ¿Como deseas abonar?
  Digite 1 para Debito
  Digite 2 para Credito: `));

  if(metodoPago === 1) {
    let tarjeta = prompt("Ingrese el numero de su tarjeta de debito: ");
    document.write(`${nombre}, tu pago fue procesado con exito, gracias por comprar en Welfare!<br><br>
    <b>Detalle de la compra.</b><br><br>
    <b>Compra a nombre de:</b> ${nombre} ${apellido}<br>
    <b>Numero de tarjeta:</b> ${tarjeta}<br>
    <b>Productos seleccionados:</b> ${seleccion}<br>
    <b>Total abonado:</b> $${total}`);
  }

  else if(metodoPago === 2) {
    let tarjeta = prompt("Ingrese el numero de su tarjeta de credito: ");
    
    let cuotas = parseInt(prompt(`${nombre}, ¿En cuantas cuotas desea realizar su pago?
    Digite 1 para 3 cuotas con un recargo del % ${convertirPorcentaje(calcularInteres(3))} (cuotas de $${calcularCuota(total, calcularInteres(3), 3)})
    Digite 2 para 6 cuotas con un recargo del % ${convertirPorcentaje(calcularInteres(6))} (cuotas de $${calcularCuota(total, calcularInteres(3), 6)})
    Digite 3 para 12 cuotas con un recargo del % ${convertirPorcentaje(calcularInteres(12))} (cuotas de $${calcularCuota(total, calcularInteres(3), 12)})`));

    let recargo = 0;

    switch(cuotas) {
      case 1:
        recargo = total * calcularInteres(3);
        total += recargo;
        document.write(`${nombre}, tu pago fue exitoso, gracias por comprar en Welfare!<br><br>
        <b>Detalles de la compra:</b><br><br>
        <b>Compra a nombre de:</b> ${nombre} ${apellido}<br>
        <b>Numero de tarjeta:</b> ${tarjeta}<br>
        <b>Productos seleccionados:</b> ${seleccion}<br>
        <b>Total abonado:</b> $${total.toFixed(2)}`);
        break;

      case 2:
        recargo = total * calcularInteres(6);
        total += recargo;
        document.write(`${nombre}, tu pago fue exitoso, gracias por comprar en Welfare!<br><br>
        <b>Detalles de la compra:</b><br><br>
        <b>Compra a nombre de:</b> ${nombre} ${apellido}<br>
        <b>Numero de tarjeta:</b> ${tarjeta}<br>
        <b>Productos seleccionados:</b> ${seleccion}<br>
        <b>Total abonado:</b> $${total.toFixed(2)}`);
        break;

      case 3:
        recargo = total * calcularInteres(12);
        total += recargo;
        document.write(`${nombre}, tu pago fue exitoso, gracias por comprar en Welfare!
        <b>Detalles de la compra:</b><br><br>
        <b>Compra a nombre de:</b> ${nombre} ${apellido}<br>
        <b>Numero de tarjeta:</b> ${tarjeta}<br>
        <b>Productos seleccionados:</b> ${seleccion}<br>
        <b>Total abonado:</b> $${total.toFixed(2)}`);
        break;
    }
  }
  else {
    alert("No se pudo realizar su pago correctamente, por favor, vuelva a intentarlo.");
  }
}

pagar();