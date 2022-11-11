
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let minutes
const minutesDiplay = document.querySelector('.minutes')
const secondsDiplay = document.querySelector('.seconds')

function resetControls() {
    buttonPlay.classList.toggle('hide')
    buttonPause.classList.toggle('hide')
    buttonSet.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
}

function updateTimerDisplay( minutes, seconds) {
    secondsDiplay.textContent = String(seconds).padStart(2, "0")
    minutesDiplay.textContent = String(minutes).padStart(2, "0")
}

function countdown() {
    setTimeout(function () {
        let seconds = Number(secondsDiplay.textContent)
        let minutes = Number(minutesDiplay.textContent)


        if (minutes <= 0) {
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 60

        }

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
    resetControls()
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
    updateTimerDisplay(minutes, 0)
})