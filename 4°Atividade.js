// Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
// Em seguida o número de votos do candidato X, o número de votos do candidato Y, 
//total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores).
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 
var eleitores, votosX, votosY, brancos, nulos, percentualX, percentualY, percentualBrancos, percentualNulos, umPorcento

eleitores = Number(prompt('Quantidade de eleitores'))
votosX = Number(prompt('Votos do candidato x'))
votosY = Number(prompt('Votos do candidato y'))
brancos = Number(prompt('Votos branco'))
nulos = Number(prompt('Votos nulos'))

umPorcento = eleitores / 100
percentualX = votosX / umPorcento
percentualY = votosY / umPorcento
percentualBrancos = brancos / umPorcento
percentualNulos = nulos / umPorcento

alert('Votos em X: ' + percentualX + '%' + ' Votos em Y: ' + percentualY + '% ' + 
'Votos em Branco: ' + percentualBrancos + '% ' + 'Votos Nulos: ' + percentualNulos + '%')