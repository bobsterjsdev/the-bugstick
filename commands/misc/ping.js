const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
      const embed = new DiscordJS.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Ping Testing')
      .setDescription(`:ping_pong: Pong! | Latency: ${Date.now() - message.createdTimestamp}ms. Websocket: ${client.ws.ping}ms.`)
      .setTimestamp(Date.now());

    // message is provided only for a legacy command
    if (message) {
      message.reply({embeds: [embed]})
      return
    }
    },
  }