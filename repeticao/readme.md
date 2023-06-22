# Estruturas de Repetição em JavaScript

Aqui estão exemplos de como utilizar estruturas de repetição em JavaScript para exibir números iguais em sequência. Serão apresentados exemplos utilizando as estruturas `while`, `do-while` e `for`.

## Laço `while` 🔂

O laço `while` é usado quando queremos repetir um bloco de código enquanto uma condição for verdadeira.

Exemplo utilizando `while`:

```javascript
var contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
```

Resultado:

```
0
1
2
3
4
```

## Laço `do-while` 🔂

O laço `do-while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa pois a verificação da condição é no final.

Exemplo utilizando `do-while`:

```javascript
var contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
```

Resultado:

```
0
1
2
3
4
```

## Laço `for` 🔂

O laço `for` é utilizado quando sabemos exatamente quantas vezes queremos repetir um bloco de código.

Exemplo utilizando `for`:

```javascript
for (var contador = 0; contador < 5; contador++) {
  console.log(contador);
}
```

Resultado:

```
0
1
2
3
4
```

Esses exemplos demonstram como utilizar as estruturas de repetição em JavaScript para exibir números iguais em sequência. A escolha da estrutura mais adequada depende do contexto e da lógica do seu programa.

Utilize esses exemplos como referência e adapte-os às suas necessidades. As estruturas de repetição são poderosas ferramentas para automatizar tarefas e realizar interações em seu código JavaScript.
