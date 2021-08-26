const DiscordJS = require('discord.js')

module.exports = {
    category: 'Testing',
    description: 'Replies with pong', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, interaction }) => {
        const embed = new DiscordJS.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Guild Information')
        .setDescription('Below is information about this current guild')
        .addField('Guild Name', `${message.guild.name}`, true)
        .addField('Guild Id', `${message.guild.id}`, true)
        .addField('Guild Owner/Creator', `<@${message.guild.ownerId}>`, true)
        .addField('Guild Member Count', `${message.guild.memberCount}`, true)
        .addField('Guild Creation Date', `${message.guild.createdAt}`, true)
        .addField('Guild Shard Id', `${message.guild.shardID}`, true)
        .addField('Is Large?', `${message.guild.large}`, true)
        .addField('Is Available?', `${message.guild.available}`, true)
        .addField('Is Verified?', `${message.guild.verified}`, true)
        .addField('Is Partnered?', `${message.guild.partnered}`, true)
        .setTimestamp(Date.now());

      // message is provided only for a legacy command
      if (message) {
        message.reply({embeds: [embed]})
        return
      }
    },
  }