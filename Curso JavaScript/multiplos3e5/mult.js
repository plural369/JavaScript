//Multiplos de 5

function soma(numero){
    let mult5 = 0;
    let mult3 = 0;

    for(i = 0; i <= numero; i++){
        if(i % 3 === 0){
            mult3 += i;
        }
        if(i % 5 === 0){
            mult5 += i;
        }
    }

    console.log(mult3 + mult5);
}

soma(100)