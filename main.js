function updateTimer() {
  let countdown = document.getElementById('countdown-function')

  countdown.innerHTML = 'oi'

  //Colocar a data do lançamento
  const countDownDate = new Date('Jan 1, 2022 00:00:01')

  //Atualizar o countdown a cada 1 segundos
  const now = new Date().getTime() //pegar data atual
  const diferenceOfTheDay = countDownDate - now

  //Calcular o valor dos dias, horas, minutos e segundos
  days = Math.floor(diferenceOfTheDay / (1000 * 60 * 60 * 24))
  hours = Math.floor(diferenceOfTheDay / (1000 * 60 * 60))
  mins = Math.floor(diferenceOfTheDay / (1000 * 60))
  secs = Math.floor(diferenceOfTheDay / 1000)

  d = days
  h = hours - days * 24
  m = mins - hours * 60
  s = secs - mins * 60

  countdown.innerHTML =
    '<div>' +
    d +
    '<span>Days</span></div>' +
    '<div>' +
    h +
    '<span>Hours</span></div>' +
    '<div>' +
    m +
    '<span>Minutes</span></div>' +
    '<div>' +
    s +
    '<span>Seconds</span></div>'
}

setInterval('updateTimer()', 1000)

//Função do botão de inscrever-se
function subscribe() {
  window.alert('oi')
}
