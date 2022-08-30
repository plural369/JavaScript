exibirp(10)

function exibirp(numerop){
    let np = true;

    for(let cont = 2; cont < numerop; cont++){
        
        if(cont % numerop === 0){
            np = false;
        }
    }
}