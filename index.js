const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1209172238259978280')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=nGKFgidwsTM&list=RDnGKFgidwsTM&start_radio=1') //Must be a youtube video link 
    .setState('Valorant')
    .setName('jpv')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://i.pinimg.com/564x/69/3b/4f/693b4f23122fd6ea109f21f5835c6c06.jpg') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('i love maya') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1167498348496957560.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ambot') //Text when you hover the Small image
    .addButton('Shop', 'https://www.facebook.com/profile.php?id=100082747396080')
    .addButton('Vouches', 'https://www.facebook.com/photo/?fbid=323159467118964&set=a.323159523785625');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` 0623 `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
