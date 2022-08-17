const Discord = require("discord.js");
const veri = require("../veriler.json")
const { MessageActionRow, MessageButton } = require('discord.js');
const { botkomut, yon, sahip, embed}= require("../fonks.js");
const db = require("croxydb")


exports.run = async (client, message, args) => {

  if(botkomut(message) === 1){
    return
  }


  const toplam = message.guild.memberCount
  let ses = message.guild.members.cache.filter(member => member.voice.channel && !member.user.bot).size.toString();
  let bot = message.guild.members.cache.filter(member => member.user.bot && member.voice.channel).size.toString();
  let boost = message.guild.premiumSubscriptionCount
  if (boost >= 2) db.set("level", "1")
  if (boost >= 7) db.set("level", "2")
  if (boost >= 14) db.set("level", "3")
  embed(message, 
    `Sunucumuzda toplam **${toplam}** üye var.
     Sesli sohbet kanalında **${ses} (+${bot})** kullanıcı var.
     Sunucumuza şu anda **${boost}** adet boost basılmış. **(${db.fetch("level")}. seviye)** `,
     `Veriler`)
    



};
exports.conf = {
  aliases: ["say"]
};

exports.help = {
  name: "say"
};
