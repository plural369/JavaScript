function jurossimples(capital, taxa, tempo){
    console.log(`Juros Simples: ${capital * taxa * tempo}`)
}

jurossimples(1200, 0.02, 15)

function juroscomposto(capital, taxa, tempo){
    let valor = tempo + taxa
    console.log(`Juros Composto: ${capital * (Math.pow(valor, 6))}`)
}

juroscomposto(5000,1, 0.01 )