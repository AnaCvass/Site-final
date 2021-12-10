let pago = document.querySelector('#pagar')
let produto = document.querySelector('#produto')

function pagamento(){

let valorpago = pago.value
let valorproduto = produto.value

if (valorpago >= valorproduto){
    let novadiv1 = document.createElement('div')
    let novoh1 = document.createElement('h1')
    let texto1 = document.createTextNode (`Seu pagamento foi feito com sucesso!`)



    novoh1.appendChild(texto1)
    document.body.appendChild(novadiv1)
    novadiv1.appendChild(novoh1)
}

else {
    let novadiv2 = document.createElement('div')
    let novoh2 = document.createElement('h1')
    let texto2 = document.createTextNode (`Seu saldo é insuficiente para realizar o pagamento!`)



    novoh2.appendChild(texto2)
    document.body.appendChild(novadiv2)
    novadiv2.appendChild(novoh2)
}
console.log(valorpago.value)
console.log(valorproduto.value)
}
let botao = document.querySelector('button')
botao.addEventListener("click", pagamento)