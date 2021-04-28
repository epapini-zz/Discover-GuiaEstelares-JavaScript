> # Expressões e Operadores

**Operadores**

O JavaScript possui os tipos de operadores a seguir. Esta seção descreve os operadores e contém informações sobre precedência de operadores.

<br>

**Expressões**

Uma expressão consiste em qualquer unidade válida de código que é resolvida como um valor.

Conceitualmente, existem dois tipos de expressões: aquelas que atribuem um valor a uma variável e aquelas que simplesmente possuem um valor.

A expressão x = 7 é um exemplo do primeiro tipo. Esta expressão utiliza o operador = para atribuir o valor sete à variável x. A expressão em si é avaliada como sete.

O código 3 + 4 é um exemplo do segundo tipo de expressão. Esta expressão utiliza o operador + para somar três e quatro sem atribuir o resultado, sete, a uma variável.

O JavaScript possui as seguintes categorias de expressão:

- **Aritmética**: é avaliada como um número, por exemplo 3.14159. (Geralmente utiliza operadores aritméticos).
- **String**: é avaliada como uma string de caracteres, por exemplo, "Fred" ou "234". (Geralmente utiliza operadores de string).
- **Lógica**: é avaliada como verdadeira ou falsa. (Costuma envolver operadores lógicos).

- **Expressões primárias**: Palavras reservadas e expressões gerais do JavaScript.
-
- **Expressão lado esquerdo**: atribuição à esquerda de valores.

<br><br>

> ### **Conteúdo**

<!--ts-->

- [New](#New)
- [Typeof delete](#TypeofDelete)
- [Operadores aritméticos](#OperadoresAritmeticos)
- [Grouping operator](#GroupingOperator)
- [Operadores de comparação igual e diferente de](#OperadoresCompracacao1)
- [Operadores de comparação estritamente igual e estritamente diferente](#OperadoresCompracacao2)
- [Operadores de comparação maior e menor (igual)](#OperadoresCompracacao3)
- [Operadores de atribuição](#OperadoresAtribuicao)
- [Operadores lógicos](#OperadoresLogicos)
- [Operador condicional ternário](#OperadorTternario)
- [Operadores para string](#OperadoresString)
- [Falsy e truthy](#FalsyTruthy)
- [Precedência dos operadores](#PrecedenciaOperadores)

<br><br>

> ## New

Expressão usada para criar um novo objeto.

```
  let name = new String("João");
  let age = new Number(33);

  console.log(name, age)
```

<br><br>

> ## **Typeof delete**

Operadores unários

- typeOf
- delete

```
const person = {
  name: "João",
  age: 25,
}

delete person.age; //deletando a idade

console.log(person)
```

<br><br>

> ## **Operadores Aritiméticos**

- Multiplicação
- Divisão
- Soma
- Subtração

- Resto da divisão
- Incremento
- Decremento
- Exponencial

```
  //soma
  console.log(10 + 10); //20

  //subtração
  console.log(10 - 5); //5

  // multiplicação
  console.log(10 * 5); //50

  //divisão
  console.log(10 / 5); //2

  //Resto da divisão
  console.log(10 % 5); // 0
  console.log(11 % 3); // 2

  //incremento
  let increment = 0;
  increment++;
  console.log(increment); //1

  //decrement
  let decrement = 5;
  decrement--;
  console.log(decrement); //4

  //exponencial
  console.log(3 ** 3); //3^3 = 27

```

<br><br>

> ## **Grouping operator**

São os parenteses ()

```
  let totalSemParenteses = 2 + 3 * 5
  console.log(totalSemParenteses)

  let totalComParenteses = (2 + 3) * 5
  console.log(totalComParenteses)
```

<br><br>

> ## **Operadores de comparação igual a e diferente de**

Comprar valores e retornara um Boolean como resposta da comparação

```
  let one = 1;
  let two = 2;

  // == igual a
  console.log(two == 1) //false
  console.log(one == "1") // true

  // !=   diferente de
    console.log(two != 1) //true
  console.log(one != "1") // false

```

<br><br>

> ## **Operadores de comparação estritamente igual e estritamente diferente**

Estritamente compara os valores e os tipos

```
  let one = 1;
  let two = 2;

  // ==  estritamente igual a
  console.log(one === 1); //true
  console.log(one === '1'); // false

  // !=   estritamente diferente de
  console.log(two !== 2); //false
  console.log(two !== '2'); // true

```

<br><br>

> ## **Operadores de comparação maior e menor (igual)**

Compara o valores entre duas variáveis

```
  let one = 1;
  let two = 2;

  // > maior que
  console.log(one > two); // false;

  // < menor que
  console.log(one < two); //true

  // >= maior igual
  console.log(one >= two); //false
  console.log(one >= 1); //true
  console.log(two >= 2); //true

  // >= maior igual
  console.log(one <= two); //true
  console.log(one <= 1); //true
  console.log(two <= 2); //true
```

<br><br>

> ## **Operadores de atribuição**

```
  //assingment
  x = 1;
  console.log(x); //1

  //soma
  // x = x + 2
  x += 2;
  console.log(x); //3

  //subtracao
  // x = x - 2
  x -= 2;
  console.log(x); //1

  //Multiplicação
  // x = x * 2
  x *= 2;
  console.log(x); //2

  //Divisão
  // x = x / 2
  x /= 2;
  console.log(x); //1

  //resto
  // x = x % 2
  x %= 2;
  console.log(x); //1

  //exponencial
  // x = x ** 2
  x **= 2;
  console.log(x); //1
```

<br><br>

> ## **Operadores lógicos**

São dois operadores logicos que quando verificados retornará true ou false

| Operação | Descrição | Exemplo    | Resultado |     |
| -------- | --------- | ---------- | --------- | --- |
| &&       | AND       | (A && B)   | false     |     |
| \|\|     | OR        | (A \|\| B) | true      |     |
| !        | NOT       | !(A && B)  | true      |     |

[Tables Generator](https://www.tablesgenerator.com/markdown_tables)

<br><br>

> ## **Operador condicional ternário**

Dependendo da condição, nos recebemos valores diferentes

`condition ? expr1 : expr2`

`const variavel = condicao ? valorSeTrue : valorSeFalse;`

```
let age = 16;

const canDrive = age >= 18 ? 'pode dirigir' : 'não pode dirigir';
console.log(canDrive); //nao pode dirigir

```

<br><br>

> ## **Operadores para string**

Comparação

```
console.log("a"=="a") //aa
```

Concatenação

```
console.log("Jo" + "ão"); //João
```

<br><br>

> ## **Falsy e truthy**

[RocketSeat = Falsy e truthy ](https://blog.rocketseat.com.br/entendendo-falsy-e-truthy-no-javascript/)

<br><br>

> ## **Precedência dos operadores**

<br><br>

| Tipo                    | Sintaxe       |
| ----------------------- | ------------- |
| Grouping                | ()            |
| Negação e Incremento    | ! ++ --       |
| Multiplicação e Divisão | \* /          |
| Adição e Subtração      | + -           |
| Relacional              | < <= > >=     |
| AND                     | &&            |
| OR                      | \|\|          |
| Condicional             | ?:            |
| Atribuição              | = += -= \*=   |
| igualdade               | == != === !== |
