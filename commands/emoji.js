const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('emoji')
    .setDescription('Replies with all emojis in server.')
    .addStringOption(option =>
      option.setName('emoji')
        .setDescription('server emoji to reply with')
        .setRequired(false)),

  async execute(interaction) {
    const emoji_name = interaction.options.getString('emoji');
    const em = await interaction.guild.emojis.fetch();

    let reply = ``;
    if (emoji_name) {
      let found = false;
      for (const emoji of em) {
        if (emoji[1].name === emoji_name) {
          console.log("HI!");
          reply = reply.concat(`${emoji[1].url}`);
          found = true;
        }
      }
      if (!found) {
        console.log("hello");
        reply = reply.concat(`Emoji not found!`);
      }
    } else {
      reply = reply.concat(`There are ${em.size} emojis:\n`);
      for (const emoji of em) {
        reply = reply.concat(`:${emoji[1].name}: ${emoji[1].url}\n`);
      }
    }
    console.log("reply: ".concat(reply));
    await interaction.reply(reply);
  }
};
