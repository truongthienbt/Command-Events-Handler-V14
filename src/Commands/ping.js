const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Bot 9ty Ping"),
async execute(client, interaction) {
    interaction.reply(`Pong ${client.ws.ping}ms`)
}
}