const electron = require("electron");
const ipc = electron.ipcRenderer;
const newConnectToTwitch = require("./connectToTwitch");
const handleMessage = require("./messageHandlerAIon")
//const handleMessage = require("./messageHandlerAIoff")  //if you want to use the other messageHandler simply add a comment before it and remove the comment from this one

//if your curious what AIon is it basically makes the bot only respond to messages with the !ai command
//and AIoff will make the bot respond to all messages detected in the chat


document.getElementById("tmilink").addEventListener("click", function () {
  let active_hotspot_id = localStorage.getItem("active_hotspot_id");
  ipc.send("tmiclicked", active_hotspot_id);
});

document.getElementById("ailink").addEventListener("click", function () {
  let active_hotspot_id = localStorage.getItem("active_hotspot_id");
  ipc.send("aiclicked", active_hotspot_id);
});
document.getElementById("submit").addEventListener("click", () => {
  const TwitchClient = require("./client");
  newConnectToTwitch(TwitchClient);
  handleMessage(TwitchClient);
});
