
const mySecret = process.env['TOKEN']
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
require('dotenv').config({path: __dirname + '/.env'})
const path = require('path')

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),

    disabledDefaultCommands: [
      'help',
      'command',
      'language',
      'prefix',
      'requiredrole'
    ],

    testServers: '878695365761716285',

  })
  .setDefaultPrefix('.')
  .setBotOwner(['359755774873960450'])

  client.user.setActivity("the time fly by | .help", {
    type: "WATCHING",
  });
  client.user.setStatus('online')
})

client.login(mySecret)
