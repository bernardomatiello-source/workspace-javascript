const cpfInput = document.getElementById('cpf-input')
const validateBtn = document.getElementById('validate-btn')
const validateResult = document.getElementById('validation-result')

class ValidateCpf {
    constructor(sendedCpf) {
        Object.defineProperty(this, 'cleanedCpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: sendedCpf.replace(/\D+/g, '')
        })
    }

    validate() {
        if (!this.cleanedCpf) return false
        if (typeof this.cleanedCpf !== 'string') return false
        if (this.cleanedCpf.length !== 11) return false
        if (this.isSequence()) return false

        let partialCpf = this.cleanedCpf.slice(0, -2)

        const firstDigit = this.generateDigit(partialCpf)
        partialCpf += firstDigit

        const secondDigit = this.generateDigit(partialCpf)
        partialCpf += secondDigit

        if (this.cleanedCpf !== partialCpf) return false
        console.log(typeof this.cleanedCpf)
        console.log(typeof partialCpf)

        return true
    }

    isSequence() {
        return this.cleanedCpf[0].repeat(11) === this.cleanedCpf
    }

    generateDigit(partialCpf) {

        const cpfArray = Array.from(partialCpf)

        let multiplyNum = cpfArray.length + 1
        const multipliedArray = cpfArray.map(value => {
            const multipliedValue = value * multiplyNum
            multiplyNum--
            return multipliedValue
        })

        const sumedArray = multipliedArray.reduce((acc, curr) => acc += curr)

        const digit = (11 - (sumedArray % 11))
        return digit >= 0 ? String(digit): '0'
    }
}

validateBtn.addEventListener('click', () => {

    const validateCpf = new ValidateCpf(cpfInput.value)

    const validation = validateCpf.validate()

    if (validation) {
        validateResult.innerText = `Valid CPF`
        validateResult.classList.remove('invalid-cpf')
        validateResult.classList.add('valid-cpf')
    } else {
        validateResult.innerText = `Invalid CPF`
        validateResult.classList.remove('valid-cpf')
        validateResult.classList.add('invalid-cpf')
    }

})