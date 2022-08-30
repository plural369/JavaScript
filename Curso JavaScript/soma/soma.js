function soma (n){
    let ad = 0;
    let a;
    a = n.split('');
    
    for(let i = 0; i < a.length; i++){
        ad = a[i]++;
    }

}
soma(15)
