const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const { joinVoiceChannel, AudioPlayer } = require('@discordjs/voice');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
        });
    }
}