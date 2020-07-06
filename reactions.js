const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log(`Reactions JS file init.`);
})

client.on('message', message => {
  if(message.author.bot)
  {
      const embedMsg = message.embeds.find(msg => msg.title === 'Server Roles');
      if(embedMsg)
      {
          embedMsg.message.react('one')
          then(reaction => message.react('two'))
          then(reaction => message.react('three'))
          then(reaction => message.react('four'))
          then(reaction => message.react('five'))
          then(reaction => console.log("Reacted with " + reaction.emoji.name))
          .catch(err => console.error);
      }
    return;
  }
    
  if(message.content.toLowerCase() === '-roles')
  {
      const embed = new MessageEmbed();
      embed.setTitle('Server Roles');
      embed.setColor('BLUE');
      embed.setDescription(":one: - 100-1 Rank\n" +
      ":two: - 500-101 Rank\n" +
      ":three: - 1000-501 Rank\n" +
      ":four: - 3000-1001 Rank\n" +
      ":five: - 5000-3001 Rank\n");
      message.channel.send(embed);
  }
});
