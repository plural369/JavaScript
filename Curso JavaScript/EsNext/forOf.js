for(let letra of 'Cod3r'){
    console.log(letra)
}

assuntosEcma = ['Gabriel', 'Joao', 'Beatriz']

for(let i in assuntosEcma){
    console.log(i)
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let a of assuntosMap.keys()){
    console.log(a)
}

for(let b of assuntosMap.values()){
    console.log(b)
}

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

