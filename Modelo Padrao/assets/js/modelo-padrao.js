class Motorcycle {
    constructor(model, color) {
        this.color = color,
            this.model = model,
            this.speed = 0,
            this.km = 0
    }

    // Metodos de instancia
    accelerate() {
        this.speed += 2
        this.km += 0.5
    }

    brake() {
        this.speed -= 2
    }

    // Metodo estatico (pertence a classe)
    static changeOil() {
        console.log('Precisa trocar o oleo')
        return
    }
}

// Chama atraves da classe
Motorcycle.changeOil()

const motor1 = new Motorcycle('fz15', 'azul')
motor1.accelerate()
motor1.accelerate()
console.log(motor1) // Motorcycle { color: 'azul', model: 'fz15', speed: 4, km: 1 }