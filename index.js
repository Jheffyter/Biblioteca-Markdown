const chalk = require ("chalk");

console.log (chalk.blue ("Vamos começar!"));

const paragrafo = "Texto retornado por uma função";

function texto (string) {
  return string;
}

console.log (texto (paragrafo));