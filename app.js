// // // // const dc = require("discord.js")
// // // // const client = new dc.Client();
// // // // const fetch = require("node-fetch")
// // // // const Database = require("@replit/database")
// // // // const db = new Database()
// // // // const distube = require("distube")

// // // // // const starterEncouragements = [
// // // // //   "Cheer up!",
// // // // //   "Hang in there.",
// // // // //   "You are a great person / bot!"
// // // // // ]

// // // // // db.get("encouragements").then(encouragements => {
// // // // //   console.log(encouragements)
// // // // //   if (!encouragements || encouragements.length < 1) {
// // // // //     db.set("encouragements", starterEncouragements)
// // // // //   }  
// // // // // })

// // // // // db.get("responding").then(value => {
// // // // //   if (value == null) {
// // // // //     db.set("responding", true)
// // // // //   }  
// // // // // })


// // // // // function updateEncouragements(encouragingMessage) {
// // // // //   db.get("encouragements").then(encouragements => {
// // // // //     encouragements.push([encouragingMessage])
// // // // //     db.set("encouragements", encouragements)
// // // // //   })
// // // // // }

// // // // // function deleteEncouragment(index) {
// // // // //   db.get("encouragements").then(encouragements => {
// // // // //     if (encouragements.length > index) {
// // // // //       encouragements.splice(index, 1)
// // // // //       db.set("encouragements", encouragements)
// // // // //     }
// // // // //   })
// // // // // }

// // // // function getQuote() {
// // // //     return fetch("https://zenquotes.io/api/random")
// // // //       .then(res => {
// // // //         return res.json()
// // // //         })
// // // //       .then(data => {
// // // //         return data[0]["q"] + " -" + data[0]["a"]
// // // //       })
// // // //   }



// // // //   // function getQuote1() {
// // // //   //   return fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
// // // //   //     .then(res => {
// // // //   //       return res.json()
// // // //   //       })
// // // //   //     .then(data => {
// // // //   //       return data[0]["message"] + " -" + data[0]["a"]
// // // //   //     })
// // // //   // }

// // // // // client.on("ready", () => {
// // // // //     console.log(`Logged in as ${client.user.tag}!`)
// // // // //   })

// // // // client.on("ready", () => {
// // // //   console.log(`Logged in as ${client.user.tag}!`)
// // // // })



  

// // // //   client.on("message", msg => {
// // // //     if (msg.content === "ping") {
// // // //       msg.reply("pong");
// // // //     }

// // // //     if (msg.content === "kata2") {
// // // //       getQuote().then(quote => msg.channel.send(quote))
// // // //     }
// // // //     // if (msg.content.startsWith("$new")) {
// // // //     //   encouragingMessage = msg.content.split("$new ")[1]
// // // //     //   updateEncouragements(encouragingMessage)
// // // //     //   msg.channel.send("New encouraging message added.")
// // // //     // }

// // // //     // if  (msg.content.startsWith.then((res) => {
// // // //     //   return reportToUser(JSON.parse(res)); // Note the typo (`pasre`)
// // // //     // })
// // // //     if (msg.content === "kata3") {
// // // //       getQuote1().then(quote => msg.channel.send(quote))
// // // //     }

// // // //     // if (msg.content.startsWith("$new")) {
// // // //     //   encouragingMessage = msg.content.split("$new ")[1]
// // // //     //   updateEncouragements(encouragingMessage)
// // // //     //   msg.channel.send("New encouraging message added.")
// // // //     // }
  
// // // //     // if (msg.content.startsWith("$del")) {
// // // //     //   index = parseInt(msg.content.split("$del ")[1])
// // // //     //   deleteEncouragment(index)
// // // //     //   msg.channel.send("Encouraging message deleted.")
// // // //     // }


// // // //     // if (msg.content.startsWith("$responding")) {
// // // //     //   value = msg.content.split("$responding ")[1]
  
// // // //     //   if (value.toLowerCase() == "true") {
// // // //     //     db.set("responding", true)
// // // //     //     msg.channel.send("Responding is on.")
// // // //     //   } else {
// // // //     //     db.set("responding", false)
// // // //     //     msg.channel.send("Responding is off.")
// // // //     //   }
// // // //     // }


// // // //   })


// // // //   // process.on('unhandledRejection', (reason, promise) => {
// // // //   //   console.log('Unhandled Rejection at:', promise, 'reason:', reason);
// // // //   //   // Application specific logging, throwing an error, or other logic here
// // // //   // });
  
// // // //   // startsWith.then((res) => {
// // // //   //   return reportToUser(JSON.pasre(res)); // Note the typo (`pasre`)
// // // //   // }); // No `.catch()` or `.then()`




 

// // // // client.login("ODQ5MjE3Nzg2MzYyNDYyMjM4.YLX9sQ.oIPEMBFV-ShWwQdjYPIHax6npjE")





// // // const Discord = require('discord.js')
// // // const DisTube = require('distube')
// // // const client = new Discord.Client()
// // // const config = {
// // // 	prefix: '',
// // // 	//token: process.env.TOKEN || 'Your Discord Token',
// // // }

// // // // Create a new DisTube
// // // const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true })

// // // client.on('ready', () => {
// // // 	console.log(`Logged in as ${client.user.tag}!`)
// // // })

// // // client.on('message', message => {
// // // 	if (message.author.bot) return
// // // 	if (!message.content.startsWith(config.prefix)) return
// // // 	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
// // // 	const command = args.shift()

// // // 	if (command === 'play') distube.play(message, args.join(' '))

// // // 	if (['repeat', 'loop'].includes(command)) distube.setRepeatMode(message, parseInt(args[0]))

// // // 	if (command === 'stop') {
// // // 		distube.stop(message)
// // // 		message.channel.send('Stopped the music!')
// // // 	}

// // // 	if (command === 'skip') distube.skip(message)

// // // 	if (command === 'queue') {
// // // 		const queue = distube.getQueue(message)
// // // 		message.channel.send(`Current queue:\n${queue.songs.map((song, id) =>
// // // 			`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
// // // 	}

// // // 	if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
// // // 		const filter = distube.setFilter(message, command)
// // // 		message.channel.send(`Current queue filter: ${filter || 'Off'}`)
// // // 	}
// // // })

// // // // Queue status template
// // // const status = queue => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || 'Off'}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? 'All Queue' : 'This Song' : 'Off'}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``

// // // // DisTube event listeners, more in the documentation page
// // // distube
// // // 	.on('playSong', (message, queue, song) => message.channel.send(
// // // 		`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`,
// // // 	))
// // // 	.on('addSong', (message, queue, song) => message.channel.send(
// // // 		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
// // // 	))
// // // 	.on('playList', (message, queue, playlist, song) => message.channel.send(
// // // 		`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`,
// // // 	))
// // // 	.on('addList', (message, queue, playlist) => message.channel.send(
// // // 		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`,
// // // 	))
// // // // DisTubeOptions.searchSongs = true
// // // 	.on('searchResult', (message, result) => {
// // // 		let i = 0
// // // 		message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join('\n')}\n*Enter anything else or wait 60 seconds to cancel*`)
// // // 	})
// // // // DisTubeOptions.searchSongs = true
// // // 	.on('searchCancel', message => message.channel.send(`Searching canceled`))
// // // 	.on('error', (message, e) => {
// // // 		console.error(e)
// // // 		message.channel.send(`An error encountered: ${e}`)
// // // 	})

// // // client.login("ODQ5MjE3Nzg2MzYyNDYyMjM4.YLX9sQ.oIPEMBFV-ShWwQdjYPIHax6npjE")
// // const fs = require('fs');
// // const discord = require('discord.js');

// // const client = new discord.Client({ disableMentions: 'everyone' });

// // const { Player } = require('discord-player');

// // client.player = new Player(client);
// // client.config = require('./config/bot');
// // client.emotes = client.config.emojis;
// // client.filters = client.config.filters;
// // client.commands = new discord.Collection();

// // fs.readdirSync('./commands').forEach(dirs => {
// //     const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

// //     for (const file of commands) {
// //         const command = require(`./commands/${dirs}/${file}`);
// //         console.log(`Loading command ${file}`);
// //         client.commands.set(command.name.toLowerCase(), command);
// //     };
// // });

// // const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
// // const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

// // for (const file of events) {
// //     console.log(`Loading discord.js event ${file}`);
// //     const event = require(`./events/${file}`);
// //     client.on(file.split(".")[0], event.bind(null, client));
// // };

// // for (const file of player) {
// //     console.log(`Loading discord-player event ${file}`);
// //     const event = require(`./player/${file}`);
// //     client.player.on(file.split(".")[0], event.bind(null, client));
// // };

// // client.login(client.config.discord.token);



// const Discord = require("discord.js");
// const DisTube = require("distube");
// const client = new Discord.Client({disableMentions: "everone"});
// const config = {
//     prefix: "?",
//     token: "ODQ5MjE3Nzg2MzYyNDYyMjM4.YLX9sQ.oIPEMBFV-ShWwQdjYPIHax6npjE"
// }
// const distube = new DisTube(client, {searchSongs: true, emitNewSongOnly: true, highWaterMark: 1<<25})

// const filters = ["3d","bassboost","echo","karaoke","nightcore","vaporwave","flanger"];


// //events
// client.login(config.token);

// client.on("ready", () =>{ //discordusername#1234
//     console.log(`Bot has started as : ${client.user.tag}`);
//     client.user.setActivity("Tomato",{type: "LISTENING"});
// })

// client.on("message", message => {
//     if(message.author.bot){ return; }
//     if(!message.guild) return;
//     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
//     const command = args.shift();

//     if(command === "ping"){
//         return embedbuilder(client, message, `sBLUE`, `PING:`, `\`${client.ws.ping} ms\``)
//     }

//     if(command === "play" || command === "p"){
//         embedbuilder(client, message, "YELLOW", "Searching!", args.join(" "))
//         return distube.play(message, args.join(" "));
//     }
//     if(command === "skip" || command === "s"){
//         embedbuilder(client, message, "YELLOW", "SKIPPED!", `Skipped the song`)
//         return distube.skip(message);
//     } 
//     if(command === "stop" || command === "leave"){
//         embedbuilder(client, message, "RED", "STOPPED!", `Leaved the channel`)
//         return distube.stop(message);
//     }
//     if(command === "seek"){
//         embedbuilder(client, message, "GREEN", "Seeked!", `seeked the song for \`${args[0]} seconds\``)
//         return distube.seek(message, Number(args[0]*1000));
//     } 
//     if(filters.includes(command)) {
//         let filter = distube.setFilter(message, command);
//         return embedbuilder(client, message, "YELLOW", "Adding filter!", filter)
//     }
//     if(command === "volume" || command === "vol"){
        
//         embedbuilder(client, message, "GREEN", "VOLUME!", `changed volume to \`${args[0]} %\``)
//         return distube.setVolume(message, args[0]);
//     } 
//     if (command === "queue" || command === "qu"){
//         let queue = distube.getQueue(message);
//         let curqueue = queue.songs.map((song, id) =>
//         `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
//         ).join("\n");
//         return  embedbuilder(client, message, "GREEN", "Current Queue!", curqueue)
//     }
//     if (command === "loop" || command === "repeat"){
//         if(0 <= Number(args[0]) && Number(args[0]) <= 2){
//             distube.setRepeatMode(message,parseInt(args[0]))
//             embedbuilder(client, message, "GREEN", "Repeat mode set to:!", `${args[0].replace("0", "OFF").replace("1", "Repeat song").replace("2", "Repeat Queue")}`)
//         }
//         else{
//             embedbuilder(client, message, "RED", "ERROR", `Please use a number between **0** and **2**   |   *(0: disabled, 1: Repeat a song, 2: Repeat all the queue)*`)
//         }
//     }
//     if ( command === "jump"){
//         let queue = distube.getQueue(message);
//         if(0 <= Number(args[0]) && Number(args[0]) <= queue.songs.length){
//             embedbuilder(client, message, "RED", "ERROR", `Jumped ${parseInt(args[0])} songs!`)
//             return distube.jump(message, parseInt(args[0]))
//             .catch(err => message.channel.send("Invalid song number."));
//         }
//         else{
//             embedbuilder(client, message, "RED", "ERROR", `Please use a number between **0** and **${DisTube.getQueue(message).length}**   |   *(0: disabled, 1: Repeat a song, 2: Repeat all the queue)*`)
//         }

    
//     }

// })

// //queue
// const status = (queue) => `Volume: \`${queue.volume}\` | Filter: \`${queue.filter || "OFF"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode === 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``
// //distube
// distube
//      .on("playSong", (message, queue, song) => {
//         embedbuilder(client, message, "GREEN", "Playing new Song!", `Song: \`${song.name}\`  -  \`${song.formattedDuration}\` \n\nRequested by: ${song.user}\n${status(queue)}`)
//      })
//      .on("addSong", (message, queue, song) => {
//         embedbuilder(client, message, "GREEN", "Added a Song!", `Song: \`${song.name}\`  -  \`${song.formattedDuration}\` \n\nRequested by: ${song.user}`)
//      })
//      .on("playList", (message, queue, playlist, song) => {
//         embedbuilder(client, message, "GREEN", "Playling playlist", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} songs\` \n\nRequested by: ${song.user}\n\nstarting playing Song: \`${song.name}\`  -  \`${song.formattedDuration}\`\n${status(queue)}`)
//      })
//      .on("addList", (message, queue, song) => {
//         embedbuilder(client, message, "GREEN", "Added a Playling!", `Playlist: \`${playlist.title}\`  -  \`${playlist.total_items} songs\` \n\nRequested by: ${song.user}`)
//      })
//      .on("searchResult", (message, result) => {
//         let i = 0;
//         embedbuilder(client, message, "YELLOW", "", `**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`)
//     })
//      // DisTubeOptions.searchSongs = true
//      .on("searchCancel", (message) =>  embedbuilder(client, message, "RED", `Searching canceled`, "")
//      )
//      .on("error", (message, err) => embedbuilder(client, message, "RED", "An error encountered:", err)
//      )
     

// //function embeds
// //embedbuilder(client, message, "RED", "TITEL", "DESCRIPTION")
// function embedbuilder(client, message, color, title, description){
//     let embed = new Discord.MessageEmbed()
//     .setColor(color)
//     .setFooter(client.user.username, client.user.displayAvatarURL());
//     if(title) embed.setTitle(title);
//     if(description) embed.setDescription(description);
//     return message.channel.send(embed);
// }



// //import escapeRegex from 'escape-string-regexp';
// const escapeRegex = require('escape-string-regexp') 
// const Discord = require('discord.js');

// const client = new Discord.Client();

// const { token,prefix } = require('./config.json');

// const { readdirSync } = require('fs');

// const { join } = require('path');

// const config = require('./config.json');
// client.config = config;

// const db = require('quick.db');

// const distube = require('distube');

// const player = new distube(client);

// player.on('playSong', (message, queue, song) => {
//     message.channel.send(`${song.name} has started playing!`)
// })

// client.player = player;

// client.commands= new Discord.Collection();
// //You can change the prefix if you like. It doesn't have to be ! or ;
// const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

// for (const file of commandFiles) {
//     const command = require(join(__dirname, "commands", `${file}`));
//     client.commands.set(command.name, command);
// }


// client.on("error", console.error);

// client.on('ready', () => {
//     console.log('I am ready');
//     client.user.setActivity(`the 5K subs challenge against `, { type: "COMPETING"})
// });


// let stats = {
//     serverID: '<ID>',
//     total: "<ID>",
//     member: "<ID>",
//     bots: "<ID>"
// }



// client.on('guildMemberAdd', member => {
//     if(member.guild.id !== stats.serverID) return;
//     client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
//     client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
//     client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
// })

// client.on('guildMemberRemove', member => {
//     if(member.guild.id !== stats.serverID) return;
//     client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
//     client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
//     client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
// })

// client.on("message", async message => {

//     if(message.author.bot) return;
//     if(message.channel.type === 'dm') return;

//     let prefix = await db.get(`prefix_${message.guild.id}`);
//     if(prefix === null) prefix = prefix;

//     //const escapeRegex = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

//     function escapeRegex(string) {
//       return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
//     }

// const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);


//     if(prefixRegex.test(message.content)){
//         const args = message.content.slice(prefix.length).trim().split(/ +/g);

//         const command = args.shift().toLowerCase();

//         if(!client.commands.has(command)) return;


//         try {
//             client.commands.get(command).run(client, message, args);

//         } catch (error){
//             console.error(error);
//         }
//     }
// })

// client.login(token);



const Discord = require("discord.js")
const client = new Discord.Client(); 
const {token,prefix}= require("./config.json")
const {readdirSync}= require("fs")
const {join} = require("path")
const config= require("./config.json")
client.config = config;
const db = require ("quick.db")
const distube = require("distube")
const player = new distube(client)

player.on('playSong',(message,queue,song)=>{

message.channel.send(`${song.name} lagu mulai`)

})

client.player=player;

// client.giveawayManager = new GiveawayManager(client,{

// storage:"./giveaways.json",
// updateCountdownEvery:5000,
// // default:{


// // }

// });
client.commands = new Discord.Collection();
const commandfiles = readdirSync(join(__dirname,"commands")).filter(file=>file.endsWith(".js"))

for( const file of commandfiles){
  const command=require(join(__dirname,"commands",`${file}`))
  client.commands.set(command.name,command)

}



client.on("error",console.eror)
client.on("ready",()=>{
  console.log("readyyy")
})