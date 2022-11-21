const buttonLight = document.querySelector('#light')
const buttonDark = document.querySelector('#dark')

const pathPlay = document.querySelector('.path-play')
const pathStop = document.querySelector('.path-stop')
const pathIncrease = document.querySelector('.path-increase')
const pathDecrease = document.querySelector('.path-decrease')

/*
const forest = document.querySelector('#forest')
const selectForest = document.querySelector('#selectForest')
const rain = document.querySelector('#rain')
const selectRain = document.querySelector('#selectRain')
const people = document.querySelector('#people')
const selectPeople = document.querySelector('#selectPeople')
const fire = document.querySelector('#fire')
const selectFire = document.querySelector('#selectFire')
*/


buttonDark.addEventListener('click', function(){
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')

    document.body.style.backgroundColor = "#000000"
    document.body.style.color = "#FFFFFF"

    pathPlay.style.fill = "#C4C4CC"
    pathStop.style.fill = "#C4C4CC"
    pathIncrease.style.fill = "#C4C4CC"
    pathDecrease.style.fill = "#C4C4CC"


})

buttonLight.addEventListener('click', function(){
    buttonDark.classList.remove('hide')
    buttonLight.classList.add('hide')

    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "#000000"

    pathPlay.style.fill = "#000000"
    pathStop.style.fill = "#000000"
    pathIncrease.style.fill = "#000000"
    pathDecrease.style.fill = "#000000"
})

