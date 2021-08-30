const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
        const embed = new DiscordJS.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('Help Information')
        .setDescription('Below is the command list')
        .addField('Misc', '- .help\n- .ping\n- .uptime', true)
        .addField('Info', '- .userinfo\n- .serverinfo', true)
        .addField('Fun', '- .randomword\n- .8ball\n- .weather', true)
        .addField('Maths', '- .add\n- .subtract\n- .multiply\n- .divide', true)
        .addField('Maths', 'The Bugstick was created by BobsterJS & gamers. For support join [here](https://discord.gg/78DMCjZatu)', true)
		.setTimestamp(Date.now());

      // message is provided only for a legacy command
      if (message) {
        message.reply({embeds: [embed]})
        return
      }
    },
  }