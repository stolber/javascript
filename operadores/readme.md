# Operadores em JavaScript

Este é um pequeno guia sobre os principais operadores em JavaScript, incluindo exemplos para cada categoria: aritméticos, atribuição, relacionais, lógicos e ternários.

## Operadores Aritméticos

Os operadores aritméticos são usados para realizar cálculos matemáticos em JavaScript.

Exemplos:

```javascript
let x = 5;
let y = 3;

console.log(x + y); // Soma: 8
console.log(x - y); // Subtração: 2
console.log(x * y); // Multiplicação: 15
console.log(x / y); // Divisão: 1.6666666666666667
console.log(x % y); // Resto da divisão: 2
console.log(x ** y); // Exponenciação: 125
```

## Operadores de Atribuição

Os operadores de atribuição são usados para atribuir valores a variáveis em JavaScript.

Exemplos:

```javascript
let x = 5;

x += 3; // Equivalente a x = x + 3
console.log(x); // 8

x -= 2; // Equivalente a x = x - 2
console.log(x); // 6

x *= 4; // Equivalente a x = x * 4
console.log(x); // 24

x /= 3; // Equivalente a x = x / 3
console.log(x); // 8

x %= 5; // Equivalente a x = x % 5
console.log(x); // 3
```

## Operadores Relacionais

Os operadores relacionais são usados para comparar valores em JavaScript e retornam um valor booleano.

Exemplos:

```javascript
let x = 5;
let y = 3;

console.log(x > y); // Maior que: true
console.log(x < y); // Menor que: false
console.log(x >= y); // Maior ou igual a: true
console.log(x <= y); // Menor ou igual a: false
console.log(x === y); // Igual a: false
console.log(x !== y); // Diferente de: true
```

## Operadores Lógicos

Os operadores lógicos são usados para combinar ou inverter valores booleanos em JavaScript.

Exemplos:

```javascript
let x = true;
let y = false;

console.log(x && y); // E lógico: false
console.log(x || y); // OU lógico: true
console.log(!x); // NÃO lógico: false
```

## Operador Ternário

O operador ternário é uma forma concisa de escrever uma declaração condicional em JavaScript.

Exemplo:

```javascript
let idade = 18;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"
```

Neste exemplo, o operador ternário verifica se a variável `idade` é maior ou igual a 18. Se for verdadeiro, atribui o valor "Maior de idade" à variável `status`; caso contrário, atribui o valor "Menor de idade".

Espero que este guia sobre os operadores em JavaScript seja útil para você!

## Ordem de Precedência de Operadores em JavaScript

A ordem de precedência de operadores em JavaScript determina a sequência em que as operações são executadas em uma expressão. É importante compreender a ordem correta para obter os resultados desejados.

Aqui está uma tabela com a ordem de precedência dos operadores mais comuns:

1. Parênteses `()`
2. Exponenciação `**`
3. Multiplicação `*` e Divisão `/`
4. Adição `+` e Subtração `-`
5. Operadores de comparação, como `<`, `>`, `<=`, `>=`, `==`, `!=`, `===` e `!==`
6. Operadores lógicos, como `&&` (E lógico) e `||` (OU lógico) e `!` (NÃO lógico)
7. Operador ternário `? :` (condicional ? VERDADEIRO : FALSO)
