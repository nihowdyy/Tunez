module.exports = {
    name: 'me',
    description: 'this is an embed made during testing to tell author information',
    execute(message, args, Discord) {
        const myEmbed = new Discord.MessageEmbed()
        .setColor('#008080')
        .setTitle('Me :)')
        .setDescription('My stuffs')
        .addField('Twitch', 'nihowdy', true)
        .addField('Github', 'nihowdyy', true)
        .setImage('https://media2.giphy.com/media/X9qk3eM85bCwLHYS4p/giphy.gif?cid=790b76117655f68457ae6fd8f4e326ab467d491ef5f9acaf&rid=giphy.gif&ct=s')
        .setFooter('ayo?');

        message.channel.send({ embeds: [myEmbed] });
    }
}