const Discord = require("discord.js");
const veri = require("../veriler.json")
const { MessageActionRow, MessageButton } = require('discord.js');
const db = require("croxydb")

exports.run = async (client, message, args) => {
  // if(!message.member.roles.cache.has(veri.botcommand)){
  //   message.channel.send("Gerekli yetkiye sahip değilsin.")
  //   return
  // }
  const member = message.mentions.members.first() || message.author || message.guild.members.cache.get(args[0]) 
  const toplam = db.fetch(`toplam_${member.id}`) || "0"
  const leave = db.fetch(`leave_${member.id}`) || "0" 
  const fake = db.fetch(`fake_${member.id}`) || "0"
  const bonus = db.fetch(`bonus_${member.id}`) || "0"
/////////////////
const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('a1')
      .setLabel('Hepsini Sıfırla')
      .setStyle('SECONDARY'),
      new MessageButton()
      .setCustomId('b1')
      .setLabel('Bonusları Sıfırla')
      .setStyle('SUCCESS'),
      new MessageButton()
      .setCustomId('c1')
      .setLabel('Sahteyi Sıfırla')
      .setStyle('DANGER'),
                );
////////




  const embed = new Discord.MessageEmbed()
  .setTitle(`${member.username} kullancısının davetleri`)
  .setFooter("Kardoxa love you")
  .setTimestamp()
  .setColor("BLACK")
  .setDescription(`Kullanıcıya **!bonus** komutu ile bonus davet ekleyebilirsiniz!`)
  .addField("Toplam davet", `${toplam} (**+${bonus}** bonus!)`, true)
  .addField("Sahte", `${fake}`, true)
  message.reply({embeds: [embed], components: [row]})
  message.react("✅")


  const filter = i => i.user.id === message.author.id

const collector = message.channel.createMessageComponentCollector({ filter, time: 10000 });
            
collector.on("collect", async i => {
            
if(i.customId === "a1") {
  
  await db.delete(`toplam_${member.id}`)
  await db.delete(`fake_${member.id}`)
  await db.delete(`bonus_${member.id}`)
  await i.deferUpdate();
  i.editReply({ components: [], content:`**Tüm veriler sıfırlandı!**`, embeds: []})
  collector.stop()

}
if(i.customId === "b1") {
  
  await db.add(`toplam_${member.id}`, `-${db.fetch(`bonus_${member.id}`)}`)
  await db.delete(`bonus_${member.id}`)
  await i.deferUpdate();
  i.editReply({ components: [], content:`**Bonus** davet verileri sıfırlandı!`, embeds: []})
  collector.stop()
}
if(i.customId === "c1") {
  
  await db.delete(`fake_${member.id}`)
  await i.deferUpdate();
  i.editReply({ components: [], content:`**Sahte** davet verileri sıfırlandı!`, embeds: []})
  collector.stop()
}
})

  

   


};
exports.conf = {
  aliases: ["invites","me"]
};

exports.help = {
  name: "davetler"
};
