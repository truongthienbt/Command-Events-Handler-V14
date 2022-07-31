const { InteractionType } = require("discord.js")

module.exports = {
    name: "interactionCreate",
    execute(client, interaction) {
        if(interaction.type == InteractionType.ModalSubmit) {
            const inputMessage = interaction.fields.getTextInputValue("inputMessage");
            const channel = interaction.guild.channels.cache.get(interaction.channelId)
            channel.send(inputMessage)
            interaction.reply({ content: "Message is successfully!", ephemeral: true })
        }
        if(!interaction.isChatInputCommand()) return
        const { commandName } = interaction
        const command = client.commands.get(commandName)
        if(!command) return
        try {
           command.execute(client, interaction)
        } catch (error) {
            console.error(error)
            return interaction.reply(`An error occured while executing this commands.\n \`\`\`.js\n${error.message}\n\`\`\``)
    }
}
}