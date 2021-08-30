// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Prefix for commands
const prefix = '-';

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready for some tunez!');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping') {
        message.channel.send('pong!');
    }
});

// Login to Discord with the token
client.login(token);