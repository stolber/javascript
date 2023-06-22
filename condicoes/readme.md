# 🧠 Condições e Estruturas de Controle

Neste documento, vamos explorar as estruturas de controle condicionais em JavaScript: `if`, `else`, `else if` e `switch`. Essas estruturas permitem que você tome decisões em seu código com base em condições específicas.

## 📌 if

A estrutura `if` (`Se`) permite executar um bloco de código se uma condição for verdadeira.
 "algo for verdadeiro" faça.

Exemplo:

```javascript
var idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

## 📌 else

A estrutura `else` (`Se não`) é usada em conjunto com `if` e permite executar um bloco de código alternativo quando a condição do `if` não for atendida. 
 
Exemplo:

```javascript
var idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

## 📌 else if

A estrutura `else if` (`Se não se`) é usada quando você tem várias condições a serem verificadas. Ela permite testar condições adicionais além do `if` inicial.

Exemplo:

```javascript
var idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else if (idade >= 13) {
  console.log("Você é um adolescente.");
} else {
  console.log("Você é uma criança.");
}
```

## 📌 switch

A estrutura `switch` é útil quando você precisa tomar decisões com base em múltiplos valores possíveis de uma variável.

Exemplo:

```javascript
var diaDaSemana = 3;
var dia;

switch (diaDaSemana) {
  case 1:
    dia = "Domingo";
    break;
  case 2:
    dia = "Segunda-feira";
    break;
  case 3:
    dia = "Terça-feira";
    break;
  case 4:
    dia = "Quarta-feira";
    break;
  case 5:
    dia = "Quinta-feira";
    break;
  case 6:
    dia = "Sexta-feira";
    break;
  case 7:
    dia = "Sábado";
    break;
  default:
    dia = "Dia inválido";
    break;
}

console.log("Hoje é " + dia);
```

Explore essas estruturas de controle para criar lógicas mais complexas em seu código JavaScript. Lembre-se de que elas podem ser combinadas e aninhadas para atender às necessidades específicas do seu projeto. 🧠