module.exports = {
    name: "ping",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const messages = ["Nah","šš  å© š ā Ä£  āā©", `**ā¢ Bot Latency: ${Date.now() - message.createdTimestamp}ms.\nā¢ API Latency: ${Math.round(client.ws.ping)}ms. **`, "piong", "š š š š"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage);

        
	

    }
}

