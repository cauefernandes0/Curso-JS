function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=6 && hora < 12){
        imagem.src ='manha.png'
        document.body.style.background = '#e3b88e'
    }
    else if (hora>=12 && hora < 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#ec8a3a'
    }
    else{
        imagem.src = 'noite.png'
        document.body.style.background = '#544164'  
    }

}
