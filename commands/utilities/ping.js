const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription(`Replies with "Pong" to test response time.`),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
};
