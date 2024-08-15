//Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00.
//Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 
var plastico, papel, metal

plastico = Number(prompt('Digite a quantidade de Plástico em kilos') / 10 * 2)
papel = Number(prompt('Digite a quantidade de Papel em kilos') / 30 * 3)
metal = Number(prompt('Digite a quantidade de Metal em kilos') / 50 * 5)

alert('Quantidade adquirida com o plástico: ' + plastico + 'reais ' + '  Quantidade adquirida com o Papel: ' 
+ papel + ' reais ' + '  Quantidade adquirida com o metal: ' + metal + ' reais ' + '  Total adquirido: ' + (plastico + papel + metal) + ' reais')