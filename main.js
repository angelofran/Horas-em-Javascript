const data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var p = document.getElementById('p')
p.innerText = `Agora são ${hora}:${min} horas`
var img = document.querySelector('img.img')
if (hora  >= 18 && hora < 23) {
    document.body.style.background = '#fbcfbe'
    img.src = 'https://i.pinimg.com/originals/1f/a2/e4/1fa2e4f6deaae8134787a75b1a899763.jpg'
}else if (hora  >= 0 && hora < 12){
    document.body.style.background = '#80aab0'
    img.src = 'https://www.belasmensagens.com.br/wp-content/uploads/2013/10/bom-dia-nao-importa-a-cor-do-ceu.jpg'
}else{
    document.body.style.background = '#164db1'
    img.src = 'https://static.mundodasmensagens.com/upload/textos/b/o/boa-tarde-aproveite-muito-e-nao-se-esqueca-de-agradecer-por-mais-79E8R-cxl.jpg'
}
