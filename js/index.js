var numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada iteracion"));
var suma = 0;
var sumaTotal = 0;
for(let i=0; i < 3; i++){
  var numero2 = parseInt(prompt("Ingrese el numero para sumar"));
  suma = numero1 + numero2;
  console.log(`La suma parcial de $${numero1} y $${numero2} es: $${suma}`);
  sumaTotal += suma;
}
console.log(`La suma total de las sumas parciales es: $${sumaTotal}`);