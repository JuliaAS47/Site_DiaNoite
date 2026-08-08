const bt = document.querySelector('.botao')
var img = window.document.getElementById('imagem')
var msg = window.document.getElementById('mensagem')
var inst = window.document.getElementById('instrucao')

document.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('light-theme')
        bt.textContent = 'Noite'
        bt.style.fontSize = '30px'
        msg.innerHTML = 'DIA'
        msg.style.fontStyle = "bold"
        msg.style.fontSize = '30px'
})

bt.addEventListener('click', function () {
    

    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme') 
        document.body.classList.add('light-theme')
        this.textContent = 'Noite'
        msg.innerHTML = 'DIA'
        msg.style.fontStyle = "bold"
        msg.style.fontSize = '30px'
        img.src = 'imagens/dia.jpg'
    } else {
        document.body.classList.remove('light-theme') 
        document.body.classList.add('dark-theme')
        this.textContent = 'Dia'
        msg.innerHTML = 'NOITE'
        msg.style.fontStyle = "bold"
        msg.style.fontSize = '30px'
        img.src = 'imagens/noite.jpg'
    }
})
