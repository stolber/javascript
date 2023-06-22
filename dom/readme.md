# Document Object Model (DOM) 🌟

O Document Object Model (DOM) é uma interface de programação que representa a estrutura de um documento HTML ou XML como uma árvore de objetos. O DOM permite manipular e interagir com os elementos do documento de forma dinâmica, alterando seu conteúdo, estilo e comportamento.

Neste README, cito alguns exemplos de como utilizar o DOM em JavaScript para acessar e manipular elementos HTML.

## Exemplo 1: Acessando um elemento pelo seu ID 👇

```javascript
// Obtém uma referência para o elemento com o ID "meu-elemento"
var elemento = document.getElementById("meu-elemento");

// Modifica o conteúdo do elemento
elemento.innerHTML = "Novo conteúdo";
```

## Exemplo 2: Modificando estilos de um elemento 🖌️

```javascript
// Obtém uma referência para o elemento com a classe "meu-elemento"
var elemento = document.querySelector(".meu-elemento");

// Modifica o estilo do elemento
elemento.style.backgroundColor = "blue";
elemento.style.color = "white";
```

## Exemplo 3: Adicionando um evento de clique a um elemento 👆

```javascript
// Obtém uma referência para o elemento com o ID "meu-botao"
var botao = document.getElementById("meu-botao");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", function() {
  alert("Botão clicado!");
});
```

## Exemplo 4: Criando e inserindo novos elementos ➕

```javascript
// Cria um novo elemento <p>
var paragrafo = document.createElement("p");

// Define o texto do parágrafo
paragrafo.textContent = "Novo parágrafo adicionado";

// Obtém uma referência para o elemento pai
var container = document.getElementById("container");

// Insere o parágrafo como último filho do elemento pai
container.appendChild(paragrafo);
```

Estes são apenas alguns exemplos de como utilizar o DOM em JavaScript para manipular elementos HTML. O DOM oferece uma ampla gama de recursos e métodos para trabalhar com elementos, estilos, eventos e muito mais.

Lembre-se de consultar a documentação oficial do DOM para obter mais informações sobre seus recursos e funcionalidades alguns links abaixo.

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/): O MDN é uma excelente referência para desenvolvedores, incluindo informações detalhadas sobre JavaScript, HTML, CSS e muito mais.

- [Document Object Model (DOM) - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model): Esta é a documentação oficial do DOM no MDN, que oferece informações completas sobre como acessar e manipular elementos HTML usando o JavaScript.

Explore o DOM! 🚀

