let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Listening Insaani's World"}}) //this is the bot status code..
})

client.on("guildMemberAdd", member => {
if (member.guild.id === "Server ID") { //enable your developer mode in your discord settings and right click your server.. then you should see copy id option...
  
  
  client.channels.cache.get("Channel ID").send(`𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 Server name  ${member}!! `)
}
})

client.login("Bot Token")
//Coded by hydra Insaan


