const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: 'Leaves.',
    execute(message, args, Discord) {
        const myVoiceChannel = message.member.voice.channel;
        const connection = getVoiceConnection(myVoiceChannel.guild.id);

        connection.destroy();
    }
}