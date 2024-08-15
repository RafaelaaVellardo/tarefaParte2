//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY).
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas.
var AnoNasc, AnoAtual, ResAno, ResMe, ResDi, ResSem

AnoNasc = Number(prompt('Insira o ano de seu nascimento'))
AnoAtual = Number(prompt('Insira o ano atual'))

ResAno = AnoAtual - AnoNasc
ResMe = ResAno * 12
ResDi = ResAno * 365
ResSem = ResDi / 7

alert('Idade em anos: ' + ResAno + ' anos')
alert('Idade em meses: ' + ResMe + ' meses')
alert('Idade em dias: ' + ResDi + ' dias')
alert('Idade em semanas: ' + ResSem + ' semanas')