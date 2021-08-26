const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const embed = new DiscordJS.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('Uptime')
        .setDescription(`Total Uptime: ${uptime}`)
		.setTimestamp(Date.now());

      // message is provided only for a legacy command
      if (message) {
        message.reply({embeds: [embed]})
        return
      }
    },
  }