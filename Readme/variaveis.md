> # **Variáveis**

Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras. Um identificador JavaScript deve começar com uma letra, underline ( \_ ), ou cifrão ( $ ); os caracteres subsequentes podem também ser números (0-9).

<br><br>

> ### **Conteúdo**

<!--ts-->

- [Conhecendo as variáveis](#ConhecendoVariáveis)
- [Tipos dinâmicos](#TiposDinâmicos)
- [Scope e var](#ScopeVar)
- [Scope let e const](#ScopeLetConst)
- [Nomeando variáveis](#NomeandoVariáveis)
- <br><br>

> ## **Conhecendo Variáveis**

- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável
  - const = Não pode alterar o valor
  - let
  - var

```
  //var / let

  var clima = "Quente"
  clima="frio" //reatribindo o valor
  console.log(clima)

  let clima = "Quente"
  clima="frio" //reatribindo o valor
  console.log(clima)

  //const
  var clima = "Quente"
  clima="frio"
  console.log(clima)

```

No exemplo do const, aparecerá um erro no console dizendo que não é possível alterar uma variável do tipo constant

<br><br>

> ## **Tipos Dinâmicos**

O JS é uma linguagem fracamente tipada e dinâmica

- Varáveis não precisam ter um tipo previamente definido
- Podemos mudar o conteúdo da variável

```
  let clima = true //boolean
  clima = "" //string

  console.log(typeof clima);
```

<br><br>

> ## **Escopo**

Escopo determina a visibilidade de alguma variável no JS.

<br>

> ### **Block statement**

```
//iniciando um bloco
{

  //aqui dentro e o bloco, tudo aqui fará parte do escopo desse bloco


}//aqui fechamos o bloco
```

<br><br>

> ## **Var**

O var é global e poderá funcionar fora do escopo de bloco

```
  console.log("Existe um x antes do bloco", x)

  {
    var x = 0;
  }

  console.log("Existe um x depois do bloco", x)
```

<br><br>

> - ## **Hoisting**

O Hoisting ocorre quando seu código Javascript é compilado : Basicamente, todas as declarações de variáveis são movidas para o topo de seu escopo local (se foram declaradas dentro de uma função, por exemplo) ou para o topo do escopo global (se foram declaradas fora de uma função)

<br><br>

> ## **Let e Const**

let e const são locais e só funcionam no escopo que forem criadas

```
  {

    //let

    let x = 1
    console.log("Existe um x antes do bloco", x)
    {
      let x = 0;
    }

    console.log("Existe um x depois do bloco", x)

  //const

    const y = 1

    console.log("Existe um y antes do bloco", y)
    {
        {
            {
              const y = 0;
              console.log("existe y ", y)
            }
        }
    }

    console.log("Existe um y depois do bloco", y)

  }
```

<br><br>

> ## **Para criar nomes**

- JS é case-sensitive
- JS aceita a cadeia de caracteres Unicode
