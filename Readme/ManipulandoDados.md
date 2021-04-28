> # Manipulando Dados

<br>

> ## **Conteúdos**

<br>

<!--ts-->

- [Prototype](./sobre)
- [Type conversion coersion](#objetivo)
- [Strings em números](#comoFunciona)
- [Contando caracteres e digitos](#tecnologiasFerramentas)
- [Casas decimais](./PrimeirosPassos.mdPrimeirosPassos)
- [Maiúsculas e minúsculas](./TiposDeDados.md)
- [Separando strings](./variaveis.md)
- [Encontrando palavras em frases](./PraticandoAvancando)
- [Criando array com construtor](./Funcoes)
- [Elementos do Array](./ManipulandoDados)
- [Strings para arrays](#como-usar)
- [Manipulando arrays](#como-usar)

<!--te-->

<br><br>

> ## **Prototype.**

- prototype-base
- prototype chain
- **proto**

O JS e uma linguagem baseada em prototipos, e possui uma cadeia de prototipos.
Onde a "maioria" dos objetos possui um prototipo.

<br><br>

> ## **Type conversion coersion.**

Coerção de tipos (type coercion) é o processo de conversão de um valor de um tipo, para outro (como a conversão de uma string para um número, um objeto para um booleano e etc). Qualquer tipo, seja primitivo ou um objeto, é um sujeito válido para coerção de tipo.

Quando explicitamente fazemos uma conversão de um dado para o outro.

```
  //Type Conversion / Coersion
  console.log(Number("9") + 5); //14

```

<br><br>

> ## **Strings em números.**

Transformar Strings em Números e Números em Strings

```
  //string para numero
  let string = "123";
  console.log(Number(string));

  //numero para string
  let numero = 321;
  console.log(String(numero));
```

<br><br>

> ## **Contando caracteres e digitos**

Contaremos qts caracteres tem a palavra e qts digitos tem o numero

```
  let word = "Paralelepipedo"
  console.log(word.length); //14

  let number = 1234;
  console.log(String(number).length) //4

```

<br><br>

> ## **Casas decimais**

Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula.

```
  //colocar 2 casas decimais
  let number = 812.451435
  console.log(number.toFixed(2))

  //trocar o ponto por vírgula
  console.log(number.toFixed(2).replace(".", ","))

```

<br><br>

> ## **Maiúsculas e minúsculas**

Transformar letras minúsculas em maiúsculas.

```
//minuscula em maiuscula.
let word = "Programar é muito bacana!"
console.log(word.toUpperCase());

console.log(word.toLowerCase());
```

<br><br>

> ## **Separando strings**

Separe um texto que contem espaços, em um novo array, onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque \_

```

 let phrase = 'Programar é muito bacana!';

let myArray = phrase.split(' ');
console.log(myArray);

let phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore);


```

<br><br>

> ## **Encontrando palavras em frases**

Verificar se o texto contém a palavra "bacana"

```
  let word = "Programar é muito bacana!"
  console.log(word.includes("bacana")); //true

```

O includes é case sensitive.

<br><br>

> ## **Criando array com construtor**

Criando um array com um construtor

```

  let myArray = new Array(10);

  console.log(myArray);
  console.log(myArray.length);

```

Foi criado um array com 10 posições, porém todos vazios nesse caso.

<br><br>

> ## **Elementos do Array**

Contar elementos do array

```
let myArray = [
  ' A ',
  ' b ',
  1,
  { type: 'array' },
  () => {
    return 'oi';
  },
].length;

console.log(myArray);

```

<br><br>

> ## **Strings para arrays**

Transformando uma cadeia de caracteres em elementos de um array

```
  let word = "Programar!"
  console.log(Array.from(word))

```

<br><br>

> ## **Manipulando Arrays**

- adicionar um item no fim
- Adicionar no começo
- Remover o fim
- Remover o começo
- Pegar somente alguns elementos do array
- Remover 1 ou mais itens de qualquer posição do array
- Encontrar a posição de um elemento do array

```
  let techs = ['html', 'css', 'react', 'js'];

  //adicionar um item no fim
  let ex1 = techs.push('nodeJs');
  console.log('ex1 = ' + ex1);

  //Adicionar no começo
  let ex2 = techs.unshift('sql');
  console.log('ex2 = ' + ex2);

  //Remover o fim
  let ex3 = techs.pop();
  console.log('ex3 = ' + ex3);

  //Remover o começo
  let ex4 = techs.shift();
  console.log('ex4 = ' + ex4);

  //Pegar somente alguns elementos do array
  let ex5 = techs.slice(1, 3);
  console.log('ex5 = ' + ex5);

  //remover 1 ou mais elementos do array
  let ex6 = techs.splice(1, 1); //qtos e qual elemento
  console.log('ex6 = ' + ex6);

  //encontrando a posição do array
  let idx = techs.indexOf('css');
  console.log('posição' + idx);
  techs.splice(idx, 1);

  console.log(techs);
```
