import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Telkomsel:* [${global.ppulsa}]
│ • *Tri:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`
let buttonMessage= {
    'document':{'url':sgc},
    'mimetype':ddocx,
    'fileName':global.wm,
    'fileLength':fsizedoc,
    'pageCount':fpagedoc,
    'contextInfo':{
    'forwardingScore':555,
    'isForwarded':true,
    'externalAdReply':{
    'mediaUrl':sig,
    'mediaType':2,
    'previewType':'pdf',
    'title':global.titlebot,
    'body': sig,
    'thumbnail':await(await fetch(global.imagebot)).buffer(),
    'sourceUrl':sgc}},
    'caption':text,
    'footer':botdate,
    'buttons':[
    {'buttonId':'.owner','buttonText':{'displayText':'Owner'},'type':1},
    {'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
    ],
    'headerType':6}
await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
