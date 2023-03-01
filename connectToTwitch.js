const newConnectToTwitch = (TwitchClient) => {
  const connectButton = document.getElementById("submit");
  lockables = document.querySelectorAll(".lockable");
  const messageInput = document.getElementById("message"); // Get the message input
  const sendMessageButton = document.getElementById("sendMessage"); // Get the send message button

  TwitchClient.connect().then(
    function (result) {
      connectButton.style = "background-color:green";
      connectButton.innerHTML = `Connected to ${channelName}`;
      connectButton.disabled = true;
      TwitchClient.say(channelName, "Hey there!");
      lockables.forEach(element => element.disabled = "true")
      lockables.forEach(element => element.style = "filter: brightness(50%);")
      const sendButton = document.getElementById("send-message");
      sendButton.addEventListener("click", (event) => {
        event.preventDefault();
        const messageInput = document.getElementById("message");
        const message = messageInput.value;
        TwitchClient.say(channelName, message);
        messageInput.value = "";
      });
      
const getusernameButton = document.getElementById("getusername");
getusernameButton.addEventListener("click", () => {
  const oauthInput = document.getElementById("oauth");
  const usernameInput = document.getElementById("username");
  const token = oauthInput.value.trim();
  const username = token.split(" ")[0].substr(1);
  usernameInput.value = username;
});



    },
    function (error) {
      // this function is called if the promise is rejected
      connectButton.style = "background-color:red";
      connectButton.innerHTML = `Couldn't connect to Twitch. Check your oauth token`;
    }
  );

  document.getElementById("disconnect").addEventListener("click", () => {
    TwitchClient.disconnect();
    connectButton.disabled = false;
    connectButton.innerHTML = "connect";
    connectButton.style = "";
    lockables.forEach(element => element.disabled = "false")
    lockables.forEach(element => element.style = "filter: brightness(100%);")
  });
};

module.exports = newConnectToTwitch;
