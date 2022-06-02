// console.log("img recognizer");
// // https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016
// const Tesseract = require("tesseract.js");
// const examen = "";

// Tesseract.recognize("./examOviedo.jpg", "spa", {
//   logger: (m) => console.log(m),
// }).then(({ data: { text } }) => {
//   examen = text;
//   console.log(text);
// });

const { createWorker } = require("tesseract.js");

const worker = createWorker({ logger: (m) => console.log(m) });

(async () => {
  await worker.load();
  await worker.loadLanguage("spa");
  await worker.initialize("spa");
  const {
    data: { text },
  } = await worker.recognize("./examOviedo.jpg");
  console.log(text.progress);
  await worker.terminate();
})();
