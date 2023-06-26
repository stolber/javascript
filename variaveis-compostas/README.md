# Variável Composta - Array/Vetor ✨

As variáveis compostas são estruturas de dados utilizadas para armazenar conjuntos de elementos relacionados. Em JavaScript, uma das formas de se trabalhar com variáveis compostas é utilizando os arrays ou vetores.

## Sintaxe 📝

Em JavaScript, um array é declarado utilizando colchetes `[]` e os elementos são separados por vírgulas.

Exemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];
let nomes = ["João", "Maria", "Pedro"];
```

## Índice e Acesso aos Elementos 🔑

Cada elemento em um array é identificado por um **índice**. O índice representa a posição do elemento dentro do array e é utilizado para acessar ou modificar o conteúdo do elemento.

Em JavaScript, os índices dos arrays começam em 0. Isso significa que o primeiro elemento do array tem índice 0, o segundo elemento tem índice 1, e assim por diante.

Exemplo:

```javascript
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[0]); // Output: "maçã"
console.log(frutas[1]); // Output: "banana"
console.log(frutas[2]); // Output: "laranja"
```

## Propriedades e Métodos 🧰

Os arrays em JavaScript possuem propriedades e métodos úteis para manipulação dos elementos.

Algumas propriedades e métodos comuns incluem:

- `length`: Retorna o tamanho do array (quantidade de elementos).
- `push(elemento)`: Adiciona um novo elemento ao final do array.
- `pop()`: Remove o último elemento do array.
- `join(separador)`: Concatena todos os elementos do array em uma string, separados pelo valor do `separador`.

Exemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // Output: 5

numeros.push(6);
console.log(numeros); // Output: [1, 2, 3, 4, 5, 6]

numeros.pop();
console.log(numeros); // Output: [1, 2, 3, 4, 5]

let texto = numeros.join("-");
console.log(texto); // Output: "1-2-3-4-5"
```

## Conclusão 🎉

Os arrays são uma ferramenta poderosa para manipulação de dados em JavaScript. Com eles, é possível armazenar e acessar conjuntos de elementos de forma eficiente. Além das operações básicas, existem muitas outras funcionalidades e métodos disponíveis para manipular e percorrer arrays.

Ao utilizar variáveis compostas como arrays, você pode organizar e trabalhar com conjuntos de dados de forma mais estruturada, permitindo a criação de algoritmos mais robustos e flexíveis.