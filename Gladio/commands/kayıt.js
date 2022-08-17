const Discord = require("discord.js");
const veri = require("../veriler.json")
const { MessageActionRow, MessageButton } = require('discord.js');
const db = require("croxydb")
const { botkomut, yon, sahip, embed}= require("../fonks.js")

exports.run = async (client, message, args) => {
  // if(botkomut(message) === 1){
  //   return
  // }
  /////////////////
const a = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setCustomId('a')
    .setLabel('Klan üyesi')
    .setEmoji('993992792068075710')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('b')
    .setEmoji('993992793934528632')
    .setLabel('Müttefik')
    .setStyle('SECONDARY'),
    new MessageButton()
    .setCustomId('c')
    .setEmoji('993992795792605194')
    .setLabel('Sunucu Yetkilisi')
    .setStyle('PRIMARY'),
    new MessageButton()
    .setCustomId('d')
    .setEmoji('993127583686336583')
    .setLabel('İptal')
    .setStyle('DANGER'),
              );
////////
// const member =  message.mentions.members.first() || message.guild.members.cache.get(args[0])
// if(!member){
//   message.react("<:no:993127583686336583>")
//   const embed = new Discord.MessageEmbed()
//   .setTitle("Başarısız")
//   .setColor("RED")
//   .setTimestamp()
//   .setFooter("Kardoxa love you")
//   .setDescription(`Bir kullanıcı belirtmelisiniz.`)
//   message.reply({embeds: [embed]})
//   return
// }
// if(member.id === message.author.id){
//   message.react("<:no:993127583686336583>")
//   const embed = new Discord.MessageEmbed()
//   .setTitle("Başarısız")
//   .setColor("RED")
//   .setTimestamp()
//   .setFooter("Kardoxa love you")
//   .setDescription(`Kendinizi kayıt edemezsiniz.`)
//   message.reply({embeds: [embed]})
//   return
// }
// if(!member.manageable){
//   message.react("<:no:993127583686336583>")
//   const embed = new Discord.MessageEmbed()
//   .setTitle("Başarısız")
//   .setColor("RED")
//   .setTimestamp()
//   .setFooter("Kardoxa love you")
//   .setDescription(`Belirttiğiniz kullanıcıya müdahele edecek yetkiye sahip değilim.`)
//   message.reply({embeds: [embed]})
//   return
// }
const embed = new Discord.MessageEmbed()
.setTitle("Kayıt Talebi!")
.setFooter("Kardoxa love you")
.setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
.setTimestamp()
.setDescription(`Merhaba ${message.author}! 
\n Öncelikle kayıt talebi oluşturmak için hangi türde kayıt olacağınızı seçin!
\n Seçim için fonksiyonel butonları kullanabilirsiniz.
\n Unutmayın seçim için yalnızca **10 saniyeniz** var!
\n **Uyarı: yanlış veya troll talep oluşturmak ban sebebidir.**`)
message.reply({ embeds: [embed], components: [a]})





};
exports.conf = {
  aliases: ["kayıt","reg","k"]
};

exports.help = {
  name: "r"
};
