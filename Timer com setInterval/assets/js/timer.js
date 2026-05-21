const timerParagrafer = document.getElementById('showTimer')

const data = new Date(0, 0, 0, 0, 0)
let timer = null

function showHour(data) {

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

function resetTimer() {
    data.setHours(0)
    data.setMinutes(0)
    data.setSeconds(0)
    timerParagrafer.innerText = showHour(data)
}

function stopCount() {
    clearInterval(timer)
}

function initTimer() {
    stopCount()
    timer = setInterval(() => {
        data.setSeconds(data.getSeconds() + 1)
        timerParagrafer.innerText = showHour(data)
    }, 1000)
}

const removeClass = () => { timerParagrafer.classList.remove('stopTimer') }
const addClass = () => { timerParagrafer.classList.add('stopTimer') }

document.addEventListener('click', function (e) {
    const el = e.target

    if (el.id === 'initial-timer') {
        initTimer()
        removeClass()
    }
    if (el.id === 'stop-timer') {
        stopCount()
        addClass()
    }
    if (el.id === 'reset-timer') {
        resetTimer()
        removeClass()
    }
})