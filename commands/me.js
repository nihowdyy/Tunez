module.exports = {
    name: 'me',
    description: 'this is an embed made during testing to tell author information',
    execute(client, message, args, Discord) {
        const myEmbed = new Discord.MessageEmbed()
        .setColor('#008080')
        .setTitle('Me :)')
        .setDescription('My stuffs')
        .addField('Twitch', 'nihowdy', true)
        .addField('Github', 'nihowdyy', true)
        .setImage('https://media.giphy.com/media/RomhUvLz67UTd9Fd38/giphy.gif?cid=790b761190f5aa2429281890c65faa1c28778151cb232b49&rid=giphy.gif&ct=s')
        .setFooter('ayo?');

        message.channel.send({ embeds: [myEmbed] });
    }
}