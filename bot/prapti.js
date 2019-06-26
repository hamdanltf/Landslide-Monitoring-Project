const TelegramBot = require('node-telegram-bot-api'); 
const token = '763668315:AAH0raUR7Yt9BMd7usVlGVsY4jwVuPuK8ns';
const bot = new TelegramBot(token, {polling: true});
    
bot.on('message', (msg) => {
    
  var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
bot.sendMessage(msg.chat.id,"Hello dear human");
} 
     
});
