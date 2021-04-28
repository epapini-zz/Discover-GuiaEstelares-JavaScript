/*
  1: Declare uma variavel de nome weight
*/

let weight;

console.log(
  '******************************************************************'
);

/*
  2: Qual o tipo de variavel acima? 
  */

console.log(typeof wight);
//undefined

/*
  3: Declare uma variável e atribua valores para cada variável
    name: string
    age: Number
    Stats: Number
    isSubcribed: Boolean
 */

const name = 'João';
let age = 30;
const stars = 4;
let isSubcribed = true;

console.log(`
        Name ${typeof name}, 
        Age ${typeof age}, 
        Stars ${typeof stars}, 
        subscribed ${typeof isSubcribed} 
        `);

/* 
  4: A váriavel student abaixo é um tipo de dados?
    a) Atribua a ela as mesmas propriedades e valores do exercicio 3.
    b) Mostre no console a seguinte mensagem

    <nome> de idade <age> pesa <weigth> kg

    substitua vas variaveis pelas propriedades do objeto
*/

const student = {
  name: 'joao',
  age: 30,
  stars: 4,
  isSubcribed: true,
  weight: 80.4,
};

console.log(`
${student.name} de idade ${student.age}, e pesa ${student.weight} kg
`);

/*
  5: Declare uma variável do tipo Array, de um nome studentes e atribua a ela
      nenhum valor, ou seja, somente um array vazio; 
*/

let students = [];

/*
  6: Reatruba valor para a variável acima, colocando dentro dela o objeto
    studant da questão 4. 
*/

students = [student];

/*
  7: Coloque no console o valor da posição zero
*/

console.log(students[0]);

/*
  8: Crie um student e coloque a posição 1 do Array students
*/

const newStudent = {
  name: 'maria',
  age: 23,
  weight: 60.4,
};

students[1] = newStudent;

console.log(students);

/*
  9: Sem rodas o codigo responda qual é a resposta do codigo abaixo, 
  e pq?

  console.log(a)
  var a = 1;

*/

/*
Resposta:
 undefined pois o a e declarado após a sua chamada.
  Isso ocorre por conta do Hoisting
*/
