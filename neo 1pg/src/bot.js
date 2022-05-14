import { Client,Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
    );

bot.on('ready', ()=> console.log('ready'));

bot.login('OTM0MzM1OTkwOTU1NDAxMjE2.GwWi8B.c_2LlVsuduUSzKkva7FPHyzhIverGEyj1jz2gU');

bot.on('message', async (msg) =>{
    if(msg.author.bot) return;

    await msg.reply('Hi');
});



