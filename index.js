const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let persons = []; // Lista para almacenar los datos

// Función para realizar preguntas al usuario
const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const main = async () => {
  try {
    // Preguntar la cantidad de personas
    const totalPersons = parseInt(await askQuestion("Ingrese la cantidad de personas que desea registrar: "), 10);

    if (isNaN(totalPersons) || totalPersons <= 0) {
      console.log("Por favor, ingrese un número válido mayor a 0.");
      rl.close();
      return;
    }

    // Registrar las personas
    for (let i = 1; i <= totalPersons; i++) {
      console.log(`\n--- Registro de la persona n°${i} ---`);
      const name = await askQuestion("Ingrese el nombre: ");
      const age = parseInt(await askQuestion("Ingrese la edad: "), 10);
      const note = parseFloat(await askQuestion("Ingrese la nota: "));

      // Validar entradas numéricas
      if (isNaN(age) || isNaN(note)) {
        console.log("Edad o nota inválida. Por favor, ingrese valores numéricos.");
        i--; // Repetir este registro
        continue;
      }

      persons.push({
        name: name,
        age: age,
        note: note,
      });
    }

    // Ordenar las personas por la nota de mayor a menor
    persons.sort((a, b) => b.note - a.note);

    // Mostrar los datos ordenados
    console.log("\nDatos registrados ordenados por nota (de mayor a menor):");
    console.table(persons);

    rl.close();
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
    rl.close();
  }
};

main();
