function triangulo(a,b,c){
    if(a === b && a === c){
        console.log(`È um triangulo Equilátero`)
    }
    else if (a === b && a != c){
        console.log(`È um triangulo Isósceles`)
    }
    else if (a === c && a != b){
        console.log(`È um triangulo Isósceles`)
    }
    else{
        console.log(`È um triangulo Escaleno`)
    }
}

triangulo(2,2,2)
triangulo(2,4,2)
triangulo(2,3,4)