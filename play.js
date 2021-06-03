// module.exports = {
//     name: 'play',
//     aliases: ['!'],
//     category: 'Music',
//     utilisation: '{prefix}play [name/URL]',

//     execute(client, message, args) {
//         if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

//         if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

//         if (!args[0]) return message.channel.send(`${client.emotes.error} - Please indicate the title of a song !`);

//         client.player.play(message, args.join(" "), { firstResult: true });
//     },
// };
module.exports = {
    name: "play",
    description: "Play a song from YouTube",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel first!");

        let search = args.join(" ");

        if(!search) return message.channel.send('Please provide a search query');

        client.player.play(message, search)
    }
}

