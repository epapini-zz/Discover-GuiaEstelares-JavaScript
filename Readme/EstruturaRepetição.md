> # Estrutura de repetição

<br><br>

> ### **Conteúdo**

<!--ts-->

- [for](#for)
- [While](#While)
- [For of](#ForOf)
- [For in](#ForIn)

<br><br>

> ## for (Para)

<br>

`break`, para a execução no for. quado chamado
`continue` ele continua a execução do loop, após a condição selecionada.

<br>

Ex: Executa 0 a 100 para no 50, usando o break

```
//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; //parar o for
  }
  console.log('break', i);
}

//continue
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log('continue', i);
}
```

<br><br>

> ## While (Enquanto)

Quando surgir a dúvida de quando usar o While.

Usa-se quando não se sabe o momento da parada da sua estrutura de repetição.

<br>

```
let i = 0;
while (i < 10) {
  console.log(i);

  i++;
}
```

<br><br>

> ## for... of

O loop `for...of` percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

<br>

```
  let name = 'João';
  let names = ['Maria', 'Fernanda', 'Pedro'];

  //pega cada caracter no nome
  for (let char of name) {
    console.log(char);
  }

  //varre o array names
  for (let name of names) {
    console.log(name);
  }

```

<br><br>

> ## for... in

O laço `for...in` interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

```
  let person = {
    name: 'João',
    age: 30,
    weight: 88.6,
  };

  for (let property in person) {
    console.log(property);
    console.log(person[property]);
  }
```
