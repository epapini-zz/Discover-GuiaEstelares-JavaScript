> # **Tipos de Dados**

<br>

> ### **Conteúdo**

<!--ts-->

- [Introdução](#Introdução)
- [String](#String)
- [Number](#Number)
- [Boolean](#Boolean)
- [Undefined vs null](#UndefinedNull)
- [Object](#Object)
- [Array](#Array)

<br><br>

> ## **Introdução**

Todos os tipos, com a exceção de objetos, definem valores imutáveis (valores que são incapazes de mudar). Por exemplo e diferentemente da linguagem C, Strings são imutáveis. Nós nos referimos a valores desse tipo como "valores primitivos".

- **Primitivos:**
  - Strings
  - Number
  - Boolean
  - undefined
  - Symbol
  - BigInt

<br>

- **Estruturais:**
  - Object
    - Array
    - Map
    - Set
    - Date
    - ...
  - Function

<br>

- **Estruturais Primitivos:**
  - null

<br>

Fonte: [ECMAScript]()

<br><br>

> ## **String**

Podem ser representadas por:

" " -> Aspas duplas; <br>
' ' -> Aspas simples; <br>
Crazes -> Template literals; <br>

```
console.log("Eu sou uma string com aspas duplas");
console.log('Eu sou uma string com aspas sinples');
console.log(`Com template literals posso usar expresões ${ 1 + 1 }`);
```

<br><br>

> ## **Number**

33 -> inteiros, positivos, negativos, reais
12.5 -> float
NaN -> Not a number

```
console.log(33 + 15); //Inteiros
console.log(12.5 + 15.7); //Float
console.log(15 + "Texto"); //Not a number
```

<br><br>

> ## **Boolean**

Somente 2 valores

true -> verdadeiro
false -> false

```
console.log(true); //true
console.log(false); //false

```

<br><br>

> ## **Undefined vs null**

**undefined**:

<ul>
  <li> Indefinido </li>
  <li> Não existe</li>
</ul>

**null**:

<ul>
  <li> Nulo</li>
  <li> Objeto que não possui nada dentro</li>
  <li> Diferente de indefinido</li>
  <li> Existe, só que vazio</li>
</ul>

```
console.log(undefined);
console.log(null);

console.log(null === undefined);
```

<br><br>

> ## **Objetos**

**Object**:

<ul>
  <li> Objetos</li>
  <li> Propriedades/ Atributos</li>
  <li> Funcionalidaes/ Métodos</li>
</ul>

```
console.log(
  {
    curso: "javaScript",
    escola: "RocketSeat"
  }
)
```

<br><br>

> ## **Array**

**Array**

<ul>
  <li> Array (vetores)</li>
  <li> Uma Lista</li>
  <li> Agrupamento de dados</li>
</ul>

```
console.log(
  [
    "Leite",
    "Ovos",
    "Macarrão",
    5,
    10
  ]
)
```
