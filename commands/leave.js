const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: 'Stops the bot and leaves the channel',
    execute(client, message, args, Discord) {
        const myVoiceChannel = message.member.voice.channel;
        const connection = getVoiceConnection(myVoiceChannel.guild.id);
        if (!myVoiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");

        if (connection) {
            connection.destroy();
        } else {
            return message.channel.send('Hey, I\'m not even here yet :(');
        }
    }
}