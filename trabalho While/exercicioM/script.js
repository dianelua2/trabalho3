/*Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente
no final o total do somatório e a média dos valores lidos.*/
alert("Bem-vindo!"); 
let i=0, somatorio=0;
while(i<10){
let valor=parseInt(prompt("informe um valor:"));

  somatorio=somatorio+valor
 i++
}
media=somatorio/10
document.body.innerHTML+=`somatorio:${somatorio} e media:${media}`     
