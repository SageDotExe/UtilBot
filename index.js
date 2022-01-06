const Discord = require('discord.js');
require("dotenv").config()

const TOKEN = "OTI4NTk3OTQ2OTM5ODc1MzM4.YdbGOw.QyxtXdb8HpFpi4NcCZyQziQaCMI"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.channel.send("Hello!")
        console.log('send message hello!')
    }
})

client.login(process.env.TOKEN)
