// Solicitar datos al usuario

totalPrestamo = prompt("Ingrese el total del prestamo solicitado: ");
tasaInteres = prompt("Ingrese la tasa de interes mensual del prestamo en porcentaje: ");
meses = prompt("Ingrese la cantidad de meses: ");

// Funcion para expresar de otra manera el dato ingresado en porcentaje.

function convertirPorcentaje () {
  return parseInt(tasaInteres) / 100;
}

// Funcion para calcular la cuota a pagar mensualmente.

function calcularCuotaMensual () {
  let tasa = convertirPorcentaje(tasaInteres);
  return (parseInt(totalPrestamo) * (tasa / (1 - (1 + tasa)**-parseInt(meses)))).toFixed(2);
}

// Llamado de la funcion.

alert(`Usted debera abonar durante ${meses} meses el monto de: $${calcularCuotaMensual()}`);