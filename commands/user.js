const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with user info!'),
	async execute(interaction) {
		await interaction.reply(`Tag: ${interaction.user.tag}\nID: ${interaction.user.id}\nAvatar URL: ${interaction.user.displayAvatarURL()}`);
  },
};
