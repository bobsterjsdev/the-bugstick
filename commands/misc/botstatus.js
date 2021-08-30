const DiscordJS = require('discord.js')
const os = require('os')

module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    ownerOnly: true,
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
      const embed = new DiscordJS.MessageEmbed()
      .setColor('RANDOM')
      .setTitle('Owner Bot Status')
      .addField('Server Total Memory', `${os.totalmem()}`, true)
      .addField('Server Free Memory', `${os.freemem()}`, true)
      .addField('Server Hostname', `${os.hostname()}`, true)
      .addField('Operating System Platform', `${os.platform()}`, true)
      .addField('Operating System Architecture', `${os.arch()}`, true)
      .addField('Operating System Platform', `${os.type()}`, true)
      .addField('Server Uptime', `${os.uptime()}`, true)
      .addField('Bot Latency', `${Date.now() - message.createdTimestamp}ms.`, true)
      .addField('Uptime', `${client.ws.ping}ms.`, true)
      .setTimestamp(Date.now());

    // message is provided only for a legacy command
    if (message) {
      message.reply({embeds: [embed]})
      return
    }
    },
  }