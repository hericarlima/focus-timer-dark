import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    buttonLight,
    buttonDark,
    soundForest,
    soundRain,
    soundPeople,
    soundFire,
    volForest,
    volRain,
    volPeople,
    volFire,
    html
} from "./elements.js"

export default function Events (timer, sounds) {
    
    function changeTheme(){
        buttonDark.classList.toggle('hide')
        buttonLight.classList.toggle('hide')
        html.classList.toggle('dark-mode')
    }

    buttonLight.addEventListener('click', () => changeTheme()) 
    buttonDark.addEventListener('click', () => changeTheme()) 

    buttonPlay.addEventListener('click', () => {
        timer.playClock()
        timer.countdown()
    })

    buttonPause.addEventListener('click', () => {
        timer.pauseClock()
        timer.hold()
    })

    buttonStop.addEventListener('click', () => {
        timer.resetClock()
        timer.resetTimer()
    })
    
    buttonIncrease.addEventListener('click', () => {
        timer.addFiveMinutes()    
    })
    
    buttonDecrease.addEventListener('click', () => {
        if (Number(minutesDisplay.textContent) >= 5) {
            timer.subtractFiveMinutes()                            
        } else {
            timer.subtractAllMinutes()        
        }
    })
    
    soundForest.addEventListener('click', () => {
        soundForest.classList.toggle('active')  
        soundForest.className === 'forest active' ? sounds.forest.play() : sounds.forest.pause()
    })

    volForest.addEventListener('input', () => {
        sounds.forest.volume = volForest.value
    })
    
    soundRain.addEventListener('click', () => {
        soundRain.classList.toggle('active')
        soundRain.className === 'rain active' ? sounds.rain.play() : sounds.rain.pause()        
    })

    volRain.addEventListener('input', () => {
        sounds.rain.volume = volRain.value
    })
        
    soundPeople.addEventListener('click', () => {
        soundPeople.classList.toggle('active')
        soundPeople.className === 'people active' ? sounds.people.play() : sounds.people.pause()
    })

    volPeople.addEventListener('input', () => {
        sounds.people.volume = volPeople.value
    })

    soundFire.addEventListener('click', () => {
        soundFire.classList.toggle('active')
        soundFire.className === 'fire active' ? sounds.fire.play() : sounds.fire.pause()
    })   

    volFire.addEventListener('input', () => {
        sounds.fire.volume = volFire.value
    })
}