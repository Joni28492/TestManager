const fs = require("fs");

let { dirtyText, listadoCorrectas } = require("./examData");

let preguntas = [...dirtyText.split(/\d.-\s/g)];
let test = [];

preguntas.forEach((p) => {
  test.push(p.split(/\D\)/g));
});
test.shift();

let exam = test.flat(); //* Array plano con toda la info

//TODO exportar a archivo
//TODO agregar key para pregunta
let contador = 0;

let completo = [];
let obj = {};
const details = {
  municipio: "castrillon",
  anio: 2022,
  plaza: "Aux",
};

//? se utiliza un for normal para mejor compresion del codigo
for (let i = 0; i <= (exam.length - 1) / 5; i += 5) {
  obj[`pregunta`] = exam[i];
  obj[`a`] = exam[i + 1];
  obj[`b`] = exam[i + 2];
  obj[`c`] = exam[i + 3];
  obj[`d`] = exam[i + 4];
  completo.push({
    ...obj,
    ...details,
    // correcta: listadoCorrectas[contador - 1],
  });

  obj = {};
}

console.log(completo);

fs.writeFileSync("./json/castrillon_2022_Aux.json", JSON.stringify(completo));
