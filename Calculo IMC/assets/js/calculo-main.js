function myScope() {
    const weight = document.getElementById('input-peso')
    const height = document.getElementById('input-altura')
    const imcResult = document.querySelector('#imc-result')
    const form = document.querySelector('#form')

    function calculateImc() {
        let peso = Number(weight.value)
        let altura = Number(height.value)

        if (!peso) {
            setResult('Peso Invalido', false)
            return
        }

        if (!altura) {
            setResult('Altura Invalida', false)
            returnw
        }

        if (peso >= 700 || peso <= 0.55 || altura >= 2.70 || altura <= 0.50) {
            setResult('Altura ou Peso Invalidos', false)
            return
        }

        const imc = getImc(peso, altura)
        const level = setLevel(imc)
        setResult(`Seu IMC e ${imc} (${level})`, true)

    }

    function getImc(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2)
    }

    function setResult(message, isValid) {
        imcResult.innerText = message
        imcResult.className = isValid ? 'imc-result' : 'imc-result-false'
    }

    function setLevel(imc) {
        const levels = [
            'Abaixo do Peso', // 0
            'Peso Normal', // 1
            'Sobrepeso', // 2
            'Obesidade grau 1', // 3 
            'Obesidade grau 2', // 4
            'Obesidade grau 3' // 5
        ]

        if (imc < 18.5) return levels[0]
        if (imc <= 24.9) return levels[1]
        if (imc <= 29.9) return levels[2]
        if (imc <= 34.9) return levels[3]
        if (imc <= 39.9) return levels[4]
        if (imc >= 40) return levels[5]
    }

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        calculateImc();
        console.log('Esta enviando')
    });
}

myScope()