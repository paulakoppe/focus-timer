import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"

const { buttonPlay,
  buttonPause,
  buttonStop,
  buttonStopwatch,
  buttonVolume,
  buttonMute,
  minutesDisplay,
  secondsDisplay } = elements


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStopwatch,
  buttonStop,
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  sound
})

buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
  sound.playBgSound(true)
})

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
  sound.playBgSound(false)
})

buttonStop.addEventListener("click", function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
  sound.playBgSound(false)
})

buttonMute.addEventListener("click", function () {
  buttonVolume.classList.remove("hide")
  buttonMute.classList.add("hide")
  sound.playBgSound(true)
})

buttonVolume.addEventListener('click', function () {
  buttonVolume.classList.add('hide')
  buttonMute.classList.remove('hide')
  sound.playBgSound(false)
})

buttonStopwatch.addEventListener("click", function () {
  let newMinutes = controls.stopWatch()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
