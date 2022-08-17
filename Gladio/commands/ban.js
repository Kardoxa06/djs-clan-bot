const Discord = require("discord.js");
const ms = require("ms")
const { botkomut, yon, sahip, embed , cpuan}= require("../fonks.js")
const canva = require("discord-canvas")
const db = require("croxydb")
const veri = require("../veriler.json")

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has("993991796126384148") & !message.member.permissions.has(8)){
    message.channel.send("Gerekli yetkiye sahip değilsin.")
    return
}
    const member = message.mentions.members.first()  || message.guild.members.cache.get(args[0]) 
    const sebep = args.splice(1).join(" ") || "Sebep Belirtilmemiş!"

    if(!member){
        embed(message, "Lütfen komutu düzgün bir şekilde kullanın! **ör. !yargı @Kardoxa/ID Deneme**","Başarısız")
        return
    }


    member.ban({reason: sebep})
    const kardoxa = new Discord.MessageEmbed()
    .setTitle("Başarılı!")
    .setColor("BLACK")
    .setFooter("Kardoxa love you")
    .setTimestamp()
    .setDescription(`${member} kullanıcısı **${sebep}** sebebi ile sunucudan uzaklaştırıldı! `)
    message.reply({embeds: [kardoxa]})
    message.react("<:yes:993127585204670565> ")
    cpuan(message, member, "Ban", "50")
    const log = client.channels.cache.get("994561788215566387")
        const embed = new Discord.MessageEmbed()
        .setTitle("Yasaklama Cezası!")
        .setColor("BLACK")
        .setFooter("Kardoxa love you")
        .setTimestamp()
        .setDescription(`${member} kullanıcısına ${message.author} tarafından **${sebep}** sebebi ile yasaklama cezası uygulandı!`)
        log.send({embeds: [embed]})

  
};
exports.conf = {
  aliases: ["ban","yargı"]
};

exports.help = {
  name: "yasakla"
};
