function exibir(numero){
    while(numero > 0){
        if(numero % 2 === 0){
            console.log('Par',numero);
        }
        else{
            console.log('Impar',numero)
        }
        numero--;
    }
}

exibir(50)