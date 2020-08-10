const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', msg=>{
    if (msg.content === `-rolerm twitch`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "Twitch Pings");
       msg.member.roles.remove(role);
      console.log('Removed twitch role successfully.')
      msg.channel.send('Removed Twitch Pings role successfully.')
    }
  client.off
})
client.on('message', msg=>{
    if (msg.content === `-rolermd youtube`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "Youtube Pings");
       msg.member.roles.remove(role);
      console.log('Removed youtube role successfully.')
      msg.channel.send('Removed Youtube Pings role successfully.')
    }
  client.off
})
client.on('message', msg=>{
    if (msg.content === `-rolerm tiktok`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "TikTok Pings");
       msg.member.roles.remove(role);
      console.log('Removed TikTok role successfully.')
      msg.channel.send('Removed TikTok Pings role successfully.')
    }
  client.off
})
