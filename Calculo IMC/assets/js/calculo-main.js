function myScope() {
    const weight = document.getElementById('input-teste-1')
    const height = document.getElementById('input-teste-2')
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
            return
        }

        if (peso >= 700 || peso <= 0.55 || altura >= 2.70 || altura <= 0.50) {
            setResult('Altura ou Peso Invalidos', false)
            return
        }

        const imc = peso / (altura * altura)

        setLevel(imc, true)

    }

    function setResult(message, isValid) {
        imcResult.innerText = message
        imcResult.className = isValid ? 'imc-result' : 'imc-result-false'
    }

    function setLevel(imc) {
        if (imc <= 18.5) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Abaixo do peso)`, true)
        } else if (imc <= 24.9) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Peso normal)`, true)
        } else if (imc <= 29.9) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Sobrepeso)`, true)
        } else if (imc <= 34.9) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Obesidade grau 1)`, true)
        } else if (imc <= 39.9) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Obesidade grau 2)`, true)
        } else if (imc >= 40) {
            setResult(`Seu IMC e ${imc.toFixed(2)} (Obesidade grau 3)`, true)
        }
    }

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        calculateImc();
        console.log('Esta enviando')
    });
}

myScope()