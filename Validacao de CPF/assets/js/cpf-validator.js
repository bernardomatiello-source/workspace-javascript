const cpfInput = document.getElementById('cpf-input')
const validateBtn = document.getElementById('validate-btn')
const validationResult = document.getElementById('validation-result')

function ValidateCpf(sendedCpf) {
    Object.defineProperty(this, 'cleanedCpf', {
        get: function () {
            return sendedCpf.replace(/\D+/g, '')
        }
    })
}

ValidateCpf.prototype.validate = function () {

    const cleanedCpf = this.cleanedCpf

    if (typeof cleanedCpf === 'undefined') return false
    if (cleanedCpf.length !== 11) return false
    if(this.isSequence()) return false

    const partialCpf = cleanedCpf.slice(0, -2)

    const firstDigit = this.createDigit(partialCpf)
    const secondDigit = this.createDigit(partialCpf + firstDigit)

    const newCpf = partialCpf + firstDigit + secondDigit

    if (newCpf !== cleanedCpf) return false

    return true
}

ValidateCpf.prototype.isSequence = function() {
    return this.cleanedCpf[0].repeat(11) ? true : false
}

ValidateCpf.prototype.createDigit = function (partialCpf) {

    const arrayCpf = Array.from(partialCpf)

    let regressive = arrayCpf.length + 1
    const multipliedArray = arrayCpf.map(value => {
        const curValue = (Number(value)) * regressive
        regressive--
        return curValue
    })

    const sumedArray = multipliedArray.reduce((acc, curr) => acc += curr)

    const digit = (11 - (sumedArray % 11))
    return digit > 9 ? '0' : String(digit)

}


validateBtn.addEventListener('click', () => {
    const cpf = new ValidateCpf(cpfInput.value)

    if (cpf.validate()) {
        validationResult.innerText = 'CPF Valido!'
        validationResult.classList.remove('invalid-cpf')
        validationResult.classList.add('valid-cpf')
    } else {
        validationResult.innerText = 'CPF Invalido!'
        validationResult.classList.remove('valid-cpf')
        validationResult.classList.add('invalid-cpf')
    }
})
