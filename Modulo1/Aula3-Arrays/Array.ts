

// ======> Uso de Colchetes:

let exemploArray: string[] = ['maçã', 'pêra', 'abacaxi'];
console.log(exemploArray[2]);


// ======> Uso de Array Object

let exemploArrayObject: Array <string> = ['feijão', 'arroz', 'carne'];
console.log(exemploArray[2]);

// ======> Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Árabe');    // adiciona no final do array um novo elemento e retorna a posição
console.log(idiomas);

// ======> Usando o Length

let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log("O tamanho do Array é de: " + idiomas1.length);

// ======> Utilizando o Spread Operator

let listaNum: Array<number> = [0, 1, 2, 3, 4, 5];
listaNum = [...listaNum, 6, 7, 8, 9, 10]; 
console.log(listaNum);

// ======> Array com laço de iteração

let linguagemArray: string[] = new Array('Python', 'Java', 'JavaScript', 'GoLang');

function funcaoLinguagem(linguaguens: string[]){
    for (let i = 0; i < linguagemArray.length; i++){
        console.log(linguagemArray[i]);
        
    }
}

funcaoLinguagem(linguagemArray);
