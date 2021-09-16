// Require the necessary discord.js classes
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(token);