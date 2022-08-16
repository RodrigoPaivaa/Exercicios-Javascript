function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  console.log
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'menino.jpg')
        //Menino
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem-mas.jpg')
        //Jovem
      } else if (idade < 50) {
        img.setAttribute('src', 'homem.jpg')
      } //Homem
      else {
        img.setAttribute('src', 'idoso.jpg')
        //Idoso
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Menina
      } else if (idade < 21) {
        //Jovem
      } else if (idade < 50) {
      } //Mulher
      else {
        //Idosa
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}
