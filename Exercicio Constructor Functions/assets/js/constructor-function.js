function Calculator() {
    const display = document.getElementById('math-input')

    this.initCalc = () => {
        listenButtons()
    }

    function displayShow(innerText) {
        display.value += innerText
        display.focus() // Voltar o Focus para o display,
        // caso contrario o 'Enter' aciona o ultimo elemento pressionado.
    }

    function clearDisplay() {
        display.value = ''
    }

    function removeMath() {
        display.value = display.value.slice(0, -1)
    }

    function makeMath() {
        try {
            const result = eval(display.value)

            if (result !== 0 && !result) {
                display.value = 'Conta Invalida'
                return
            }

            display.value = result
        } catch (e) {
            display.value = 'Conta Invalida'
            return
        }
    }

    function listenButtons() {

        document.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') makeMath()
        })

        document.addEventListener('click', (e) => {
            const el = e.target

            if (el.classList.contains('btn-num')) displayShow(el.innerText)
            if (el.id === 'clear-math') clearDisplay()
            if (el.id === 'remove-math') removeMath()
            if (el.id === 'showResult') makeMath()
        })
    }
}

const calculator1 = new Calculator()
calculator1.initCalc()