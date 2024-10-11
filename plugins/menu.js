const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    react: "📑",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `*👏 HI ${pushname}*

*🎬 ᎠϴᏔΝᏞϴᎪᎠ ᏟϴᎷᎷᎪΝᎠՏ 🎬*

${menu.download}

*👨‍💻 ᎷᎪᏆΝ ᏟϴᎷᎷᎪΝᎠՏ 👨‍💻*

${menu.main}

*👨‍👨‍👦‍👦 ᏀᎡϴႮᏢ ᏟϴᎷᎷᎪΝᎠՏ 👨‍👨‍👦‍👦*

${menu.group}

*👤 ϴᏔΝᎬᎡ ᏟϴᎷᎷᎪΝᎠՏ 👤*

${menu.owner}

*🤖 ᏟϴΝᏙᎬᎡͲ ᏟϴᎷᎷᎪΝᎠՏ 🤖*

${menu.convert}

*🔍 ՏᎬᎪᎡᏟᎻ ᏟϴᎷᎷᎪΝᎠՏ 🔎*

${menu.search}

*This bot was created by the DARK-X-TEAM, more information about this bot will be posted on our channel. Keep following the channel.👇*

*👥 https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U 👥*

©👨‍💻 DARK-X-TEAM 👨‍💻
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

