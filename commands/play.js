const ytSearch = require('yt-search');
const ytdl = require('ytdl-core');
const { joinVoiceChannel, AudioPlayer, createAudioPlayer, createAudioResource, StreamType, entersState, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const { Formatters } = require('discord.js');

module.exports = {
    name: 'play',
    description: 'Joins and plays a video from youtube',
    async execute(message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You gotta be in a channel to execute this command homie :(');
        if (!args.length) return message.channel.send('You need to add a little more to that command dude :/')

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        const player = createAudioPlayer();
        
        function playSong() {
            const stream = ytdl(video.url, {filter: 'audioonly'});

            const resource = createAudioResource(stream, {
                inputType: StreamType.Arbitrary,
            });
        
            player.play(resource);
        
            return entersState(player, AudioPlayerStatus.Playing, 5e3);
        }

        async function connectToChannel(voiceChannel) {
            const connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });
        
            try {
                await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
                return connection;
            } catch (error) {
                connection.destroy();
                throw error;
            }
        }
        
        connectToChannel(voiceChannel);

        if (video) {
            await playSong();
            
            await message.reply(`Now Playing: ***${video.title}***`)
        } else {
            message.channel.send('No video results found');
        }

    }
}