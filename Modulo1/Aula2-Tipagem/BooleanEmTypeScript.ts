
// apenas testando a flag do typescript

let concluido: boolean = false;
let idade: number = 28;

while (!concluido) {
    if (idade < 18) {
        console.log("Você não pode dirigir")
        console.log("Sua idade é de: " + idade + " anos")
        concluido = true;
    } else if (idade >= 18) {
        console.log("Você já pode drigir")
        console.log("Sua idade é de: " + idade + " anos")
        break;
    }
}