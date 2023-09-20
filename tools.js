function getTotal(listProducts){
    var initialValue = 0;
    const total = listProducts.reduce((total, currentValue) => total + currentValue.qntd*currentValue.valor, initialValue);
    return total;
}

function getNumberItens(listProducts){
    var initialValue = 0;
    const totalItens = listProducts.reduce((total, currentValue) => total + currentValue.qntd, initialValue);
    return totalItens;
}

function getPercent(value, qntd ){
   return (qntd*value/getTotal(listProducts)*100);
}

function valueToMoney(value){
    return value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
}