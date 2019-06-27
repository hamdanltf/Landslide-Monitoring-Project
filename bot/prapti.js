// const TelegramBot = require('node-telegram-bot-api'); 
// const token = '763668315:AAH0raUR7Yt9BMd7usVlGVsY4jwVuPuK8ns';
// const bot = new TelegramBot(token, {polling: true});
    
// bot.on('message', (msg) => {
    
//   var Hi = "hi";
// if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
// bot.sendMessage(msg.chat.id,"Hello dear human");
// } 
     
// });

const TelegramBot = require('node-telegram-bot-api'); 
const token = '763668315:AAH0raUR7Yt9BMd7usVlGVsY4jwVuPuK8ns';
const bot = new TelegramBot(token, {polling: true});

var db = firebase.database()
var GLOBAL_takeLastN = 0
var GLOBAL_beginLimit = 0
var GLOBAL_endLimit = 0

async function main() {
    let FETCH_STATUS = false
    let FETCHED_DATA = []
    let FILTERED_DATA = []


    // NGAMBIL DATA BARU -> TAMPILIN
    db.ref('/SENSOR2').endAt().limitToLast(1).on('child_added', function (snapshot) {
        if (FETCH_STATUS) {
            const {
                parameter,
                waktu
            } = snapshot.val()

            if (parameter.jarak >= 2) {
              bot.sendMessage(msg.chat.id,"Hello dear human");
            }

            chart.data.labels.push(waktu.time)
            chart.data.datasets[0].data.push(parameter.jarak)

            if (chart.data.datasets[0].data.length > GLOBAL_takeLastN) {
                chart.data.labels.shift()
                chart.data.datasets[0].data.shift()
            }

            chart.update();
        }
        FETCH_STATUS = true
    })

}

main()