function mensagem() { 
    let nome = document.querySelector('#nome')


    let novadiv1 = document.createElement('div')
    let novoh1 = document.createElement('h1')
    let texto1 = document.createTextNode (`Ok, ${nome.value}! Sua mensagem foi enviada com sucesso! `)



    novoh1.appendChild(texto1)
    document.body.appendChild(novadiv1)
    novadiv1.appendChild(novoh1)
}

let botao = document.querySelector('button')
botao.addEventListener("click", mensagem)

alert(`Isso é apenas uma simulação!`)