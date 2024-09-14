/*
       RESMI DARI DrayXD Official

  LARANGAN
 
- DI LARANG MEMPERJUAL SC INI
- DI LARANG MEMPERBAGI SC INI

JIKA MELANGGAR LARANGAN YANG DI BERIKAN DRAY, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "𝘿𝙧𝙖𝙮𝙓𝘿"
global.namabot = "𝐙𝐞𝐧𝐨-𝐕𝟐"
global.versisc = " 𝟐.𝟎"
global.owner = ["6283891457614"]
global.tele = "https://wa.me/6283151568511"
global.url = "https://www.youtube.com/@drayyyxd"
global.namastore = "JAKWIR HOSTING"
global.domain = '' // Isi Domain Lu
global.apikey = 'ptla_utHjsec4OKWgbnkKGkFw1wtPntzGxprsfJnGr1DGQPI' // Isi Apikey Plta Lu
global.capikey = 'ptlc_GXZM5hZH2tRC0lAf5YPL17q0n1FXESo0PmbjxahYWiy' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

// Global Simbol
global.simbol = "𝄏"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Private Chat !`,
    wait: `\`[ # ]\` Wait Tunggu Sebentar`,
    notregist: `\`[ # ]\` Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu`,
    premium: `\`[ # ]\` khusus Premium" Mau Prem? Chat Owner`,
    endLimit: `\`[ # ]\` Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB`,
     bugrespon: `\`[ # ]\` 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
     𝘚𝘦𝘥𝘢𝘯𝘨 𝘔𝘦𝘯𝘨𝘪𝘳𝘪𝘮 𝘝𝘪𝘳𝘶𝘴 𝘈𝘵𝘵𝘢𝘤𝘬`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     𝘝𝘪𝘳𝘶𝘴 𝘚𝘶𝘥𝘢𝘩 𝘛𝘦𝘳𝘬𝘪𝘳𝘪𝘮`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})