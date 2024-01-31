function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Digite os dados novamente")
    }
    else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = "Homem"
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'homemcrianca.jpg')
            }
            else if (idade < 40){
                img.setAttribute('src', 'homemjovem.jpg')
            }
            else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        else if(fsex[1].checked){
            gen = "Mulher"
            if (idade >=0 && idade < 12){
                img.setAttribute('src', 'mulhercrianca.jpg')
            }
            else if (idade < 40){
                img.setAttribute('src', 'mulherjovem.jpg')
            }
            else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}