import { config } from 'dotenv';
config({ path: '.env' }); 
import { Client,Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
    );

bot.on('ready', ()=> console.log('ready'));



// bot.on('message', async (msg) =>{
//     if(msg.author.bot) return;

//     await msg.reply('Hi');
// });

bot.on('message', async (msg) =>{
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith("!")){
        msg.reply("hello world");
    }
    if(msg.content.startsWith("!dm")){
        msg.member.send("how can i help");

    }
    
    
});

bot.login(process.env.BOT_TOKEN);









