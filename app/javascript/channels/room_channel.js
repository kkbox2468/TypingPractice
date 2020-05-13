import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('Connected!');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    let quoteDisplay1 = document.querySelector('#quoteDisplay')
    let quoteDiv1 = document.createElement("div")
    quoteDiv1.innerText = data.content
    quoteDisplay1.appendChild(quoteDiv1)
    console.log(data.content);
  }
});
