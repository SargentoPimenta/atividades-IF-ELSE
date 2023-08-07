//permissão comum, gerente e diretor
let usuario = "usuário modder"

switch(usuario){
    
case "usuário novo":
console.log('usuário tem permissão comum');
break;

case "usuário experiente":
console.log('usuário tem permissão de gerente');
break;

case "usuário modder":
console.log('usuário tem permissão de diretor');
break;
default:
    console.log ("user inválido");
}

//calculadora
let valor1 = 10, valor2 = 10
let calcular = "subtração"

switch(calcular){

case "soma":
console.log('o valor do cálculo é:', (valor1+valor2))
break;

case "subtração":
console.log('o valor do cálculo é:', (valor1-valor2))
break;

case "divisão":
console.log('o valor do cálculo é:', (valor1/valor2))
break;
default:
    console.log ("valor inválido");
}


//determinar o maior valor
let nn1 = 2, nn2 = 3
if(nn1>nn2){
  console.log("o primeiro valor é maior que o segundo")  
}
if(nn1<nn2){
    console.log("o segundo valor é maior que o primeiro")
}

//alg. voto
let ano_nascimento = 2020
let ano_atual = 2023

if(ano_atual-ano_nascimento>=16){
    console.log("pode votar")
}else{
    console.log("não pode votar")
}

//alg. senha
let senha = 1234

if (senha=1234){
    console.log("ACESSO PERMITIDO")
 }else{
    console.log("ACESSO NEGADO")
 } 

//IMC
let peso = 70, altura = 1.70;
let imc = peso/(altura*altura);

if(imc<18.5){
    console.log("magreza, imc=", imc)
}

if(imc>=18.5 && imc<=24.9){
    console.log("normal, imc=", imc)
}

if(imc>=25 && imc<=29.9){
    console.log("sobrepeso, imc=", imc)
}

if(imc>=30 && imc<=39.9){
    console.log("obesidade, imc=", imc)
}
if(imc>40){
    console.log("obesidade grave, imc=", imc)
}


// ORDEM CRESCENTE
let nnn1 = 5;
let nnn2 = 3;
let nnn3 = 4;

if (nnn1 > nnn2) {
  let temp = nnn1;
  nnn1 = nnn2;
  nnn2 = temp;
 
}

if (nnn2 > nnn3) {
  let temp = nnn2;
  nnn2 = nnn3;
  nnn3 = temp;

}

if (nnn1 > nnn2) {
  let temp = nnn1;
  nnn1 = nnn2;
  nnn2 = temp;

}

console.log('Números em ordem crescente: ' + nnn1 + ', ' + nnn2 + ', ' + nnn3);

