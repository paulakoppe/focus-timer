function Controls({
    buttonPlay,
    buttonPause,
    buttonStopwatch,
    buttonStop
}) {

    function play() {
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
        buttonStopwatch.classList.add("hide")
        buttonStop.classList.remove("hide")
    }

    function pause() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        
    }

    function reset() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonStopwatch.classList.remove("hide")
        buttonStop.classList.add("hide")
    }


    function stopWatch() {
        let newMinutes = prompt('how many minutes?')
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        stopWatch,
    }
}

export default Controls;