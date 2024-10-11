const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 HI ${pushname}*

*🤖 DARK-X-MD-V1 REPO LINK 🤖👇*

👨‍💻 Not Repo 👨‍💻

*This bot was created by the DARK-X-TEAM, more information about this bot will be posted on our channel. Keep following the channel.*

👨‍💻 https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U 👨‍💻

*©👨‍💻 DARK-X-TEAM 👨‍💻*

`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/9pecje.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

