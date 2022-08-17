const Discord = require("discord.js");
const ms = require("ms")
const { botkomut, yon, sahip, embed, cpuan}= require("../fonks.js")
const canva = require("discord-canvas")
const db = require("croxydb")
const veri = require("../veriler.json")

exports.run = async (client, message, args) => {
  if(sahip(message) === 1){
    return
  }
    const member = message.mentions.members.first()  || message.guild.members.cache.get(args[0]) 
    const sebep = args.splice(1).join(" ") || "Sebep Belirtilmemiş!"

    // if(!member){
    //     embed(message, "Lütfen komutu düzgün bir şekilde kullanın! **ör. !yargı @Kardoxa/ID Deneme**","Başarısız")
    //     return
    // }


    member.ban({reason: sebep})
    const kardoxa = new Discord.MessageEmbed()
    .setTitle("Kardoxa <3")
    .setColor("BLACK")
    .setFooter("Kardoxa <3 Kardoxa")
    .setTimestamp()
    .setDescription(`${member} kullanıcısı **${sebep}** sebebi ile anasının amına paketlendi! `)
    message.reply({embeds: [kardoxa]})
    message.react("<:yes:993127585204670565> ")
    cpuan(message, member, "KardoxaBan", "100")
    const log = client.channels.cache.get("994561788215566387")
        const embed = new Discord.MessageEmbed()
        .setTitle("Kardoxa Öpücüğü")
        .setColor("BLACK")
        .setFooter("Kardoxa love you")
        .setTimestamp()
        .setDescription(`${member} kullanıcısı **KARDOXA** tarafından **${sebep}** sebebi ile füzelendi!`)
        log.send({embeds: [embed]})

  
};
exports.conf = {
  aliases: ["xd"]
};

exports.help = {
  name: "kardoxa"
};
