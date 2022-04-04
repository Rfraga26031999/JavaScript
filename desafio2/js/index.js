// Solicitar datos al usuario

totalPrestamo = parseInt(prompt("Ingrese el total del prestamo solicitado: "));
tasaInteres = parseInt(prompt("Ingrese la tasa de interes mensual del prestamo en porcentaje: "));
meses = parseInt(prompt("Ingrese la cantidad de meses: "));

// Funcion para expresar de otra manera el dato ingresado en porcentaje.

function convertirPorcentaje (n) {
  return n / 100;
}

// Funcion para calcular la cuota a pagar mensualmente.

function calcularCuotaMensual () {
  let tasa = convertirPorcentaje(tasaInteres);
  return (totalPrestamo * (tasa / (1 - (1 + tasa)**-meses))).toFixed(2);
}

// Llamado de la funcion.

alert(`Usted debera abonar durante ${meses} meses el monto de: $${calcularCuotaMensual()}`);
