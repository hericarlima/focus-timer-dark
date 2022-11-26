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
    volume,
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

    buttonPlay.addEventListener('click', function() {
        timer.playClock()
        timer.countdown()
    })

    buttonPause.addEventListener('click', function() {
        timer.pauseClock()
        timer.hold()
    })

    buttonStop.addEventListener('click', function() {
        timer.resetClock()
        timer.resetTimer()
    })
    
    buttonIncrease.addEventListener('click', function() {
        timer.addFiveMinutes()    
    })
    
    buttonDecrease.addEventListener('click', function() {
        if (Number(minutesDisplay.textContent) >= 5) {
            timer.subtractFiveMinutes()                            
        } else {
            timer.subtractAllMinutes()        
        }
    })
    
    soundForest.addEventListener('click', function(){
        soundForest.classList.toggle('active')  
        soundForest.className === 'forest active' ? sounds.forest.play() : sounds.forest.pause()
    })
    
    soundRain.addEventListener('click', function(){
        soundRain.classList.toggle('active')
        soundRain.className === 'rain active' ? sounds.rain.play() : sounds.rain.pause()        
    })
        
    soundPeople.addEventListener('click', function(){
        soundPeople.classList.toggle('active')
        soundPeople.className === 'people active' ? sounds.people.play() : sounds.people.pause()
    })

    soundFire.addEventListener('click', function(){
        soundFire.classList.toggle('active')
        soundFire.className === 'fire active' ? sounds.fire.play() : sounds.fire.pause()
    })   
}