const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} - MD Beta 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : Anggap _<>_ *Tidak Ada*
  
  _Ada Bug? Ketik ${prefix}report Bug mu
  
  *( 📍 )  Main Menu*
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}donasi
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  ≻ ${prefix}cekprem
  ≻ ${prefix}listprem
  ≻ ${prefix}jo <Text>

  *( ✏️ )  Converter/Tools*
  ≻ ${prefix}stiker <ReplyGambar/Caption>
  ≻ ${prefix}toimg <ReplyStiker>
  ≻ ${prefix}tovid <ReplyStiker>

  *( ⌛ )  Downloader*
  ≻ ${prefix}play <Querry>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}tiktokaudio <LinkTt>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}getvideo
  ≻ ${prefix}getmusic
  ≻ ${prefix}instagram <LinkIg>
  ≻ ${prefix}facebook <LinkFb>
  
  *( ♻️ )  Random Menu*
  ≻ ${prefix}quote
  ≻ ${prefix}cecan
  ≻ ${prefix}cogan
  ≻ ${prefix}naruto
  ≻ ${prefix}loli
  ≻ ${prefix}waifu
  ≻ ${prefix}husbu
  ≻ ${prefix}yaoi
  
  *( ⚠️ )  Nsfw Premium*
  ≻ ${prefix}hentai
  
  *( 🪀 )  Menu Lain Nya*
  ≻ ${prefix}shortlink <Link>
  ≻ ${prefix}ssweb <Link>
  ≻ ${prefix}kbbi <Kata>
  
  *( ✍️ )  Menu Tulis*
  ≻ ${prefix}nuliskanan <Text>
  ≻ ${prefix}nuliskiri <Text>
  ≻ ${prefix}foliokanan <Text>
  ≻ ${prefix}foliokiri <Text>
  
  *( 🔎 )  Search Menu*
  ≻ ${prefix}lirik <Judul>
  ≻ ${prefix}grupwa <Pencarian>
  ≻ ${prefix}ytsearch <Pencarian>
  ≻ ${prefix}pinterest <Querry>
  
  *( 🎮 )  Game & Fun Menu*
  ≻ ${prefix}tictactoe @tag
  ≻ ${prefix}delttc
  ≻ ${prefix}slot
  ≻ ${prefix}tebakgambar
  ≻ ${prefix}apakah <Query>
  ≻ ${prefix}kapankah <Query>
  ≻ ${prefix}rate <Query>
  ≻ ${prefix}gantecek <Nama>
  ≻ ${prefix}cantikcek <Nama>
  ≻ ${prefix}sangecek <Nama>
  ≻ ${prefix}gaycek <Nama>
  ≻ ${prefix}lesbicek <Nama>
  ≻ ${prefix}gimana <Query>
  ≻ ${prefix}bisakah <Query>
  ≻ ${prefix}cekme
  
  *( 🏦 )  Payment & Bank*
  ≻ ${prefix}buylimit <Jumlah>
  ≻ ${prefix}buyglimit <Jumlah>
  ≻ ${prefix}transfer @tag <jumlah>
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  ≻ ${prefix}topbalance

  *( 👥 )  Group Menu*
  ≻ ${prefix}linkgrup
  ≻ ${prefix}setppgrup
  ≻ ${prefix}setnamegc
  ≻ ${prefix}setdesc
  ≻ ${prefix}group <Open/Close>
  ≻ ${prefix}revoke
  ≻ ${prefix}hidetag <Text>
  ≻ ${prefix}kick <@tag>
  ≻ ${prefix}add <@tag>
  
  *( 🧑🏻‍💻 )  Owner Menu*
  > evalcode
  x evalcode-2
  $ executor
  ≻ ${prefix}setppbot
  ≻ ${prefix}exif
  ≻ ${prefix}leave
  ≻ ${prefix}addprem
  ≻ ${prefix}delprem

  *THANKS TO*
  - Allah SWT
  - Baileys-Md (Adiwa Jshing)
  - @yannnnn.zz_ (Riyan)
  - @sofunsyabi.id (Arasya)
  - @melcanz_ (Amel)
  - @hardianto.xyz (Anto)`
}
