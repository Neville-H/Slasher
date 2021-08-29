const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong and execution time!'),
	async execute(interaction) {
		await interaction.reply(`Pong! This command took ${(Date.now() - interaction.createdTimestamp)/1000} seconds to execute.`);
	},
};
