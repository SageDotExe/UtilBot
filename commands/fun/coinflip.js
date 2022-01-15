module.exports = {
    name: "coinflip",
    category: "fun",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

        const messages = ["http://clipart-library.com/img1/985322.png", "http://clipart-library.com/img1/985360.png"]

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        message.channel.send(randomMessage);

	

    }
}

