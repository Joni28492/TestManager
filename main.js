//* node
const fs =require('fs');

//?internal
const { solutionsToArr, 
        questionSplitter,
        questionToArrayChilds, 
        questionsToJson } = require('./helpers/fileManagement');

// ~ three part pkg



// ! si no existe el archivo crashea, add trycatch
let txt = (fs.readFileSync) && fs.readFileSync("./examen.txt",{encoding:"utf-8"})

//TODO Multilinea unilinea
let soluciones = fs.readFileSync("./solucion.txt",{encoding:"utf-8"})
const solucionesArr = [];

let nombreArchivo ="nombreArchivo", extension = "json";
let examen = [], completo = [];
const details = {
    municipio: "castrillon",
    anio: 2022,
    plaza: "Aux",
};

solutionsToArr(soluciones, solucionesArr)
txt = questionSplitter(txt)
questionToArrayChilds(txt, examen)
questionsToJson(examen, completo, solucionesArr, details) //smell

// console.log(completo[54])


fs.writeFileSync(`${__dirname}/json/${nombreArchivo}.${extension}`, JSON.stringify(completo)); //absolute Route




    




