const estudiantes = [];

function calcularNotaDefinitiva(nombre, nota1, nota2, nota3) {
  const pesoNota1 = 0.25;
  const pesoNota2 = 0.35;
  const pesoNota3 = 0.40;

  const notaDefinitiva = nota1 * pesoNota1 + nota2 * pesoNota2 + nota3 * pesoNota3;

  if (notaDefinitiva >= 4) {
    return `${nombre} aprobó con nota definitiva de ${notaDefinitiva}.`;
  } else if (notaDefinitiva >= 3.5) {
    return `${nombre} tiene derecho a nivelatorio con nota definitiva de ${notaDefinitiva}.`;
  } else {
    return `${nombre} perdió la materia con nota definitiva de ${notaDefinitiva}.`;
  }
}

function registrarEstudiante() {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const nota1 = parseFloat(prompt("Ingrese la primera nota:"));
  const nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
  const nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

  const resultado = calcularNotaDefinitiva(nombre, nota1, nota2, nota3);
  estudiantes.push({
    nombre,
    notaDefinitiva: resultado,
  });
}

function iniciarSesion() {
  const username = prompt("Ingrese su nombre de usuario:");
  const password = prompt("Ingrese su contraseña:");

  if (username === "usuario" && password === "contrasena") {
    console.log("Sesión iniciada. Puede registrar las notas de los estudiantes.");
  } else {
    console.log("Credenciales incorrectas. No se puede acceder a la aplicación.");
  }
}

iniciarSesion();

while (true) {
  const opcion = prompt("Ingrese '1' para registrar un estudiante o '0' para salir:");

  if (opcion === '1') {
    registrarEstudiante();
  } else if (opcion === '0') {
    break;
  } else {
    alert("Opción no válida. Por favor, ingrese '1' o '0'.");
  }
}

console.log("Resultados de los estudiantes:");
for (const estudiante of estudiantes) {
  console.log(estudiante.notaDefinitiva);
}