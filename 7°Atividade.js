//Em uma festa de família alemã, 45 pessoas foram convidadas para beber.
//Para tanto, foram comprados 300 litros de chopp.
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado e a quantidade de chopp (litros) que sobrou.
//Esses dados devem ser digitados pelo usuário. Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos.
//Ao final, mostrar a média de litros bebidos por pessoa na festa.
var pessoasConv = 45, litroComprados = 300, quantidadeDesper, quantidadeSobr, média

quantidadeDesper = Number(prompt('Quantidade Desperdiçada de Chopp(litros)'))
quantidadeSobr = Number(prompt('Quantidade que sobrou de Chopp(litros)'))

média = (litroComprados - (quantidadeDesper + quantidadeSobr)) / 45

alert('Média consumida por pessoa: ' + média + ' litros')