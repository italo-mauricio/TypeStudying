// ======> Uso de Colchetes:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var exemploArray = ['maçã', 'pêra', 'abacaxi'];
console.log(exemploArray[2]);
// ======> Uso de Array Object
var exemploArrayObject = ['feijão', 'arroz', 'carne'];
console.log(exemploArray[2]);
// ======> Adicionando mais strings com método 'push'
var idiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Árabe'); // adiciona no final do array um novo elemento e retorna a posição
console.log(idiomas);
// ======> Usando o Length
var idiomas1 = ['Português', 'Inglês', 'Espanhol'];
console.log("O tamanho do Array é de: " + idiomas1.length);
// ======> Utilizando o Spread Operator
var listaNum = [0, 1, 2, 3, 4, 5];
listaNum = __spreadArray(__spreadArray([], listaNum, true), [6, 7, 8, 9, 10], false);
console.log(listaNum);
// ======> Array com laço de iteração
var linguagemArray = new Array('Python', 'Java', 'JavaScript', 'GoLang');
function funcaoLinguagem(linguaguens) {
    for (var i = 0; i < linguagemArray.length; i++) {
        console.log(linguagemArray[i]);
    }
}
funcaoLinguagem(linguagemArray);
