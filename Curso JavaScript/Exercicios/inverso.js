let inverso = (num) => {
    let arm = num
    if(num === true){
        return false
    }
    if(num === false){
        return true
    }
    if(num < 0 && num != toString(num)){
        return arm - (num * 2 )
    }
    if (num >= 0 && num != toString(num)){
        return arm - (num * 2) 
    } 
    else{
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(num)}`
    }
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso(2000))
console.log(inverso("programação"))