function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var body = window.document.getElementById('corpo')
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'imagens/fotomanha.png'
    body.style.backgroundColor = 'yellow'
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    img.src = 'imagens/fototarde.png'
    body.style.backgroundColor = 'gray'
  } else {
    img.src = 'imagens/fotonoite.png'
    body.style.backgroundColor = 'black'
    //Boa Noite!
  }
}
