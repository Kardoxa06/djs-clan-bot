const Discord = require("discord.js");
const veri = require("../veriler.json")
const { MessageActionRow, MessageButton } = require('discord.js');
const db = require("croxydb")
const { botkomut, yon, sahip}= require("../fonks.js")

exports.run = async (client, message, args) => {
  if(yon(message) === 1){
    return
  }
  /////////////////
const row = new MessageActionRow()
.addComponents(
  new MessageButton()
    .setCustomId('bonusevet')
    .setLabel('Evet')
    .setStyle('SUCCESS'),
    new MessageButton()
    .setCustomId('bonushayır')
    .setLabel('Hayır')
    .setStyle('DANGER'),
              );
////////
  const eklenecek = args[1] || args[0]
  const member = message.mentions.members.first() || message.author || message.guild.members.cache.get(args[0])

  if(!eklenecek){
    const embed = new Discord.MessageEmbed()
    .setTitle("Başarısız")
    .setDescription(`Lütfen komutu uygun şekilde kullanının! \n\nÖrneğin; **!bonus -(@Kardoxa/ID)-  -eklenecekadet-**`)
    .setColor("RED")
    .setFooter("Kardoxa love you")
    .setTimestamp()
    message.reply({embeds: [embed]})
    message.react("❎")
    return
  }

  const mesaj = new Discord.MessageEmbed()
  .setTitle("Bonus Davet Ekleme İşlemi")
  .setColor("GOLD")
  .setFooter("Kardoxa love you")
  .setTimestamp()
  .setDescription(`${member} kullanıcısına **${eklenecek} adet** bonus davet eklemek istediğinize emin misiniz? Kararınız için fonksiyonel butonları kullanabilirsiniz.`)
  message.reply({embeds: [mesaj], components: [row]})

  const filter = i => i.user.id === message.author.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 10000 });

collector.on("collect", async i => {

if(i.customId === "bonusevet") {

  db.add(`bonus_${member.id}`, eklenecek)
  db.add(`toplam_${member.id}`, eklenecek)
  await i.deferUpdate();
  i.editReply({ components: [], content:`${member} kullanıcısına **${eklenecek} adet** bonus davet eklendi!`, embeds: []})
  collector.stop()
}
if(i.customId === "bonushayır") {
  await i.deferUpdate();
  i.editReply({ components: [], content:`**❎ İşlem iptal edildi!**`, embeds: []})
  collector.stop()
}


})
};
exports.conf = {
  aliases: ["bonus","davet-ekle"]
};

exports.help = {
  name: "bonus"
};
