//Transformar notas escolares

/*
  >    90 - A
  80 - 89 - B
  70 - 79 - C
  60 - 69 - D
  <    60 - F 
*/

let nota = 70;

let notaA = nota > 90;
let notaB = nota >= 80 && nota <= 89;
let notaC = nota >= 70 && nota <= 79;
let notaD = nota >= 60 && nota <= 99;
let notaF = nota < 59;

if (notaA) {
  console.log('A');
} else if (notaB) {
  console.log('B');
} else if (notaC) {
  console.log('C');
} else if (notaD) {
  console.log('D');
} else {
  console.log('F');
}

//Gastos Familiares

const gastos = {
  receitas: ['10', '20', '30', '40'],
  despesas: ['5', '10', '15', '20'],
};

function calcula(gastos) {
  total = 0;

  for (let valor of gastos) {
    total += valor;
  }
  return total;
}

function balanco() {
  const receita = calcula(gastos.receitas);
  const despesa = calcula(gastos.despesas);

  const totalBalanco = receita - despesa;

  if (totalBalanco > 0) {
    console.log('saldo positivo');
  } else {
    console.log('saldo negativo');
  }
}

balanco();

//celsius em fahrenheit

/*
  Formulas:
  C = (F - 32) * 5/9
  F = C * 9/5 + 32
*/

const temperatura = '50f';

function converteTemperatura(temp) {
  const verifyC = temp.toUpperCase().includes('C');
  const verifyF = temp.toUpperCase().includes('F');
}

converteTemperatura(temperatura);
