
client.on('message', msg=>{
    if (msg.content === `-roleadd twitch`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "Twitch Pings");
       msg.member.roles.add(role);
      console.log('Added twitch role successfully.')
      msg.channel.send('Added Twitch Pings role successfully.')
    }
  client.off
})
client.on('message', msg=>{
    if (msg.content === `-roleadd youtube`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "Youtube Pings");
       msg.member.roles.add(role);
      console.log('Added youtube role successfully.')
      msg.channel.send('Added Youtube Pings role successfully.')
    }
  client.off
})
client.on('message', msg=>{
    if (msg.content === `-roleadd tiktok`) {
        // Set the member's roles to a single role
       var role= msg.member.guild.roles.cache.find(role => role.name === "TikTok Pings");
       msg.member.roles.add(role);
      console.log('Added TikTok role successfully.')
      msg.channel.send('Added TikTok Pings role successfully.')
    }
  client.off
})
