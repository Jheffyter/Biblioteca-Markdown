const chalk = require ("chalk");
const fs = require ("fs");

function extraiLinks (texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec (texto)) !== null) {
    arrayResultados.push ({[temp[1]]: temp[2]});
  }
  return arrayResultados.length === 0 ? "Não há links" : arrayResultados;
}

function trataErro (erro) {
  throw new Error (chalk.red (erro
    .code, "Não há arquivo no caminho."));
}

//tratando de forma assincrona promises com async e await
async function pegaArquivo (caminhoDoArquivo) {
  const encoding = "UTF-8";
  try {
    const texto = await fs.promises
      .readFile (caminhoDoArquivo, encoding);
    return extraiLinks (texto);
  } catch (erro) {
    trataErro (erro);
  }  
}

//tratando de forma assincrona promises com .then e .catch
/* function pegaArquivo (caminhoDoArquivo) {
  const encoding = "UTF-8";
  fs.promises
    .readFile (caminhoDoArquivo, encoding)
    .then ((texto) => console.log (chalk.green (texto)))
    .catch ((erro) => trataErro (erro));
} */

//tratando do markdown de forma sincrona em texto pequeno
/* function pegaArquivo (caminhoDoArquivo) {
  const encoding = "UTF-8"
  fs.readFile (caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      trataErro (erro);
    }
    console.log (chalk.green (texto));
  })
} */

module.exports = pegaArquivo;