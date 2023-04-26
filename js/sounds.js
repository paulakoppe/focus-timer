export default function() {
  
    const buttonPressAudio = new Audio("https://github.com/paulakoppe/timer/blob/main/start-13691.mp3?raw=true")
    const alertTimer = new Audio("https://github.com/paulakoppe/timer/blob/main/mixkit-clear-announce-tones-2861.mp3?raw=true")
    const backSound = new Audio("https://github.com/paulakoppe/timer/blob/main/SnapInsta.io%20-%20Smoothed%20Brown%20Noise%208-Hours%20-%20Remastered%2C%20for%20Relaxation%2C%20Sleep%2C%20Studying%20and%20Tinnitus%20%E2%98%AF108%20(128%20kbps)-%5BAudioTrimmer.com%5D.mp3?raw=true")
  
  
    function playBgSound(isOn) {
        if (isOn) {
            backSound.play() 
        } else {
            backSound.pause()
        }
    } 
      
    function pressButton() {
      buttonPressAudio.play()
    }
  
    function timeEnd() {
      alertTimer.play()
    }

    return {
      pressButton,
      timeEnd,
      playBgSound
    }
}  