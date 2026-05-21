const textoH1 = document.querySelector('.container h1')
const data = new Date('2026-04-29 15:30:00')

// CRIAR FUNCOES PARA FORMATAR A DATA

function getMonthName(dataMonth) {
    const month = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return month[dataMonth]
}

function getWeekName(dataWeek) {
    const week = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado']
    return week[dataWeek]
}

function leftZero(num) {
    return num >= 10 ? num : `0${num}`
}

function formatDate(data) {
    const weekNumber = data.getDay()
    const monthNumber = data.getMonth()
    const dayNumber = data.getDate()
    const yearNumber = data.getFullYear()
    const hourNumber = data.getHours()
    const minuteNumber = data.getMinutes()

    const dayWeekName = getWeekName(weekNumber)
    const monthName = getMonthName(monthNumber)

    return (
        `${dayWeekName}, ${dayNumber} de ${monthName} de ${yearNumber}`
        + ` as ${leftZero(hourNumber)}:${leftZero(minuteNumber)}`
    )
}

textoH1.innerText = formatDate(data)



// UTILIZAR RECURSOS DA LINGUAGEM PARA FORMATAR (MAIS UTILIZADA)
const data2 = new Date('2026-04-29 15:30:00')

const dataObject = {
    dateStyle: 'full',
    timeStyle: 'short'
}

textoH1.innerText = data.toLocaleString('pt-BR', dataObject)