import consumer from "./consumer"

window.onload = function () {
  /* 抓room id */
  let roomElement = document.querySelector('#room-id')
  let roomId = roomElement.getAttribute('data-room-id')
  console.log(roomId);

    /* 終止前一個channel subscription */
  consumer.subscriptions.subscriptions.forEach((subscription) => {
    consumer.subscriptions.remove(subscription)
    console.log('disconnected...');
  })

  /* Action Cable 啟用 */
  consumer.subscriptions.create({ channel: "RoomChannel", room_id: roomId}, {
    connected() {
      console.log('Connected to room ... ' + roomId );
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      var quoteInputRight = document.querySelector('#quoteInput2');
      let quoteDisplay2 = document.querySelector('#quoteDisplay2')
      quoteInputRight.innerText = data.content
      const arrayQuote = quoteDisplay2.querySelectorAll('span');
      const arrayValue = quoteInputRight.value.split('')
      const inputIndex = quoteInputRight.value.length

      let heroElement = document.querySelector('#hero-id')
      let heroId = Number(heroElement.getAttribute('data-hero-id'))

      if (heroId !== data.message.hero_id) {
        checkCharacter(arrayQuote, arrayValue, inputIndex)
        console.log('----------------------');
        console.log(data.message.hero_id);
      } else {

      }
    }
  });

  /* 控制左右輸入框事件 */
  var quoteInputLeft = document.querySelector('#quoteInput');
  var submitBtnLeft = document.querySelector('input[name="left_input"]')
  var submitBtnRight = document.querySelector('input[name="right_input"]')
  let quoteDisplay1 = document.querySelector('#quoteDisplay')
  let quoteDiv1 = document.createElement("span")
  let quoteDiv2 = document.createElement("span")
  

  function typeInput(e) {
    e.preventDefault();
    console.log(quoteInputLeft.value);
    // submitBtnLeft.click();
    // quoteInputLeft.value = ''
  }
  // quoteInputLeft.addEventListener('change', typeInput)
  // quoteInputLeft.addEventListener('keyup', typeInput)

  quoteInputLeft.addEventListener('input', () => {
    const arrayQuote = quoteDisplay1.querySelectorAll('span');
    const arrayValue = quoteInputLeft.value.split('')
    const inputIndex = quoteInputLeft.value.length
    checkCharacter(arrayQuote, arrayValue, inputIndex)
    submitBtnLeft.click()
  })


  function checkCharacter(arrayQuote, arrayValue, inputIndex) {
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]

      if (character == null){
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        arrayQuote[inputIndex].classList.add('selected')
        arrayQuote[inputIndex + 1 ].classList.remove('selected')
        arrayQuote[inputIndex - 1 ].classList.remove('selected')
      } else if (character === characterSpan.innerText){
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
      }
    })
  }
}
