const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_49_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIllIeDJwOU44ZS9nT3Y4dXNpYW9LRFBITFZQZW4zaHZtdUNUbmJEUGFLMW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVHVldMYm5IUWQtNjFEVWEzRjNpNFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRjMjIzOTYtMWY5YS00YWMxLWJhMjYtZDU4MWE2ZGRkODVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDE4NyxcbiAgICAgIDE0MixcbiAgICAgIDI0NyxcbiAgICAgIDIxOCxcbiAgICAgIDg5LFxuICAgICAgNyxcbiAgICAgIDk3LFxuICAgICAgMTIzLFxuICAgICAgNDUsXG4gICAgICAxMTIsXG4gICAgICA4OSxcbiAgICAgIDgyLFxuICAgICAgOTQsXG4gICAgICA2NixcbiAgICAgIDIxOCxcbiAgICAgIDQ2LFxuICAgICAgOCxcbiAgICAgIDEyMixcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMixcbiAgICAgIDE4OSxcbiAgICAgIDkwLFxuICAgICAgMTIzLFxuICAgICAgMTI2LFxuICAgICAgMjU1LFxuICAgICAgNDksXG4gICAgICAyNTMsXG4gICAgICAxNzIsXG4gICAgICAzOCxcbiAgICAgIDIyOSxcbiAgICAgIDEzLFxuICAgICAgMTEwLFxuICAgICAgMTI0LFxuICAgICAgMTIzLFxuICAgICAgMTA2LFxuICAgICAgMjgsXG4gICAgICAyMzEsXG4gICAgICAxMjYsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjRHUFQ0NjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ2MDA1ODIwMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGlMU0hBRFwiLFxuICAgIFwibGlkXCI6IFwiMTg3MTc5Mzg5MTY1NzMzOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJXeDJVUXhmTEh0QVlZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtWDlvV0NjVGFGOXJBa3MrbFh5V0RhelNUQlFFKzVnaFVJOTA0Z1l4Nmc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImEvaFhSMDAzcFZMSWRpby93bERNNGY3dXB6aFdzUTlPZjFMckFra1VuRGhHUVpnUy9ERG0waHU3clljUXlSK0t5VFY5and0Y3hUc3E5eGJMZUk1eUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVNaUlNMVF4OWhhMDhLRUxaSEg2eXNaT2UxWm53RnVqZWk1aHZRUXh1WHByUlZET01MTndXTnhrQUF3SU9jandZdkF6RU1VVnFuejdkQ01naWtvSWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ2MDA1ODIwMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4NDI1NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEQU9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURBTy5qc29uIjogIntcImtleURhdGFcIjpcIlRyR0RudjBkRGJMMlJleDdTeW82TTQwdUJEMThWY2pxd3NlV0xJYVRIU2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyOTg2Njc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
