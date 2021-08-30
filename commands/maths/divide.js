const DiscordJS = require('discord.js')
const math = require('discord-math');

module.exports = {
    category: 'Testing',
    description: 'Replies with a random word', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, args, interaction }) => {
        let num1 = Number(args[0]);
		let num2 = Number(args[1]);

		if (!num1) return message.channel.send('Number 1 needs to be specified!');
		if (!num2) return message.channel.send('Number 2 needs to be specified!');

		const embed = new DiscordJS.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Addition - Maths')
			.setDescription(`Answer: ${math.calculate(num1, '/', num2)}`)
			.setTimestamp(Date.now());

            message.reply({embeds: [embed]})
  }
}