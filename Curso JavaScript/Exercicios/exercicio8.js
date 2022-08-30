var pontos = [10,20,20,8,25,3,0,30,40,1,50]
let aux = 0
let mais = 0
let menos = 0
aux = pontos[1]
function pontoss(valor){
    for (let i = 0; i < pontos.length; i++) {
        if(valor[i] > aux){
            mais++
        }
        else{
            menos++
        }
    }
    console.log(mais)
    console.log(menos)
}
pontoss(pontos)