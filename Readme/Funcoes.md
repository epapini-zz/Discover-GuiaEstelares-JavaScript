> # Funções

Para conteúdo de funções criei uma pasta Functions e dentro dela criei o arquivo html e script.js para executar os códigos das proxímas aulas.

Basta copiar e colar, acompanhe no console do seu navegador.

Tbm funciona o script.js da raiz do projeto.

<br><br>

> ## **Conteúdo**

<!--ts-->

- [Functions](#functions)
- [Argumentos e parâmetros](#argumentosParametros)
- [Retornando valores dentro da função](#retornoFuncao)
- [Function scope](#funcaoEscopo)
- [Function Hoisting](#funcaoHosting)
- [Arrow function](#arrowFunction)
- [Callback function](#callbackFunction)
- [Funções construtoras](#constructorFunction)

<!--te-->

<br><br>

> ## Functions

Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.

<br>

Exemplo: criar um aplicativo de frases motivacionais:

Criando uma função (declaration):

```
  function createPhrases() {
    console.log("Estudar é importante");
    console.log("Paciência e percistência");
    console.log("Revisão é a mãe do aprendizado");
  }
```

Executando uma função (execute, run, call, invoke):

```
  createPhrases()
```

<br><br>

<a href="#argumentosParametros"></a>

> ## Argumentos e parâmetros

Declarando funções dentro de variáveis

<br>

Funções anônimas:

```
  //parametros da função
 const sum = function (num1, num2) {
  console.log(num1 + num2);
};

//executando:
sum(2, 3); //argumentos

```

- O que é passado para a função (2 e 3) são os argumentos. <br>
- O que esta recebendo na função (num1 e num2) são os parâmetros.

<br>

> Importante!!!

A ordem de pasagem dos argumentos impactará de como os parametros os receberam

<br><br>

<a href="#retornoFuncao"></a>

> ## Retornando valores dentro da função

```
const sum = function (num1, num2) {
  total = num1 + num2;
  return total;
};

let number1 = 34;
let number2 = 33;
sum(number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`O total é ${sum(number1, number2)}`);

//esse valor aparece aqui pois não foi declarado um tipo de variável.
console.log(total)

```

<br><br>

> Importante!!!

Observe que a o --`total`-- dentro do escopo da função está sem um tipo de declaração de variável. Quando isso ocorre, o conteúdo dessa variável, no nosso caso o total e usada em todo o seu codigo. Não respeita o escopo de onde foi declarada.

<br>

> Mas Atenção!

**A não declaração de um tipo de variável em seu código, pode acarretar problemas sérios!!! É recomendado que não o faça. Sempre declare o tipo de variável.**

<br>

Caso declare um tipo de variável para esse valor, ai sim respeitará o escopo da função, mesmo sendo VAR.

```
const sum = function (num1, num2) {
  const total = num1 + num2;
  return total;
};

let number1 = 34;
let number2 = 33;
sum(number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`O total é ${sum(number1, number2)}`);

//agora apresentará erro de não declarado
console.log(total)

```

<br><br>

<a href="#funcaoEscopo"></a>

> ## Function scope

```
let subject = "create a video;

function createThink(subject){
  subject = "create a stream"
  return subject
}

console.log(createThink(subject ))
console.log(subject)

```

Observe que as variáveis possuem o mesmo nome, porém cada uma esta em seu escopo.

Uma vez que a sua função recebe um --`parametro`-- a variável --`subject`-- que está dentro do escopo da função, receberá o valor lá declarado (create a stream). <br>
Então seu resultado será:

- create a video
- create a stram

<br>

> Importante:

Caso sua função não receba um parametro, o valor do subject será pego no escopo acima.
<br>
Então seu resultado será:

- create a video

<br>

> Esclarecendo

```
// criei o pensamento
let subject;

//executei o pensamento
function createThink(subject){
  subject = "create a stream"
  return subject
}

console.log(subject) //criei o pensamento -> undefined
console.log(createThink()) // executei o pensamento -> create a stream
console.log(subject) // peguei o pensamento -> create a stream

```

> Toda Função que não tem retorno, seu retorno sera --`undefined-`--

<br><br>

<a href="#funcaoHosting"></a>

> ## Function Hoisting

```
sayName()

function () {
  console.log("joao");
}

```

Dessa maneira o Hoisting é executado. pois a função nao tem uma declaração de variável.

<br>

!!errado:

```
sayName()

const sayMyName = function () {
  console.log("joao");
}

```

Dessa maneira, ocorrerá um erro, pois é como se não tivesse criado a função ainda.

<br><br>

<a href="#arrowFunction"></a>

> ## Arrow function

O seu funcionamento e igual o das --`functions`--

```
  const sayMyName = () => {
    console.log("joao");
  }

  sayMyName();

```

<br><br>

<a href="#callbackFunction"></a>

> ## Callback function

Quando o retorno da sua função e uma função

```
  function sayMyName(name){
    console.log("antes de executar a callback")

    name()

    console.log("depois de executar a callback")
  }

  sayMyName(
    ()=>{
      console.log("eu sou a callback");
    }
  )
```

<br><br>

<a href="#constructorFunction"></a>

> ## Funções construtoras

As funções construtoras em JavaScript são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções contrutoras no JavaScript quanto Classes no Java têm a mesma utilidade: **servir de molde para a criação de objetos.**

Para construir objetos, funções construtoras precisam ser instanciadas pelo **operador --`new`--**. <br>
O **--`this`--** dentro delas se referencia ao objeto criado a partir delas.

<br>

- Expressão new
- criar um novo objeto
- this keyword

```
function Person(name) {
  this.name = name;
  this.walk = () => {
    return this.name + ' está andando';
  };
}

const joao = new Person('João'); //instânciando um novo objeto
const maria = new Person('maria');

console.log(joao);
console.log(maria.walk());

```
