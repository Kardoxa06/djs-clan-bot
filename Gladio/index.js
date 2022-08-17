const { Client, Message, MessageEmbed, Collection, DiscordAPIError } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const token = config.token;
const invite = require('invite-module');//gweepcreative
const db = require("croxydb")


const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;
invite.inviteCounter(client);
require("./events/message.js")
require("./events/ready.js")
const discordModals = require('discord-modals');
discordModals(client);

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`Toplam ${files.length} komut ile hizmetinizde!`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`[KOMUT] ${props.help.name} aktif!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


const { joinVoiceChannel } = require('@discordjs/voice');
  client.on('ready', () => { 
   joinVoiceChannel({   
    channelId: "994635285302354030",
    guildId: "986745930063691847",      
 adapterCreator: client.guilds.cache.get("986745930063691847").voiceAdapterCreator
     });
 });


client.on('guildMemberRemove', (member, guild) => {
  const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
  var kurulus = (Date.now() - member.joinedTimestamp);
  const endAt = member.joinedTimestamp
  const gün = moment(new Date(endAt).toISOString()).format('DD')
    const ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
    const yıl = moment(new Date(endAt).toISOString()).format('YYYY')
    const saat = moment(new Date(endAt).toISOString()).format('HH:mm')
    const a = `${gün} ${ay} ${yıl} ${saat}`;
  const cenel = client.channels.cache.get("994572862990073987")
const kardoxa = new MessageEmbed()
.setTitle("Hoşcakal!")
.setColor("RED")
.setFooter("Kardoxa Love You")
.setTimestamp()
.setDescription(`**${member.user.tag}** sunucumuzdan ayrıldı!
**${a}** tarihinde katılmış!
**${member.guild.memberCount}** kişi kaldık!
`)
cenel.send({embeds: [kardoxa]})
})

client.on('guildMemberAdd', (member, guild) => {
  const moment = require("moment");
moment.locale("tr");
require("moment-duration-format");
const veri = require("./veriler.json")
  const kanal = "994573847565193308"
  const kanal1 = client.channels.cache.get(kanal)
  const rol = member.guild.roles.cache.get("993989059103957062")
  var kurulus = (Date.now() - member.user.createdTimestamp);
    var zaman = moment.duration(kurulus).format("Y [yıl], M [ay]");
    var zaman2 = moment.duration(kurulus).format("DD [Gün], HH [saat], mm [dakika], ss [saniye]");
    const date = moment(member.user.createdAt)
    const startedAt = Date.parse(date);
    var msecs = Math.abs(new Date() - startedAt);
    const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
    msecs -= years * 1000 * 60 * 60 * 24 * 365;
    const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
    msecs -= months * 1000 * 60 * 60 * 24 * 30;
    const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
    msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
    const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
    msecs -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(msecs / (1000 * 60 * 60));
    msecs -= hours * 1000 * 60 * 60;
    const mins = Math.floor((msecs / (1000 * 60)));
    msecs -= mins * 1000 * 60;
    const secs = Math.floor(msecs / 1000);
    msecs -= secs * 1000;
    var string = "";
    if (years > 0) string += `${years} yıl ${months} ay`
    else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks + " hafta" : ""}`
    else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days + " gün" : ""}`
    else if (days > 0) string += `${days} gün ${hours > 0 ? hours + " saat" : ""}`
    else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins + " dakika" : ""}`
    else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs + " saniye" : ""}`
    else if (secs > 0) string += `${secs} saniye`
    string = string.trim();
    const endAt = member.user.createdAt
    const gün = moment(new Date(endAt).toISOString()).format('DD')
    const ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
    const yıl = moment(new Date(endAt).toISOString()).format('YYYY')
    const saat = moment(new Date(endAt).toISOString()).format('HH:mm')
    const kuruluş = `${gün} ${ay} ${yıl} ${saat}`;

    const taglı = db.fetch(`taglıalım`)
    const cenel = client.channels.cache.get("994572862990073987")
const kardoxa = new MessageEmbed()
.setTitle("Hoşgeldin!")
.setColor("GREEN")
.setFooter("Kardoxa Love You")
.setTimestamp()
.setDescription(`${member} sunucumuza katıldı!
Hesabı **${zaman} önce** oluşturulmuş!
Sunucumuz **${member.guild.memberCount}** kişiye ulaştı!
`)
cenel.send({embeds: [kardoxa]})

console.log(member)
      member.roles.add("993989059103957062")

  kanal1.send(`**${member.guild.name}** Sunucumuza hoşgeldin ${member}! 

  Hesabın **${kuruluş}**  tarihinde (**${zaman} önce**) oluşturulmuş!

  Kayıt talebi oluşturmak için **!kayıt** komutunu kullanabilirsiniz!

  Kurallarımızı (<#${veri.rules}>) okumalısın, sunucu içindeki ceza-i işlemlerin kurallara göre uygulanacak.  

  Seninle birlikte **${member.guild.memberCount}** kişiye ulaştık! 
  `)

})
  client.on('messageCreate', async message => {
    if (message.content === 'fakekatıl') { 
      client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
        }
    });
    
  client.on('messageCreate', async message => {
    if (message.content === 'fakeçık') { 
      client.emit('memberLeave', message.member || await message.guild.fetchMember(message.author));
        }
    });

  const ms = require("ms")
  const veri = require("./veriler.json")
  client.on("memberJoin", async (member, invite, inviter, guild) => {
    const kurulus = new Date().getTime() - member.createdAt;
    const kanal = client.channels.cache.get(veri.invitekanal)
    if (kurulus < 1296000000) await db.add(`fake_${inviter.id}`, 1)
    
    const davetsayi = db.fetch(`toplam_${inviter.id}`)
    const mesaj = `${member} Sunucuya katıldı! \nDavet eden: ${inviter}\n **${davetsayi}**. davetini yaptı!`
    kanal.send(mesaj)
  
  })
  client.on("memberLeave", async (member, invite, inviter, guild) => {
    const kanal = client.channels.cache.get(veri.invitekanal)
    const kurulus = new Date().getTime() - member.createdAt;
    if (kurulus < 1296000000) await db.add(`fake_${inviter.id}`, -1)
    
    const davetsayi = db.fetch(`toplam_${inviter.id}`)
    const mesaj = `${member} Sunucudan ayrıldı! \nDavet eden: ${inviter}\n (**${davetsayi}**. davet!)`
    kanal.send(mesaj)
  
  })

////KLAN
const { Modal, TextInputComponent, showModal } = require('discord-modals');
client.on("guildMemberAdd", async (guild, member) => {
  member.roles.add("993989059103957062")
})

client.on('interactionCreate', async (interaction) => {
  if (interaction.customId == "a") {
    const modal = new Modal()
      .setCustomId('regmenu')
      .setTitle('Kayıt Talebi Oluşturun')
      .addComponents(
        new TextInputComponent()
        .setCustomId('reg')
        .setLabel('İsminiz')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('ör. Ahmet, Kerem VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg2')
        .setLabel('Oyun içi isminiz')
        .setStyle('SHORT')
        .setMinLength(3)
        .setMaxLength(100)
        .setPlaceholder('ör. Winchester, Kardoxa VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg3')
        .setLabel('Önceden dahil olduğunuz klan')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('ör. LyerS VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg4')
        .setLabel('PVPnizi 10 üzerinden puanlayın')
        .setStyle('SHORT')
        .setMinLength(1)
        .setMaxLength(5)
        .setPlaceholder('ör. 9/10')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg5')
        .setLabel('Yaşınız')
        .setStyle('SHORT')
        .setMinLength(1)
        .setMaxLength(5)
        .setPlaceholder('ör. 17, 20 VB.')
        .setRequired(true),
      );
      showModal(modal, { client, interaction });
    }
  })
  const { MessageActionRow, MessageButton } = require('discord.js');
  client.on('modalSubmit', async (modal) => {
    if(modal.customId === 'regmenu') {

      const isim = modal.getTextInputValue('reg'); 
      const nick = modal.getTextInputValue('reg2'); 
      const klan = modal.getTextInputValue('reg3'); 
      const pvp = modal.getTextInputValue('reg4'); 
      const yas = modal.getTextInputValue('reg5'); 
      modal.reply({
        content: `:tada: **${modal.user} Kayıt olma talebin başarıyla iletildi!**`,
        ephemeral: true
      });
      db.set(`nick_${modal.user.id}`, `${isim} ⸸ ${nick}`)
      db.set("klan", modal.user.id)
      const channel = modal.guild.channels.cache.get('994638335727386744');
      const embed = new MessageEmbed()
      .setTitle("Bir kayıt talebi oluşturuldu!")
      .setColor("DARK_BLUE")
      .setFooter("Kardoxa love you")
      .setTimestamp()
      .setDescription(`
      \n \`Discord Bilgileri\`
   
         **Discord Adı**: ${modal.user.tag}
         **Discord İD'si**: ${modal.user.id}
         
         \`Talep Bilgileri\`
        
         **Talep Türü**: Klan Üyesi
         **İsim**: ${isim}
         **Oyun İsmi**: ${nick}
         **Yaş**: ${yas}
         **PvP Değerlendirmesi**: ${pvp}
         **Önceden Dahil Olduğu Klan(lar)**: ${klan}`)

         const row = new MessageActionRow()
			.addComponents(
				  new MessageButton()
					.setCustomId('onay')
					.setLabel('Onayla!')
          .setEmoji("993127585204670565")
					.setStyle('SUCCESS'),
          new MessageButton()
					.setCustomId('no')
					.setLabel('Reddet!')
          .setEmoji("993127583686336583")
					.setStyle('DANGER'),
                    );
      const msz = await channel.send({
       embeds: [embed],
       components: [row]
      });
      
    }  
  });
  client.on('interactionCreate', async (inter, modal, channelId, msgId) => {
    if (!inter.isButton()) {
      return;
    }
  if (inter.customId == "onay") {
    const kanal = inter.member.guild.channels.cache.get(inter.message.channelId)
    const id = db.fetch("klan")
    const member = inter.member.guild.members.cache.get(id)

    member.send(`<:yes:993127585204670565> ${member} Kayıt talebin onaylandı! \nOnaylayan: **${inter.user.tag}**`);
    member.roles.add('993988968595083355');
    member.roles.remove('993989059103957062');
    member.setNickname(`${db.fetch(`nick_${id}`)}`)
    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:yes:993127585204670565> **${member} Kullanıcısı başarıyla kayıt edildi!**`, embeds: []})
  } else if (inter.customId == "no") {
    

    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:no:993127583686336583>  **${member} Kullanıcısının kayıt talebi reddedildi!**`, embeds: []})
    member.send(`<:no:993127583686336583>  Kayıt talebiniz reddedildi.\n Yetkili: **${inter.user.tag}**`);
      
    };
  
    
    
  })
////
//// MÜTTEFİK
client.on('interactionCreate', async (interaction) => {
  if (interaction.customId == "b") {
    const modal = new Modal()
      .setCustomId('regmenu2')
      .setTitle('Kayıt Talebi Oluşturun')
      .addComponents(
        new TextInputComponent()
        .setCustomId('reg1')
        .setLabel('İsminiz')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('ör. Ahmet, Kerem VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg12')
        .setLabel('Oyun içi isminiz')
        .setStyle('SHORT')
        .setMinLength(3)
        .setMaxLength(100)
        .setPlaceholder('ör. Winchester, Kardoxa VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg13')
        .setLabel('Dahil olduğunuz klan')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('ör. LyerS VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg14')
        .setLabel('Klanınızda yetkiniz nedir?')
        .setStyle('SHORT')
        .setMinLength(3)
        .setMaxLength(20)
        .setPlaceholder('ör. Lider, Üye VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg15')
        .setLabel('Yaşınız')
        .setStyle('SHORT')
        .setMinLength(1)
        .setMaxLength(5)
        .setPlaceholder('ör. 17, 20 VB.')
        .setRequired(true),
      );
      showModal(modal, { client, interaction });
    }
  })

  client.on('modalSubmit', async (modal) => {
    if(modal.customId === 'regmenu2') {
      
      const id = modal.user.id
      console.log(id)
      const isim = modal.getTextInputValue('reg1'); 
      const nick = modal.getTextInputValue('reg12'); 
      const klan = modal.getTextInputValue('reg13'); 
      const yetki = modal.getTextInputValue('reg14'); 
      const yas = modal.getTextInputValue('reg15'); 
      modal.reply({
        content: `:tada: **${modal.user} Kayıt olma talebin başarıyla iletildi!**`,
        ephemeral: true
      });
      db.set(`nick_${modal.user.id}`, `${isim} † ${nick} † ${klan}`)
      db.set("ally", modal.user.id)
      const channel = modal.guild.channels.cache.get('994638335727386744');
      const embed = new MessageEmbed()
      .setTitle("Bir kayıt talebi oluşturuldu!")
      .setColor("DARK_BLUE")
      .setFooter("Kardoxa love you")
      .setTimestamp()
      .setDescription(`
      \n \`Discord Bilgileri\`
   
         **Discord Adı**: ${modal.user.tag}
         **Discord İD'si**: ${modal.user.id}
         
         \`Talep Bilgileri\`
        
         **Talep Türü**: Müttefik
         **İsim**: ${isim}
         **Oyun İsmi**: ${nick}
         **Yaş**: ${yas}
         **Klan Yetkisi**: ${yetki}
         **Dahil Olduğu Klan**: ${klan}`)

         const row = new MessageActionRow()
			.addComponents(
				  new MessageButton()
					.setCustomId('onay2')
					.setLabel('Onayla!')
          .setEmoji("993127585204670565")
					.setStyle('SUCCESS'),
          new MessageButton()
					.setCustomId('no2')
					.setLabel('Reddet!')
          .setEmoji("993127583686336583")
					.setStyle('DANGER'),
                    );
      const msz = await channel.send({
       embeds: [embed],
       components: [row]
      });
      
    }  
  });
  client.on('interactionCreate', async (inter, modal, channelId, msgId) => {
    if (!inter.isButton()) {
      return;
    }
  if (inter.customId == "onay2") {
    const id = db.fetch("ally")
    const member = inter.member.guild.members.cache.get(id)
    const kanal = inter.member.guild.channels.cache.get(inter.message.channelId)

    member.send(`<:yes:993127585204670565> ${member} Kayıt talebin onaylandı! \nOnaylayan: **${inter.user.tag}**`);
    member.roles.add('993988367773601912');
    member.roles.remove('993989059103957062');
    member.setNickname(`${db.fetch(`nick_${id}`)}`)
    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:yes:993127585204670565> **${member} Kullanıcısı başarıyla kayıt edildi!**`, embeds: []})
  } else if (inter.customId == "no2") {
    

    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:no:993127583686336583>  **${member} Kullanıcısının kayıt talebi reddedildi!**`, embeds: []})
      member.send(`<:no:993127583686336583>  Kayıt talebiniz reddedildi.\n Yetkili: **${inter.user.tag}**`);
      
    };
  
    
    
  })
////
//// YETKİLİ
client.on('interactionCreate', async (interaction) => {
  if (interaction.customId == "c") {
    const modal = new Modal()
      .setCustomId('regmenu3')
      .setTitle('Kayıt Talebi Oluşturun')
      .addComponents(
        new TextInputComponent()
        .setCustomId('reg2')
        .setLabel('İsminiz')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('ör. Ahmet, Kerem VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg22')
        .setLabel('Oyun içi isminiz')
        .setStyle('SHORT')
        .setMinLength(3)
        .setMaxLength(100)
        .setPlaceholder('ör. Winchester, Kardoxa VB.')
        .setRequired(true),
        new TextInputComponent()
        .setCustomId('reg23')
        .setLabel('Hangi sunucuda yetkilisiniz?')
        .setStyle('SHORT')
        .setMinLength(2)
        .setMaxLength(100)
        .setPlaceholder('Lütfen sunucu kısaltmalarını kullanının! ör. WN VB.')
        .setRequired(true),
      );
      showModal(modal, { client, interaction });
    }
  })

  client.on('modalSubmit', async (modal) => {
    if(modal.customId === 'regmenu3') {
      
      const id = modal.user.id
      console.log(id)
      const isim = modal.getTextInputValue('reg2'); 
      const nick = modal.getTextInputValue('reg22'); 
      const klan = modal.getTextInputValue('reg23'); 
      modal.reply({
        content: `:tada: **${modal.user} Kayıt olma talebin başarıyla iletildi!**`,
        ephemeral: true
      });
      db.set(`nick_${modal.user.id}`, `${isim} ・ ${nick} ・ ${klan}`)
      db.set(`yetkili`, modal.user.id)
      const channel = modal.guild.channels.cache.get('994638335727386744');
      const embed = new MessageEmbed()
      .setTitle("Bir kayıt talebi oluşturuldu!")
      .setColor("DARK_BLUE")
      .setFooter("Kardoxa love you")
      .setTimestamp()
      .setDescription(`
      \n \`Discord Bilgileri\`
   
         **Discord Adı**: ${modal.user.tag}
         **Discord İD'si**: ${modal.user.id}
         
         \`Talep Bilgileri\`
        
         **Talep Türü**: Yetkili
         **İsim**: ${isim}
         **Oyun İsmi**: ${nick}
         **Yetkili Olduğu Sunucu**: ${klan}`)

         const row = new MessageActionRow()
			.addComponents(
				  new MessageButton()
					.setCustomId('onay3')
					.setLabel('Onayla!')
          .setEmoji("993127585204670565")
					.setStyle('SUCCESS'),
          new MessageButton()
					.setCustomId('no3')
					.setLabel('Reddet!')
          .setEmoji("993127583686336583")
					.setStyle('DANGER'),
                    );
      const msz = await channel.send({
       embeds: [embed],
       components: [row]
      });
      
    }  
  });
  client.on('interactionCreate', async (inter, modal, channelId, msgId) => {
    if (!inter.isButton()) {
      return;
    }
    const id = db.fetch("yetkili")
    const member = inter.member.guild.members.cache.get(id)
  if (inter.customId == "onay3") {
    const kanal = inter.member.guild.channels.cache.get(inter.message.channelId)

    member.send(`<:yes:993127585204670565> ${member.user} Kayıt talebin onaylandı! \nOnaylayan: **${inter.user.tag}**`);

    member.roles.add('993987452601647244');
    member.roles.remove('993989059103957062');
    member.setNickname(`${db.fetch(`nick_${id}`)}`)
    
    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:yes:993127585204670565> **${member} Kullanıcısı başarıyla kayıt edildi!**`, embeds: []})
  } else if (inter.customId == "no3") {
    

    await inter.deferUpdate();
    inter.editReply({ components: [], content:`<:no:993127583686336583>  **${member} Kullanıcısının kayıt talebi reddedildi!**`, embeds: []})
    member.send(`<:no:993127583686336583>  Kayıt talebiniz reddedildi.\n Yetkili: **${inter.user.tag}**`);
      
    };
  
    
    
  })
////
//// Otomatik sistem
const ms = require("ms")
setInterval(function() {
  const embed = new MessageEmbed()
  .setTitle("Sorunsuz Çalışma Sistemi")
  .setColor("RED")
  .setFooter({text:"Kardoxa <3"})
  .setDescription(`**Sorunsuz çalışma sistemi nedir?**
  Botta oluşabilecek takılma,anlık kesinti, hata vb. şeylerin botun çalışmasına engel olmaması amacı ile yapılmıştır.
  Bot her 10 dakikada bir yeniden başlayarak kendini yeniler ve hatasız bir başlangıç yapar.
  Bu sayede bot gecikmeye girmeden veya hata sayesinde bozulmadan hizmet vermeye devam eder.`)
  .setAuthor({name: "Bot 1 dakika sonra yeniden başlayacak."})
  const kanal = client.guilds.cache.get("986745930063691847").channels.cache.get("1000703696612634704")
  kanal.send({content: "👍", embeds: [embed]})
}, ms("9m"));
setInterval(function() {
  const embed = new MessageEmbed()
  .setTitle("Sorunsuz Çalışma Sistemi")
  .setColor("RED")
  .setFooter("Kardoxa <3")
  .setDescription(`**Sorunsuz çalışma sistemi nedir?**
  Botta oluşabilecek takılma,anlık kesinti, hata vb. şeylerin botun çalışmasına engel olmaması amacı ile yapılmıştır.
  Bot her 10 dakikada bir yeniden başlayarak kendini yeniler ve hatasız bir başlangıç yapar.
  Bu sayede bot gecikmeye girmeden veya hata sayesinde bozulmadan hizmet vermeye devam eder.`)
  .setAuthor({name:"Bot başarıyla yeniden başlatıldı."})
  .setTimestamp()
  const kanal = client.guilds.cache.get("986745930063691847").channels.cache.get("991830062598992003")
  kanal.send({content: "👍", embeds: [embed]})
  setTimeout(function() {
    process.exit();
}, ms("2s"));
}, ms("10m"));
////


client.login(token);
