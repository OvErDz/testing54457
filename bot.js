const Discord = require('discord.js');
const PREFIX = "+"
const KiNg66S = new Discord.Client();



KiNg66S.on('message', message => {
  if (!message.content.startsWith(PREFIX)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "354527650657861633") return;

  
  if (message.content.startsWith(PREFIX + 'wt')) {
  KiNg66S.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(PREFIX + 'ls')) {
  KiNg66S.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(PREFIX + 'sn')) {
  KiNg66S.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(PREFIX + 'sa')) {
  KiNg66S.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(PREFIX + 'st')) {
  KiNg66S.user.setGame(argresult, "https://www.twitch.tv/KiNg66S");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(PREFIX + 'sp')) {
  KiNg66S.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});

bot.login(process.env.BOT_TOKEN);
