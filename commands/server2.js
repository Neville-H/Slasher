const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server2')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
    let owner = await interaction.guild.fetchOwner();
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}\nServer Owner: ${owner.user.tag}`);
	},
};
