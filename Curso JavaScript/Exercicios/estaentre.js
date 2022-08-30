let estaentre = (minimo, maximo, numero, inclusivo) => {
    if(numero > minimo && numero < maximo){
        return true
    }
    else if(numero > minimo && numero > maximo){
        return false
    }
    else if(numero > minimo && numero > maximo || inclusivo === true){
        return true
    }
    else{
        return false
    }
}

console.log(estaentre(10, 100, 50))
console.log(estaentre(16, 100, 160))
console.log(estaentre(3, 150, 3))
console.log(estaentre(3, 150, 3, true))