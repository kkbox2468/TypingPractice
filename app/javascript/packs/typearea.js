const RNADOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')


/* 監聽input中的改變 */ 
// quoteInputElement.addEventListener('input', () => {
//   console.log('changed');
// })
/* 監聽鍵盤事件 */
// window.addEventListener('keypress', function (e) {
//   console.log(e.keyCode);
// })

/* 封鎖滑鼠事件 */
let blockArea = document.querySelector('body')
blockArea.addEventListener('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
})
blockArea.addEventListener('mouseup', (e) => {
  e.stopPropagation();
  e.preventDefault();
})
blockArea.addEventListener('mousedown', (e) => {
  e.stopPropagation();
  e.preventDefault();
})

/* 比對input內的文字，來標注正確與錯誤提示 */ 

let textAmount = 0;
quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('')
  const inputIndex = quoteInputElement.value.length
  let keyNumber = window.keyCode
  // console.log(inputIndex)
  // console.log(arrayQuote[inputIndex])
  // console.log(arrayQuote[1]);
  let correct = true;
  let rightCounter = 0;
  let wrongCounter = 0;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index] //這段不懂 index? 
    // characterSpan.classList.add('selected')
    if (character == null){
      characterSpan.classList.remove('correct')
      characterSpan.classList.remove('incorrect')
      arrayQuote[inputIndex].classList.add('selected')
      arrayQuote[inputIndex + 1 ].classList.remove('selected')
      arrayQuote[inputIndex - 1 ].classList.remove('selected')
      correct = false

    } else if (character === characterSpan.innerText){
      characterSpan.classList.add('correct')
      characterSpan.classList.remove('incorrect')
      rightCounter++;    
    } else {
      characterSpan.classList.remove('correct')
      characterSpan.classList.add('incorrect')
      wrongCounter++;
      correct = false
    }
  })
  
  if (event.data == null){
    return ;
  } else {
    textAmount++;
    console.log(`按鍵次數: ${textAmount}`);
    console.log(event.data);
  }
  //印出正確與錯誤次數
  console.log(`正確次數: ${rightCounter}`);
  console.log(`錯誤次數: ${wrongCounter}`);
  if (correct) {
    renderNextQuote();
    textAmount = 0;
  }
})

function getRandomQuote() {
  return  fetch(RNADOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

/* 下面這段可以在console中印出抓到的api content內容 */ 
// async function getNextQuote() {
//   const quote = await getRandomQuote()
//   console.log(quote);
// }
// getNextQuote()

/* 把quote內容文字一個一個分開，加上span塞回畫面中 */ 
async function renderNextQuote() {
  const quote = await getRandomQuote()
  quoteDisplayElement.innerHTML = ''
  //將quote內容逐字分開
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    // characterSpan.classList.add('selected')
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null
  startTimer()
}

let startTime
// const minElement = document.getElementById('minutes')
const secElement = document.getElementById('seconds')
const millisecElement = document.getElementById('millisec')

function startTimer() {
  let n = 0;
  // minElement.innerText = '0'
  secElement.innerText = '0'
  millisecElement.innerText = '0'
  startTime = new Date() //這會把時間設為current time
  setInterval(() => {
    secElement.innerText = getTimerTime()
    millisecElement.innerText = getTimeMillisec()
    // timer.innerText = getTimerTime() //為什麼這行timer也抓得到secElement?
  }, 100)


  /* 可以用監聽來做觸發，但時間不對，雖然沒觸發可是時間已經開始跑 */
  // quoteInputElement.addEventListener('input', () => {
  //   setInterval(() => {
  //     secElement.innerText = getTimerTime()
  //   }, 1000)
  // })
}

function getTimerTime() {
 return Math.floor((new Date() - startTime) / 1000)
}
function getTimeMillisec() {
  return Math.floor(new Date().getMilliseconds() / 10)
  
}
/* 鍵盤音效 */
function playSound() {
  const sound = document.getElementById('keyboard-sound')
  // if (!sound) return ;//stop the function from running all together
  sound.currentTime = 0; //rewind to the start 
  sound.play();
}


renderNextQuote()
window.addEventListener('keydown', playSound);