export default function Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonPlay
}) {

    let timerTimeOut

    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(function(){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes,0)

            if(isFinished){
                updateDisplay()
                resetTimer()
                resetClock()
                return
            }
            if(seconds <=0){
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))
            countdown()
        }, 1000)
    }

    function updateMinutes(minutes){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }

    function playClock() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function pauseClock() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function resetClock() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function addFiveMinutes(){        
        minutes += 5
        updateMinutes(minutes)
    }

    function subtractFiveMinutes(){
        minutes -= 5 
        updateMinutes(minutes)
    }

    function subtractAllMinutes(){
        minutesDisplay.textContent = String('00').padStart(2, "0")
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        updateDisplay,
        updateMinutes,
        countdown,
        playClock,
        pauseClock,
        resetClock,
        addFiveMinutes,
        subtractAllMinutes,
        subtractFiveMinutes,
        hold,
        resetTimer
    }
}