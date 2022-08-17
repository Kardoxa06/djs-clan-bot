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
  
    const member = message.mentions.members.first() || message.member || message.guild.members.cache.get(args[0]) 
    const rozet = args[1]

    if(!rozet){
        embed(message, "**Lütfen rozet belirtin**","Başarısız!")
        return
    }
    db.push(`rozet_${member.id}`, rozet)
    message.reply(`${member} kullanıcısına başarıyla ${rozet} rozetini ekledim!`)
    
};
exports.conf = {
  aliases: ["rozetekle","rozet"]
};

exports.help = {
  name: "rozet"
};
