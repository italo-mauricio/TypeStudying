let tipoString: string = "Declarando tipo string"
let tipoBoolean: boolean = true
let tipoNumber: number = 23


console.log(tipoString, tipoBoolean, tipoNumber)


// ====> Variáveis [Type Annotations]

let nome: string = 'Italo Mauricio';
console.log(nome);

// ====> Arrays [Type Annotations]

let animais: string[] = ['Cachorro', 'Gato', 'Leão', 'Avestruz'];
console.log(animais[2])

// ====> Objeto [Type Annotations]

let carro: {
    nome: string;
    ano: number;
    preco: number;
};
carro = {nome: "Ferraro", ano: 2022, preco: 80000}

console.log(carro);