function inverter(string) {
    let palavra = " ";
    for (let i = string.length - 1; i >= 0; i--) {
        palavra += string[i];
    }
    return palavra;
}

let string = "Me aceita aí, Target Sistemas!";
let novaString = inverter(string);

console.log(novaString); 