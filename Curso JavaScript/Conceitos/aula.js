/* variabel */

let nome = "gabriel"; //string

let idade = 25 // numero

let aprovado = true; //boolean

let sobrenome ; //não definido undefinied

let corselicionada = null; // redefinir valor

let pessoa = {
    nome: "Gabriel",
    idade: 21
}; //objeto, classe

let familia = [26,45,17,43] //Array

let Clientes = ["Gabriel","Luan","Lucas","Tiagão"]

console.log(Clientes[3]);

//Funções Verbo + Substantivo
let corSite = "azul";

// sem parâmetro
/*function resetaCor(){
    corSite = "";
} */

// passando um parâmetro

/*function resetaCor(cor){
    corSite = cor;
} */

//  dois parâmetros ou mais 

function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
}

console.log(corSite);
resetaCor("vermelho"," claro");
console.log(corSite);

//tipos de funções 

//função que realiza uma tarefa e não devolve nada

function dizerNome(){
    console.log("Gabriel")
}

dizerNome();
//retorna valor
function MultiplicarPorDois(valor){
    return valor*2
}

console.log(MultiplicarPorDois(5));

//operadores aritméticos

let salario = 100;

// +, -, /, *, **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);

//++ e --

let custo = 20;

//++ depois retorna deposi da operação
console.log(custo++);

//++ antes retorna antes da operação
console.log(++custo);


//operadores Atribuição

//operadores de igualdade

// igualdade restrita

console.log(1 === 1) // retorna verdadeiro ou falso

//igualdade solta

console.log(1 == 1); //compara apenas o valor e não o tipo 


//operador ternario

// tem um cliente, se ele tiver mais de 100 pontos é premium

let pontos = 100;

let tipo = pontos > 100? 'premium' : 'comum'; // se pontos for maior que 100, e do tipo premium se não comum 

//operadores comparação

// || diferente, not, se não (!)

//operadores bitwise

//Lops
// For

for(let i = 0; i < 5; i++){

}

//While

//Do while
let i = 0;
do{
    console.log('digitando')
    i++;
} while(i < 10)

//For..In
const pessoa ={
    nome: 'Gabriel',
    idade: 25
};
//key-value
for(let chave in pessoa){
    console.log(chave,pessoa.nome)
}

const cores = ['Azul', 'Preto', 'Verde']
//For of
for(let cor of cores){
    console.log(cor);
}


