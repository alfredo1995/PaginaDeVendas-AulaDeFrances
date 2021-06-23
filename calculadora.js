var primeiroValor =  prompt("Digite o primeiro valor")
var segundoValor =  prompt("Digite o primeiro valor")
var operacao = prompt("1 para divisao, 2 para multiplicao, 3 para adicao, 4 para subtracao")

if(operacao == 1){
    var resultado = primeiroValor / segundoValor
    document.write(resultado)
}else if(operacao == 2){
    var resultado = primeiroValor * segundoValor
    document.write(resultado)
}else if(operacao == 3){
    var resultado = primeiroValor + segundoValor
    document.write(resultado)
}else if(operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.write(resultado)
}
