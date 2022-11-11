
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDiplay = document.querySelector('.minutes')
const secondsDiplay = document.querySelector('.seconds')


function countdown(){
    setTimeout(function() {
        let seconds = Number(secondsDiplay.textContent)
        let minutes = Number(minutesDiplay.textContent)

        
        if (minutes <= 0) {
            seconds = 10
        }
        secondsDiplay.textContent = String(seconds -1).padStart(2, "0")

        countdown()
    }, 1000)
}


buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonStop.classList.toggle('hide')

 countdown()
})

buttonPause.addEventListener('click', function () {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
})

buttonStop.addEventListener('click', function () {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
})

buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.toggle('hide')
    buttonSoundOff.classList.toggle('hide')
    
})

buttonSoundOn.addEventListener('click', function () {
    buttonSoundOff.classList.toggle('hide')
    buttonSoundOn.classList.toggle('hide')
    
})

buttonSet.addEventListener('click', function () {
    minutes = prompt('Qauntos minutos?')
    minutesDiplay.textContent = minutes
})