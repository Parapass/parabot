const { Client, RichEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log(`Reactions JS file init.`);
})

client.on('message', message => {
  if(message.author.bot)
  {
    return;
  }
    
  if(message.content.toLowerCase() === '-roles')
  {
      const embed = new RichEmbed();
      embed.setTitle('Server Roles')
      embed.setColor('BLUE')
      message.channel.send(embed);
  }
});
