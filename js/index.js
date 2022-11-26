import Events from "./events.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"

import {
    buttonPlay,
    buttonPause,
    minutesDisplay,
    secondsDisplay,
 } from './elements.js'

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonPlay
})

const sounds = Sounds()

Events(timer, sounds)








