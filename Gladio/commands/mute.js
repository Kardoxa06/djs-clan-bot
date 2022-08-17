const Discord = require("discord.js");
const ms = require("ms")
const { botkomut, yon, sahip, embed, cpuan}= require("../fonks.js")
const canva = require("discord-canvas")
const db = require("croxydb")
const veri = require("../veriler.json")

exports.run = async (client, message, args) => {
  if(botkomut(message) === 1){
    return
  }
  
    const member = message.mentions.members.first()  || message.guild.members.cache.get(args[0]) 
    const time = args[1]
    const sebep = args.splice(2).join(" ") || "Sebep Belirtilmemiş!"

    if(!member || !time){
        embed(message, "Lütfen komutu düzgün bir şekilde kullanın! **ör. !mute Kardoxa/ID 10m Hakaret**","Başarısız")
        return
    }

    const time2 = time.replace("s"," Saniye").replace("m"," Dakika").replace("h"," Saat").replace("d", " Gün").replace("S"," Saniye").replace("M"," Dakika").replace("H"," Saat").replace("D", " Gün")
    member.roles.add("994561191739412540")
    const kardoxa = new Discord.MessageEmbed()
    .setTitle("Başarılı!")
    .setColor("BLACK")
    .setFooter("Kardoxa love you")
    .setTimestamp()
    .setDescription(`${member} kullanıcısına **${sebep}** sebebi ile **${time2}** susturulma cezası uygulandı! `)
    message.reply({embeds: [kardoxa]})
    message.react("<:yes:993127585204670565> ")
    cpuan(message, member, "Susturulma", "20")


    setTimeout(function() {
      if(member.roles.cache.has("994561191739412540")){
        member.roles.remove("994561191739412540")
        const log = client.channels.cache.get("994561788215566387")
        const embed = new Discord.MessageEmbed()
        .setTitle("Ceza sona erdi!")
        .setColor("BLACK")
        .setFooter("Kardoxa love you")
        .setTimestamp()
        .setDescription(`${member} kullanıcısına ${message.author} tarafından **${sebep} sebebi ile atılan **${time2}** susturulma cezası sona erdi!`)
        log.send({embeds: [embed]})
      }
      }, ms(time));
};
exports.conf = {
  aliases: ["mute","sustur"]
};

exports.help = {
  name: "m"
};
