// Heroku Version

// Require the necessary discord.js classes
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const fs = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  //  const { commandName } = interaction;
  const command = client.commands.get(interaction.commandName);

  // if (commandName === 'ping') {
  //   await interaction.reply(`Pong! This command took ${(Date.now() - interaction.createdTimestamp)/1000} seconds to execute.`);
  // } else 
  // if (commandName === 'server') {
  //   await interaction.reply(`Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
  // } else if (commandName === 'user') {
  //   await interaction.reply(`Tag: ${interaction.user.tag}\nID: ${interaction.user.id}\nAvatar URL: ${interaction.user.displayAvatarURL()}`);
  // }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }

});


// Login to Discord with your client's token
client.login(token);
