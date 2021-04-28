> # Praticando e Avançando (REVISÃO)

<br>

> ### **Conteúdo**

<!--ts-->

- [Declaration assignment var](#DeclarationAssignmentVar)
- [Agrupando declarações](#AgrupandoDeclarações)
- [Concatenando e interpolando variáveis](#ConcatenandoInterpolandoVariáveis)
- [Objects](#Objects)
- [Arrays](#Arrays)
- [Exercícios](#Exercícios)

<!--te-->

<br><br>

> ## Declaration assignment var

```
  //Variáveis e tipos de dados
  //declaração
  var name

  // assignment ou atribuição de valores
  name = "RocketSeat"

  //tipo de variavel
  console.log(typeof name);
```

<br><br>

> ## Agrupando declarações

```
  //Agrupando declarações
  let age, isHuman

  age= 18;
  isHuman= true;

  console.log(age, isHuman);
```

<br><br>

> ## Concatenando e Interpolando variáveis

```
 //Agrupando declarações
let name, age, isHuman;

name = 'João';
age = 18;
isHuman = true;

//concatenando
console.log('O ' + name + ' tem ' + age + ' anos');

//interpolando valores com template literals
console.log(`O ${name} tem ${age} anos`)
```

<br><br>

> ## Objects

```
  const pessoa = {
    name: "Joao",
    age: 30,
    weight: 80.5,
    isAdmin: true
  }

  //pegando os valores de um objeto
  console.log(pessoa.name) //nome
  console.log(pessoa.age) //age
  console.log(pessoa.weight) //weight

  //com interpolação:
  console.log(`O ${pessoa.name} tem ${pessoa.age} anos`)

```

<br><br>

> ## Arrays

```
  const animals = {
    "lion", "Monkey", "Cat"
  }

  //Acessando os dados do array
  console.log(animals) //todos

  //primeira posição
  console.log(animals[0]) //lion

  //total de elementos
    console.log(animals.lengt) //lion

```

Acessando um Objeto dentro de um array

```
 //array
const animals = ['lion', 'Monkey', { name: 'cat', age: 3 }];

//Acessando os dados do array
console.log(animals); //todos

//primeira posição
console.log(animals[2].name); //objeto na posição 2 (cat)

//total de elementos
console.log(animals.length); //lion
```
