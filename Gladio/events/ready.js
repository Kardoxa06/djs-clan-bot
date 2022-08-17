const client = require("../index");

client.on("ready", () => {
    console.log(`[BOT] Botumuz başarıyla aktif oldu!`)
    client.user.setPresence({ activities: [{ name: "Kardoxa 💝 Xir", type: "LISTENING" }] });
});
