const DiscordJS = require('discord.js')
const prefix = '.'

module.exports = {
    category: 'Testing',
    description: 'Replies with a random word', // Required for slash commands
    slash: false, // Create both a slash and legacy command
    testOnly: false, // Only register a slash command for the testing guilds
    callback: ({ client, message, args, interaction }) => {
        if(args.length) {                
            var args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
            console.log(args)

            var responses = [
              'It is certain.',
              'It is decidedly so.',
              'Without a doubt.',
              'Yes - definitely.',
              'You may rely on it.',
              'As I see it, yes.',
              'Most likely.',
              'Outlook good.',
              'Yes.',
              'Signs point to yes.',
              'Reply hazy, try again.',
              'Ask again later.',
              'Better not tell you now.',
              'Cannot predict now.',
              'Concentrate and ask again.',
              'Don\'t count on it.',
              'My reply is no.',
              'My sources say no.',
              'Outlook not so good.',
              'Very doubtful.'
          ];

          var randomNumber = Math.floor(Math.random()*responses.length);
          var response = responses[randomNumber];

          let wordembed = new DiscordJS.MessageEmbed()
                  .setTitle('8 Ball Prediction')
                  .setDescription(response)
                  .setColor('RANDOM');
                  if (message) {
                    message.reply({embeds: [wordembed]})
                    return
                  }
    } else {
        let wordembed4 = new DiscordJS.MessageEmbed()
        .setTitle('8 Ball - Error')
        .setDescription(`Please input a question/sentence`)
        .setColor('RANDOM');
        if (message) {
            message.reply({embeds: [wordembed4]})
            return
          }
    }

    // message is provided only for a legacy command
    },
  }