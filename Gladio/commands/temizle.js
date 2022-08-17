const Discord = require("discord.js");
const veri = require("../veriler.json")
const { MessageActionRow, MessageButton } = require('discord.js');
const { botkomut, yon, sahip}= require("../fonks.js")


exports.run = async (client, message, args) => {

  if(botkomut(message) === 1){
    return
  }

  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('a2')
      .setLabel('10')
      .setStyle('SECONDARY'),
      new MessageButton()
      .setCustomId('b2')
      .setLabel('25')
      .setStyle('SUCCESS'),
      new MessageButton()
      .setCustomId('c2')
      .setLabel('50')
      .setStyle('DANGER'),
      new MessageButton()
      .setCustomId('d')
      .setLabel('100')
      .setStyle('PRIMARY'),
      
                );
    message.reply({content:`Lütfen miktar seçimi yapın! \n\n**[Uyarı: BOT 14 günden eski mesajları temizleyemez! Lütfen bu duruma göre uygun bir mesaj miktarı bildirin!]**`, components:[row]})
const filter = i => i.user.id === message.author.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 10000 });
            
collector.on("collect", async i => {
            
if(i.customId === "a2") {
  message.delete()
  await message.channel.bulkDelete(10)
  message.channel.send(`**10** adet mesaj temizlendi!`)
}
if(i.customId === "b2") {
  message.delete()
  await message.channel.bulkDelete(25)
  message.channel.send(`**25** adet mesaj temizlendi!`)
}
if(i.customId === "c2") {
  message.delete()
  await message.channel.bulkDelete(50)
  message.channel.send(`**50** adet mesaj temizlendi!`)
}
if(i.customId === "d") {
  message.delete()
  await message.channel.bulkDelete(100)
  message.channel.send(`**100** adet mesaj temizlendi!`)
}
})

};
exports.conf = {
  aliases: ["temizle","clear"]
};

exports.help = {
  name: "sil"
};
