
var DolarValueString = prompt("Qual o valor em dólar a ser convertido?");

var DolarValueNumber = Number(DolarValueString);

var RealValue = DolarValueNumber * 5.50

var RealValueDecimal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(RealValue);

var msg = document.getElementById('msg')
msg.innerHTML = `Seu valor em real é: ${RealValueDecimal}`