const ENDPOINT = '';
const PRIVATE_KEY = '';

const bot = BotManager.getCurrentBot();
const jsoup = org.jsoup.Jsoup;
bot.setCommandPrefix('/');

function commandHandler(msg) {
    jsoup.connect(ENDPOINT).header('Authorization', 'Bearer: ' + PRIVATE_KEY).data("payload", JSON.stringify(msg)).post();
}

bot.addListener(Event.COMMAND, commandHandler);
