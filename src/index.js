const { Client, GatewayIntentBits, Collection } = require("discord.js");
const path = require("path");
const { readdirSync} = require("fs")
const { token } = require("../config.json")
const client = new Client({
    allowedMentions: { parse: ["users", "roles"]},
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildBans ]
});
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//                               Event Handlers
const eventPath = path.join(__dirname, "Events");
const eventFiles = readdirSync(eventPath).filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
    const filePath = path.join(eventPath, file);
    const event = require(filePath);
    if(event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args))
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args))
    }
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
//                               Command Handler
client.commands = new Collection();

const commandPath = path.join(__dirname, "Commands");
const commandFiles = readdirSync(commandPath).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const filePath = path.join(commandPath, file);
    const command = require(filePath)
    client.commands.set(command.data.name, command);
};
//-------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------
//                                 LoginToken Started Client
client.login(token)

//-------------------------------------------------------------------------------------