const { readdirSync } = require("fs")
const { join } = require("path")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord.js")
const { token, clientId, guildId} = require("./config.json")

const commands = [];
const commandPath = join(__dirname, "./src/Commands");
const commandFiles = readdirSync(commandPath).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const filePath = join(commandPath, file)
    const command = require(filePath)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: "10" }).setToken(token);
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
.then(() => console.log("Commands Updated!"))
.catch(console.error)
