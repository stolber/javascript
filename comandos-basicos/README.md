# Comandos Básicos em JavaScript :computer:

Neste README, vamos explorar alguns comandos básicos em JavaScript para interagir com os usuários e manipular dados.

## :loudspeaker: alert

O comando `alert` exibe uma caixa de diálogo com uma mensagem para o usuário.

Exemplo:
```javascript
alert("Olá! Bem-vindo ao nosso site.");
```

## :question: confirm

O comando `confirm` exibe uma caixa de diálogo com uma pergunta e retorna `true` se o usuário clicar em "OK" e `false` se o usuário clicar em "Cancelar".

Exemplo:
```javascript
if (confirm("Você deseja excluir esse item?")) {
  console.log("Item excluído com sucesso.");
} else {
  console.log("Operação cancelada pelo usuário.");
}
```

## :speech_balloon: prompt

O comando `prompt` exibe uma caixa de diálogo com uma mensagem e um campo de entrada de texto. Ele retorna o valor digitado pelo usuário.

Exemplo:
```javascript
var nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "! Seja bem-vindo.");
```

## :1234: Number

O comando `Number` é usado para converter um valor em um número.

Exemplo:
```javascript
var idade = prompt("Qual é a sua idade?");
var idadeNumero = Number(idade);
console.log("Sua idade é " + idadeNumero + ".");
```

## :pencil2: write

O comando `write` é usado para escrever conteúdo na página.

Exemplo:
```javascript
document.write("Olá, seja bem-vindo ao nosso site!");
```

Utilize esses comandos básicos em suas aplicações JavaScript para interagir com os usuários e manipular dados de forma eficiente e intuitiva. :rocket:

