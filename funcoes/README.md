# Funções - 🎯

As funções são blocos de código que podem ser chamados e executados quando necessário. Elas permitem agrupar um conjunto de instruções para realizar uma determinada tarefa ou ação. Em JavaScript, as funções são amplamente utilizadas para organizar o código, reutilizar lógicas e modularizar a programação.

## Chamada da Função 📞

Para executar uma função, é necessário fazer sua chamada, informando o nome da função seguido pelos parênteses `()`. A chamada da função é responsável por iniciar a execução do bloco de código contido dentro dela.

Exemplo:
```javascript
minhaFuncao();
```

## Parâmetros 🎁

Uma função pode receber parâmetros, que são valores passados durante a chamada da função e servem como entradas para a execução da ação. Os parâmetros são declarados entre os parênteses da função e podem ser utilizados dentro do bloco de código.

Exemplo:
```javascript
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

saudacao("João"); // Output: "Olá, João!"
```

## Ação da Função ⚙️

O bloco de código dentro de uma função é chamado de corpo da função. É nesse bloco que as ações a serem realizadas são definidas. As instruções dentro do corpo da função são executadas quando a função é chamada.

Exemplo:
```javascript
function somar(a, b) {
  let resultado = a + b;
  console.log("O resultado da soma é: " + resultado);
}

somar(2, 3); // Output: "O resultado da soma é: 5"
```

## Retorno da Função 🔙

Uma função pode ter um valor de retorno, que é a informação que ela retorna após a execução das ações. O retorno é definido pela palavra-chave `return`, seguida do valor que será retornado.

Exemplo:
```javascript
function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 5);
console.log("O resultado da multiplicação é: " + resultado); // Output: "O resultado da multiplicação é: 20"
```

## Conclusão ✨

As funções são uma parte essencial da programação em JavaScript. Elas permitem agrupar código, reutilizar lógicas, receber entradas (parâmetros), executar ações e retornar valores. Utilizando funções, é possível tornar o código mais organizado, modular e facilitar a manutenção e expansão do programa.