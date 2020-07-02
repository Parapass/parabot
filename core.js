const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "-"
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
    if (msg.content === "-pepega") {
      msg.channel.send("You are the Pepega! :Sadge:")
    }
  })
client.on('ready', () => {
    console.log(`Logged in as Your Bot`);
    client.user.setActivity('ping.parapass.tk for ping info').catch(console.error);
})
client.on('message', msg=>{
    if (msg.content === `-sadge`) {
        const Sadge = client.emojis.cache.find(emoji => emoji.name === "Sadge");
        const GuitarTime = client.emojis.cache.find(emoji => emoji.name === "GuitarTime");
        msg.channel.send(`${Sadge} ${GuitarTime}`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `-feelstrappedman`) {
        const FeelsTrappedMan = client.emojis.cache.find(emoji => emoji.name === "FeelsTrappedMan");
        msg.channel.send(`${FeelsTrappedMan} please let me out`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `-roleadd twitch`) {
        const role = message.guild.roles.find(r => r.name === "Twitch Pings");
// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
const member = message.mentions.members.first();
// or the person who made the command: let member = message.member;
// Add the role!
member.addRole(role).catch(console.error);
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `-pepela`) {
        const PepeLa = client.emojis.cache.find(emoji => emoji.name === "PepeLa");
        msg.channel.send(`${PepeLa}`)
    }
    client.off
})
client.on('message', msg=>{
    if (msg.content === `-ping`) {
        msg.channel.send(`You can view the ping of the bot here: https://ping.parapass.tk`)
    }
    client.off
})
client.on('message', msg=>{
  if (msg.content === `-ninja`) {
      const Sadge = client.emojis.cache.find(emoji => emoji.name === "NinjaPls");
      msg.channel.send(`${Sadge}`)
  }
  client.off
})
client.on('message', msg=>{
  if (msg.content === `-wifianywhere`) {
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
    if (msg.content === "-givemacros") {
      var role = msg.member.roles.cache.find(role => role.name === "macros");
      msg.member.roles.add(role);
      msg.channel.send("Successfully gave macros")
    }
  })
  client.on("message", msg => {
    if (msg.content === "-pepeJAMJAM") {
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
//on leaving message
client.on('guildMemberRemove', member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
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
