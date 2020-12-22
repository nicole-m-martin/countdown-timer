const startTiming = 20
let time = startTiming * 60
setInterval(updateTimer, 1000)
const count = document.getElementById("countdownTimer")
setInterval(updateTimer, 1000)
function updateTimer(){
  const minutes = Math.floor(time/60)
  let seconds = time % 60

  // condition ? do this : do that
  seconds = seconds <10 ? '0' + seconds : seconds
  count.innerHTML = `${minutes}:${seconds}`
  time--
}