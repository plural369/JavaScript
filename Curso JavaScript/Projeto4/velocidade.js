velocidade(180);

function velocidade(velocidade){
    if(velocidade <= 70){
        console.log('Ok')
    }
    else{
        const pontos = Math.floor(((velocidade - 70)/ 5));

        if(pontos >= 12){
            console.log('Sua carteira está suspensa.');
        }
        else{
            console.log('Pontos',pontos)
        }
    }
}