let num = [5,1,2,3,5,4]
 //INDICE  0 1 2 3 4 5

num.length //ATRIBUTO CONTAGEM DE CASAS
num.push(7) // INSERE VALOR NO FINAL
num.sort() //COLOCA EM ORDEM CRESCENTE  
num.indexOf(3) //PROCURA O NUMERO NA CHAVE


console.log(num)
console.log(`Nosso vetor é em ordem ${num}`) 
console.log(`O vetor possui ${num.length} posições`)
console.log(`O numero que procura está em ${num.indexOf(10)} no index`) // -1 QUER DIZER QUE NÃO FOI ENCONTRADO


/* for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */

for (let pos in num) { // PARA CADA POSIÇÃO DENTRO EM NUM / RESUMINDO CÓDIGO ACIMA
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}