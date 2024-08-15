//Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit.
// Mostrar o resultado na tela. 
var Celsius, Fahrenheit

Celsius = Number(prompt('Insira a temperatura em graus Celsius'))
Fahrenheit = (Celsius * 9 / 5) + 32

alert('Temperatura em Fahrenheit: ' + Fahrenheit)