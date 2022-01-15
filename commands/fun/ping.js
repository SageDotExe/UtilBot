module.exports = {
    name: "ping",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const messages = ["Nah","🐜👍  卩 𝐎 ℕ ģ  ✌♩", `**• Bot Latency: ${Date.now() - message.createdTimestamp}ms.\n• API Latency: ${Math.round(client.ws.ping)}ms. **`, "piong", "𝖕 𝖎 𝖓 𝖌"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage);

        
	

    }
}

