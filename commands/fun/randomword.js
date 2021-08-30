const DiscordJS = require('discord.js')
var randomWords = require('random-words');

module.exports = {
    category: 'Testing',
    description: 'Replies with a random word', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
      const embed = new DiscordJS.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Random Word')
      .setDescription(`**${randomWords()}**`)
      .setTimestamp(Date.now());

    // message is provided only for a legacy command
    if (message) {
      message.reply({embeds: [embed]})
      return
    }
    },
  }