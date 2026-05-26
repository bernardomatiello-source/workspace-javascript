class ValidateCpf {
    constructor(rawCpf) {
        Object.defineProperty(this, 'cleanedCpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: rawCpf.replace(/\D+/g, '')
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

        const summedArray = multipliedArray.reduce((acc, curr) => acc += curr)

        const digit = (11 - (summedArray % 11))
        return digit > 9 ? '0': String(digit)
    }
}