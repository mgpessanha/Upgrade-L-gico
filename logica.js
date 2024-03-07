function impar(seq) {
    let ultimo = seq[seq.length - 1];
    let proximo = ultimo + 2;

    return proximo;
}

let sequencia1 = [1, 3, 5, 7];
let proximo1 = impar(sequencia1);

console.log("1, 2, 3, 5, 7, " + proximo1);

/*---------------------------------------------------*/

function potencia(seq) {
    let ultimo = seq[seq.length - 1];
    let proximo = ultimo * 2;

    return proximo;
}

let sequencia2 = [1, 2, 4, 8, 16, 32, 64];
let proximo2 = potencia(sequencia2);

console.log("1, 2, 4, 8, 16, 32, 64, " + proximo2);

/*---------------------------------------------------*/

function quadradosPerfeitos(seq) {
    let ultimo = seq[seq.length - 1];
    let raizUltimo = Math.sqrt(ultimo);
    let proximo = Math.pow(raizUltimo + 1, 2)

    return proximo;
}

let sequencia3 = [0, 1, 4, 9, 16, 25, 36];
let proximo3 = quadradosPerfeitos(sequencia3);

console.log("0, 1, 4, 9, 16, 25, 36, " + proximo3);

/*---------------------------------------------------*/

function quadradosPares(seq) {
    let ultimo = seq[seq.length - 1];
    let raizUltimo = Math.sqrt(ultimo);
    let proximo = Math.pow(raizUltimo + 2, 2)

    return proximo;
}

let sequencia4 = [4, 16, 36, 64];
let proximo4 = quadradosPares(sequencia4);

console.log("4, 16, 36, 64, " + proximo4);

/*---------------------------------------------------*/

function fibonacci(seq) {
    let ultimo = seq[seq.length - 1];
    let penultimo = seq[seq.length -2];
    let proximo = ultimo + penultimo;

    return proximo;
}

let sequencia5 = [1, 1, 2, 3, 5, 8];
let proximo5 = fibonacci(sequencia5);

console.log("1, 1, 2, 3, 5, 8, " + proximo5);

/*---------------------------------------------------*/

function letraD() {
    return "Todos os números da sequencia começam com a letra D.";
}

console.log(letraD());



