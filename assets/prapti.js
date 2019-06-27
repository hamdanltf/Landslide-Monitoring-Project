// const TelegramBot = require('node-telegram-bot-api'); 
// const token = '763668315:AAH0raUR7Yt9BMd7usVlGVsY4jwVuPuK8ns';
// const bot = new TelegramBot(token, {polling: true});
    
// bot.on('message', (msg) => {
    
//   var Hi = "hi";
// if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
// bot.sendMessage(msg.chat.id,"Hello dear human");
// } 
     
// });

src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"

const TelegramBot = require('node-telegram-bot-api'); 
const token = '763668315:AAH0raUR7Yt9BMd7usVlGVsY4jwVuPuK8ns';
const bot = new TelegramBot(token, {polling: true});
const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyBqzL3Eg4NUBf6jdaxacp2Vdm-3-V0TwZg",
    authDomain: "larys-project.firebaseapp.com",
    databaseURL: "https://larys-project.firebaseio.com",
    projectId: "larys-project",
    storageBucket: "larys-project.appspot.com",
    messagingSenderId: "308826173367",
    appId: "1:308826173367:web:57f71cc8956719dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.database()
// var GLOBAL_takeLastN = 0
// var GLOBAL_beginLimit = 0
// var GLOBAL_endLimit = 0

async function main() {
    let FETCH_STATUS = false

    // NGAMBIL DATA BARU -> TAMPILIN
    db.ref('/SENSOR2').endAt().limitToLast(1).on('child_added', function (snapshot) {
        if (FETCH_STATUS) {
            const {
                parameter,

            } = snapshot.val()

            if (parameter.node == 'Node-01') {
                bot.sendMessage(562592345, "setan"
                )
            }

        }
        FETCH_STATUS = true
    })
 }

main()