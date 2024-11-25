// Ejercicio 1: Permutación de variables
function permuta() {
  let a = parseInt(document.getElementById("permA").value);
  let b = parseInt(document.getElementById("permB").value);

  // Intercambio de valores
  [a, b] = [b, a];

  document.getElementById(
    "permOutput"
  ).innerText = `Los valores permutados son: A = ${a}, B = ${b}`;
}

// Ejercicio 2: Conteo hasta un número
function cuenta() {
  const limite = parseInt(document.getElementById("countLimit").value);
  let resultado = "Conteo: ";

  for (let i = 0; i <= limite; i++) {
    resultado += `${i} `;
  }

  document.getElementById("countOutput").innerText = resultado;
}

// Ejercicio 3: Verificar si un número es positivo, negativo o nulo
function verifica() {
  const num = parseInt(document.getElementById("numCheck").value);
  let mensaje = "";

  if (num > 0) {
    mensaje = "El número es positivo.";
  } else if (num < 0) {
    mensaje = "El número es negativo.";
  } else {
    mensaje = "El número es nulo.";
  }

  document.getElementById("verificaOutput").innerText = mensaje;
}
