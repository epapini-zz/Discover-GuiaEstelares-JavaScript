> # Condicionais e controle de fluxo

<br><br>

### **Conteúdo**

<!--ts-->

- [If e Else](#IfElse)
- [Switch](#Switch)
- [Throw e Try/Catch](#ThrowTTryCatch)

<br><br>

<br><br>

> ## If e Else (Se e Então)

A condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.

Se for falsa, executa as afirmações dentro de `else`.

```
  let temperature = 37.5;


  if (temperature >= 37) {
    console.log('febre');
  } else {
    console.log('Saudável');
  }


  //Multiplas condicionais
  if (temperature >= 37.5) {
    console.log('febre alta');
  } else if (temperature < 37.5 && temperature >= 37.5) {
    console.log('sem moderada');
  } else console.log('Saudável');
```

<br><br>

> ## Switch

A condicional `switch` avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções associadas ao case.

Se a condição for correspondida, o programa executa as instruções asssociadas.

Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)

<br>

Estrutura

```
  switch(expression) {
    case "a":
        // code
      break
    case "b":
        //code
      break
    default:
      break
  }
```

Exemplo:

```
  /*
      Outras frutas para teste: Laranjas, Maçãs,
      Bananas, Cerejas, Mangas, Mamões.
  */

  const expr = 'Mangas';

  switch (expr) {
    case 'Laranjas':
      console.log('As laranjas custam $0.59 o quilo.');
      break;
    case 'Maçãs':
      console.log('Maçãs custam $0.32 o quilo.');
      break;
    case 'Bananas':
      console.log('Bananas custam $0.48 o quilo.');
      break;
    case 'Cerejas':
      console.log('Cerejas custam $3.00 o quilo.');
      break;
    case 'Mangas':
    case 'Mamões':
      console.log('Mangas e mamões custam $2.79 o quilo.');
      break;
    default:
      console.log('Desculpe, estamos sem nenhuma ' + expr + '.');
  }

  console.log('Tem algo mais que você gostaria de levar?');
```

<br><br>

> ## Throw e Try/Catch

As declarações `try...catch` marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada.

O `throw` você utiliza quando quer passar o tratamento da exceção para outra classe.

Quando cai no `throw` a aplicação para!!! Por isso a importância do uso do `try...catch`, assim captura o erro.

```
  const name = '';

  //throw
  function sayMyName(name) {
    if (name === '') {
      throw 'Nome é obrigatório';
    }
    console.log('dpois do erro!');
  }

  //try catch
  try {
    sayMyName(name);
  } catch (error) {
    console.log(error);
  }

```

Caso não se trate o erro utilziando `try...catch` o console apresenta um erro chamado `Uncaught`.

`Uncaught` é quando não se tem conhecimento do tipo de erro!

```
  const name = '';

  //throw
  function sayMyName(name) {
    if (name === '') {
      throw 'Nome é obrigatório';
    }
    console.log('dpois do erro!');
  }

    sayMyName(name); //Uncaught Nome é obrigatório
```
