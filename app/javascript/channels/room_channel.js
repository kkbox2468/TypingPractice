import consumer from "./consumer"

window.onload = function () {
  /* 抓room id */
  let roomElement = document.querySelector('#room-id')
  let roomId = roomElement.getAttribute('data-room-id')
  console.log(roomId);

  /* 控制左右輸入框事件 */
  var quoteInputLeft = document.querySelector('#quoteInput');
  var quoteInputRight = document.querySelector('#quoteInput2');
  var submitBtnLeft = document.querySelector('input[name="left_input"]')
  var submitBtnRight = document.querySelector('input[name="right_input"]')

  function typeInputL(e) {
    e.preventDefault();
    console.log(quoteInputLeft.value);

    if (e.keyCode === 13) {
      submitBtnLeft.click();
      quoteInputLeft.value = ''
    }
  }
  function typeInputR(e) {
    e.preventDefault();
    console.log(quoteInputRight.value);

    if (e.keyCode === 13) {
      submitBtnRight.click();
      quoteInputRight.value = ''

    }
  }

  quoteInputLeft.addEventListener('change', typeInputL)
  quoteInputLeft.addEventListener('keyup', typeInputL)
  quoteInputRight.addEventListener('change', typeInputR)
  quoteInputRight.addEventListener('keyup', typeInputR)

  /* 終止前一個channel subscription 
  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription)
    console.log('disconnected...');
  })*/

  /* Action Cable 啟用 */
  consumer.subscriptions.create({ channel: "RoomChannel", room_id: 1}, {
    connected() {
      console.log('Connected to room ... ' + roomId );
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      let quoteDisplay1 = document.querySelector('#quoteDisplay')
      let quoteDisplay2 = document.querySelector('#quoteDisplay2')
      let quoteDiv1 = document.createElement("div")
      let quoteDiv2 = document.createElement("div")
  
      if (data.type === 'right') {
        quoteDiv2.innerText = data.content
        quoteDisplay2.appendChild(quoteDiv2)
        // console.log(data.content);
      } else {
        quoteDiv1.innerText = data.content
        quoteDisplay1.appendChild(quoteDiv1)
        // console.log(data.content);
      }
  
  
    }
  });
}
