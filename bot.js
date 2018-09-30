const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'O!'

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'депрессию',
            type: "STREAMING",
            url: "http://natribu.org"
        }
    });
});
 
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'start')) {
        message.channel.sendMessage('Я родился пилять!');
     }
 });

 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('**Бот Илюща** - Теперь Я во всем винвоват.');
     }
 });
 
client.login('NDg2ODk3MDE2NTgxMTI4MjEy.DnF0Ww.PsfnFOynUxkBE2P4snUk7il6eAU');