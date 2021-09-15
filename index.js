// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// Prefix for commands
const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready for some tunez!');
});

// Message handler
client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if (command === 'me') {
        client.commands.get('me').execute(message, args, Discord);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args, Discord);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args, Discord);
    } else {
        message.channel.send('This is not a valid command!');
    }
});

// Login to Discord with the token
client.login(token);