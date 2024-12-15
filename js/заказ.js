
const TOKEN = '7755406618:AAGSicbOWQBMy1c8WSS2zbB-p3xZ5piqgMQ';
const CHAT_ID = '-1002273469755';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector ('.succes');


document.getElementById('form').addEventListener('submit', function(e) {

  e.preventDefault(0);

  let message = 'Заявка с сайта\n' + 'ваше имя: ' + this.name.value +
  '\n' + 'номер телефона: ' + this.phone.value +
  '\n' + 'tg для связи: ' + this.tg.value +
  '\n' + 'Ваш товар: ' + this.item.value;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
.then((res) => {
  succes.classList.remove ('disp');
})
.catch ((err) => {
})
.finally (() => {
  console.log('скрипт выполнен')
})
})
