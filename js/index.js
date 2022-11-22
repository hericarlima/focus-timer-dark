import Events from "./events.js"
import Timer from "./timer.js"

import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay,
    buttonLight,
    buttonDark,
    soundForest,
    soundRain,
    soundPeople,
    soundFire,
    volume,
    html
} from './elements.js'

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonPlay
})

Events(timer)







