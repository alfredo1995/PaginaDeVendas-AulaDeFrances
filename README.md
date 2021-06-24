1) criar função q vai receber string  

       prompt("Digite o primeiro valor")
       
2) criar variavel primeiroValor variavel que vai receber o valor recebido

       var primeiroValor =  prompt("Digite o primeiro valor")
       
3) criar variavel segundoValor variavel que vai receber o valor recebido

       var segundoValor =  prompt("Digite o primeiro valor")
       
3) criar variavel operacao recebendo uma função para receber string contendo parametro()

       var operacao = prompt("1 para divisao, 2 para multiplicao, 3 para adicao, 4 para subtracao")
       
4) criar variavel resultado recebendo a operação realizada
  
       var resultado = primeiroValor / segundoValor
       
5) criar estrutra condicional com um fluxo de controle para as operacoes

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
        
        

6) Estrutura do Codigo

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

