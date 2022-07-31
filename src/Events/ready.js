module.exports = {
    name: "ready",
    execute(client) {
        console.log(`[${client.user.username}] I'am online`);
    }
}