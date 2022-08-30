function baskara(a, b, c){
    let delta = (b * b) -4 * a * c
    if(delta < 0){
        console.log(`Delta é negativo: ${delta}`)
    }
    else{
        let x1 = (- b + (Math.sqrt(delta))) /(2 * a)
        let x2 = (- b - (Math.sqrt(delta))) /(2 * a)
        console.log(`x1: ${x1}`)
        console.log(`x2: ${x2}`)
    }
}

baskara(3,-5,12)
