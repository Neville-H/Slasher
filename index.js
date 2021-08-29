// Heroku Version

// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply(`Pong! This command took ${(Date.now() - interaction.createdTimestamp)/1000} seconds to execute.`);
  } else if (commandName === 'server') {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
  } else if (commandName === 'user') {
    await interaction.reply(`Tag: ${interaction.user.tag}\nID: ${interaction.user.id}\nAvatar URL: ${interaction.user.displayAvatarURL()}`);
  }
});


// Login to Discord with your client's token
client.login(token);
