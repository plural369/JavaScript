function notas(nota){
    if(nota > 0 && nota < 40){
        if(nota >= 38){
            console.log(`Você está Aprovado`)
        }
        else{
            console.log(`Você está reprovado, Nota:${nota}`)
        }
    }
}

notas(38)