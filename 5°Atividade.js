//Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura,
//realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 
var peso, altura, total

peso = Number(prompt('Insira seu peso'))
altura = Number(prompt('Insira sua altura'))

total = peso / (altura * altura)
alert('Seu IMC é igual a: ' + total)