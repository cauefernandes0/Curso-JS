var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora(s)`)
if (hora < 12 && hora > 5) {
    console.log("Bom dia!")
}
else if (hora < 5) {
    console.log("Boa Madrugada!")
}
else if (hora <= 18){
    console.log ("Boa Tarde!")
}
else if (hora > 18 && hora <=24){
    console.log("Boa Noite!")
}
else{
    console.log("Você colocou um horário inexistente")
}