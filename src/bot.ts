import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

// Make sure to replace 'YOUR_TOKEN_HERE' with your actual bot token
client.login('YOUR_TOKEN_HERE');