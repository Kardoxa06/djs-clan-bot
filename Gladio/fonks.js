const { delByPriority } = require("croxydb")

exports.botkomut = function(message) {
    const veri = require("./veriler.json")
    if(!message.member.roles.cache.has(veri.botcommand) & !message.member.permissions.has(8)){
        message.channel.send("Gerekli yetkiye sahip değilsin.")
        return(1)
    }
}

exports.yon = function(message) {
    const veri = require("./veriler.json")
    if(!message.member.permissions.has(8)){
        message.channel.send("Gerekli yetkiye sahip değilsin.")
        return(1)
    }
}

exports.sahip = function(message) {
    const veri = require("./veriler.json")
    if(!message.member.id === "583288613886754816"){
        message.channel.send("Gerekli yetkiye sahip değilsin.")
        return(1)
    }
}

exports.embed = function(message, x, y) {
    const veri = require("./veriler.json")
    const { MessageEmbed } = require("discord.js")
    const kardoxa = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
   .setColor("RANDOM")
   .setFooter("Kardoxa love you")
   .setTitle(y)
   .setDescription(x)
    message.channel.send({ embeds: [kardoxa] })


    
}

exports.cpuan = function(message, m, x, y) {
    const veri = require("./veriler.json")
    const db = require("croxydb")
    const { MessageEmbed } = require("discord.js")
    const kanal = message.guild.channels.cache.get("994561788215566387")
    const kardoxa = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
   .setColor("BLACK")
   .setFooter("Kardoxa love you")
   .setDescription(`<:paw:994566578681151601> ${m} kullanıcısına **${x}** cezası ile **${y}** ceza puanı ekledim!`)
    kanal.send({ embeds: [kardoxa] })
    db.add(`cpuan_${m.id}`, y)
    


    
}