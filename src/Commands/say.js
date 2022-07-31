const { SlashCommandBuilder, TextInputBuilder, ModalBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Message send"),
async execute(client, interaction) {
//--------------------------------------------------------------//
//                      Create Modals
    const modal = new ModalBuilder()
    .setCustomId("modalSay")
    .setTitle("say")

    const messageInput = new TextInputBuilder()
    .setCustomId("inputMessage")
    .setLabel("Say Commands!")
    .setStyle(TextInputStyle.Paragraph)
    .setPlaceholder("Say somethings")
//                       Create Action Row
    const actionRow = new ActionRowBuilder().addComponents(messageInput)
//                        Add Action Modal
    modal.addComponents(actionRow)
//                        Send Modals
    await interaction.showModal(modal)
    
//---------------------------------------------------------------------
}
}