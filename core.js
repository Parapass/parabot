const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const reactions = require('./reactions.js');
const removeroles = require('./roles.js');
const PREFIX = "/"
client.on("ready", () => {
  console.log('Bot is running with "+client.users.size+" users, in  "+client.channels.size+" channels of "+client.guilds.size+" guilds! 👍')
})
client.on("message", msg => {
    if (msg.content === "/pepega") {
      const Sadge = client.emojis.cache.find(emoji => emoji.name === "Sadge");
      msg.channel.send(`You are the Pepega! ${Sadge}`)
    }
  })
client.on("message", msg => {
    if (msg.content === "/pepege") {
      const Pepege = client.emojis.cache.find(emoji => emoji.name === "Pepege");
      msg.channel.send(`${Pepege} Next slide please`)
    }
  })
client.on("message", msg => {
    if (msg.content === "/servers") {
      const size = client.guilds.cache.size;
      msg.channel.send(`Current server size: ${size}`)
    }
  })
client.on('ready', () => {
    console.log(`Added game successfully.`);
    client.user.setActivity('Add me to your server on https://parapass.xyz').catch(console.error);
})
client.on('message', msg=>{
    if (msg.content === `/sadge`) {
        const Sadge = client.emojis.cache.find(emoji => emoji.name === "Sadge");
        const GuitarTime = client.emojis.cache.find(emoji => emoji.name === "GuitarTime");
        msg.channel.send(`${Sadge} ${GuitarTime}`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `/feelstrappedman`) {
        const FeelsTrappedMan = client.emojis.cache.find(emoji => emoji.name === "PARAINTHEJAR");
        msg.channel.send(`${FeelsTrappedMan}`)
    }
    client.off
})
client.on('message', msg=> {
    if (msg.content === `/rolea twitch`) {
        // Set the member's roles to a single role
        var role = msg.member.guild.roles.cache.find(role => role.name === "Twitch Pings");
        msg.member.roles.add(role);
        console.log('Added twitch role successfully.')
        msg.channel.send('Added Twitch Pings role successfully.')
    }
    client.off
}}
client.on('message', msg=>{
    if (msg.content === `/rolea youtube`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "Youtube Pings");
       msg.member.roles.add(role);
      console.log('Added youtube role successfully.')
      msg.channel.send('Added Youtube Pings role successfully.')
    }
  client.off
})
client.on('message', msg=>{
    if (msg.content === `/pepela`) {
        const PepeLa = client.emojis.cache.find(emoji => emoji.name === "PepeLa");
        msg.channel.send(`${PepeLa}`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `/rickroll`) {
        msg.channel.send(`Wanna get free wifi WITHOUT paying for internet? Go here to learn more: <https://impostor.tech/>`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `/donate`) {
        msg.channel.send(`https://parapass.me`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `/ping`) {
        msg.channel.send(`i forgor 💀`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `/catgirl`) {
        msg.channel.send(`https://media.discordapp.net/attachments/709450587850276946/727765054665261126/Cat_Girl.gif`);
        msg.channel.send(`https://media.discordapp.net/attachments/709450587850276946/727765055046942770/caption-13.gif`)
    }
    client.off
})
client.on('message', msg=>{
  if (msg.content === `/ninja`) {
      const Ninja = client.emojis.cache.find(emoji => emoji.name === "NinjaPls");
      msg.channel.send(`${Ninja}`)
  }
  client.off
})
client.on('message', msg=>{
  if (msg.content === `/wifi`) {
      msg.channel.send(`https://cdn.discordapp.com/attachments/727543737382862872/728059359841484880/4D17760FE51201749800044331008_391f3cbca13.2.1.1384188102729898160.mp4`)
  }
  client.off
})
  client.on("message", msg => {
    if (msg.content === "Ding ding pch n daa, bam-ba-ba-re-bam baram bom bom baba-bam-bam-bommm") {
      msg.channel.send("Wh-wha-what's going on-on? https://www.youtube.com/watch?v=k85mRPqvMbE")
    }
  })
  client.on("message", msg => {
    if (msg.content === "among us") {
      const AmongUs = client.emojis.cache.find(emoji => emoji.name === "AmongUsDance");
      msg.channel.send("${Ninja} https://www.youtube.com/watch?v=qfGqxaY6k_U")
    }
  })
  client.on("message", msg => {
    if (msg.content === "/givemacros") {
      if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('You don´t have permission.')
      var member = message.mentions.users.first;
      msg.member.roles.add(role);
      console.log('Added macros successfully.')
      msg.channel.send('Gave macros to ${member}.')
    }
  })
  client.on("message", msg => {
    if (msg.content === "/pepeJAMJAM") {
      var JAMJAMembed = new Discord.MessageEmbed()
      JAMJAMembed.setColor('#000000')
      JAMJAMembed.setAuthor('pepeJAMJAM')
      JAMJAMembed.setTitle('Spam pepeJAMJAM!')
      JAMJAMembed.setImage('https://cdn.betterttv.net/emote/5c36fba2c6888455faa2e29f/3x.gif')
      JAMJAMembed.setURL('https://www.youtube.com/watch?v=cE0wfjsybIQ')
      msg.channel.send(JAMJAMembed)
    }
  })
  // !say command
client.on('message', msg=>{
    if (msg.content.startsWith(PREFIX + 'say')) {
        if(!msg.member.roles.cache.find(r => r.name === "macros")) return msg.channel.send("You don't have permission.")
        const args = msg.content.slice(PREFIX.length).split(' ');
        const command = args.splice(0, 1); // args now only contains the arguments
        const sayMessage = args.join(" ");
        msg.delete().catch(()=>{});
        msg.channel.send(sayMessage);
        switch (command) {
        }
    client.off
    }
})
client.on('messageReactionAdd', async (reaction, user) => {
  //Filter the reaction
  if (reaction.id === "one") {
    // Define the emoji user add
    let role = msg.guild.roles.cache.find(role => role.name === 'Alerts');
    if (msg.channel.name !== 'alerts') {
      msg.reply(':x: You must go to the channel #reaction-roles');
    } else {
      msg.member.addRole(role.id);
    }
  }
});
//on leaving message
client.on('guildMemberRemove', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "new-peeps");
    if(!channel) return;

    channel.send(`**${member}** has just left the server.. Bye Bye`);
    var leavingEmbed = new Discord.MessageEmbed()
        leavingEmbed.setColor('#0099ff')
        leavingEmbed.setAuthor('PepeLa.')
        leavingEmbed.setTitle('Why must you leave, now we do the PepeLa!')
        leavingEmbed.setImage(member.user.displayAvatarURL())
        leavingEmbed.setThumbnail('https://cdn.discordapp.com/emojis/727552232446230578.png?v=1')
    channel.send(leavingEmbed);
});
client.login(process.env.BOT_TOKEN)
