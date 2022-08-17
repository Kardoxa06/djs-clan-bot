const Discord = require("discord.js");
const ms = require("ms")
const { botkomut, yon, sahip}= require("../fonks.js")
const canva = require("discord-canvas")
const db = require("croxydb")

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.member || message.guild.members.cache.get(args[0]) 
    const role = member.roles.cache.filter(role => role.id !== message.guild.id).sort((a, b) => b.position - a.position).map(role => `<@&${role.id}>`)
    const rozetler = db.fetch(`rozet_${member.id}`).join(" ") || "Bulunamadı!"
    const ceza = db.fetch(`cpuan_${member.id}`) || "Bulunamadı!"
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.tag} kullanıcısının profili!`)
    .setFooter("Kardoxa love you")
    .setColor("BLACK")
    .setTimestamp()
    .setDescription(`
    **Discord ID'niz**: \`${member.id}\`
    **Rozetleriniz**: ${rozetler}
    **Ceza Puanınız**: \`${ceza}\`
    
    `)
    message.reply({embeds: [embed]})
 

};
exports.conf = {
  aliases: ["profile","p"]
};

exports.help = {
  name: "profil"
};
