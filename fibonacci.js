function sequencia(num) {
    let fibo = [0, 1];
    while (fibo[fibo.length - 1] < num) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }
    return fibo;
}

function verificarNumero(num) {
    const fibo = sequencia(num);
    return fibo.includes(num);
}

let numero = 2;
sequencia(numero);
verificarNumero(numero);

if (verificarNumero(numero)) {
    console.log("O número está na sequencia!");
} else {
    console.log("O número não está na sequencia!");
}