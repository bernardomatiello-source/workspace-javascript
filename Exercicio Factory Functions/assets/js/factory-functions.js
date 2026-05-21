function createCalculator() {
    return {
        display: document.getElementById('math-input'),

        init() {
            this.buttonClicks()
        },

        makeCount() {
            let count = this.display.value
            
            try {
               count = eval(count)
               
               if(count !== 0 && !count) {
                alert('Conta Invalida')
                return
               }

                this.display.value = String(count)
            } catch (e) {
                alert('Conta Invalida')
            }
        },

        btnForDisplay(valor) {
            this.display.value += valor
        },

        clearDisplay() {
            this.display.value = ''
        },

        removeOne() {
            this.display.value = this.display.value.slice(0, -1)
        },


        buttonClicks() {
            // Arrow Function nao referencia o this, ou seja,
            // 'this' continua sendo o objeto.
            document.addEventListener('click', (e) => {
                const el = e.target
    
                if(el.classList.contains('btn-num')) this.btnForDisplay(el.innerText)
                if(el.id === 'clear-math') this.clearDisplay()
                if(el.id === 'remove-math') this.removeOne()
                if(el.id === 'showResult') this.makeCount()     
            })
        }
    }
}

const calculator = createCalculator()
calculator.init()