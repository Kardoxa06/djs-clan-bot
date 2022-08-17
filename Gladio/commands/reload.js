const Discord = require("discord.js");
const ms = require("ms")
const { botkomut, yon, sahip}= require("../fonks.js")


exports.run = async (client, message, args) => {
 
  if(sahip(message) === 1){
    return
  }

  const restart = new Discord.MessageEmbed()
  .setDescription("**Bot yeniden başlatılıyor**")
  .setColor("#000001");

message.channel.send({ embeds: [restart] });
  console.log(`[BOT] Yeniden başlatılıyor...`);


   setTimeout(function() {
      process.exit();
  }, ms("2s"));
   

};
exports.conf = {
  aliases: ["restart"]
};

exports.help = {
  name: "reload"
};
