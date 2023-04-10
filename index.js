const TelegramBot = require('node-telegram-bot-api');

const token = '6114679288:AAGpRbAUZhy02NdiOt_wCxQwVTaxVzxwD84'

const bot = new TelegramBot(token, {polling: true})

const webAppUrl = 'https://bright-mermaid-f9479f.netlify.app/'

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text
  if(text === '/start'){
    await bot.sendMessage(chatId, 'Привет', {
        reply_markup:{
            keyboard:[
                [{text:'Заполнить'}, {text:'Заполнить'}],
              
            ]
        }
    })
  }

  if(text === 'sss'){
    await bot.sendMessage(chatId, 'Привет', {
        reply_markup:{
            inline_keyboard:[
                [{text:'Жми сюда', web_app: {url: webAppUrl+'form'}}],
               
            ]
        }
    })
  }

  
});