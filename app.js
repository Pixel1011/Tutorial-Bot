const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");

client.on("ready", () => {
  console.log("I'm Online\nI'm Online");
});

var prefix = "~";
client.on("message", message => {
  if (
    message.author === client.user ||
    !message.content.startsWith(prefix + "ping")
  )
    return;
  message.channel.sendMessage("pong");
});

client.login(settings.token);
