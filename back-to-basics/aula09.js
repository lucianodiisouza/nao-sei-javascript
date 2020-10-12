// Exercícios LET & CONST
// Luciano dii Souza tem 29 anos, pesa 111 kg e tem 1.72 de altura,
// seu imc é 36.28. Luciano nasceu em 1991.
const nome = "Luciano";
const sobrenome = "dii Souza";
const idade = 29;
const peso = 111;
const altura = 1.75;

// calcular imc - fórmula: (peso/ (altura*altura)
let imc = peso / (altura * altura);

// idade - ano
let anoNascimento = 2020 - idade;

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg e tem ${altura}mts de altura. o IMC de ${nome} é ${imc} e ele nasceu em ${anoNascimento}`
);
