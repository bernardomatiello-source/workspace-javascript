function Product(name, price) {
    this.name = name
    this.price = price
}

Product.prototype.increase = function (increase) {
    this.price += increase
}

Product.prototype.discount = function (discount) {
    this.price -= discount
}

function Shirt(name, price, color) {

    // Isto faz uma ligacao direta com nossa funcao construtora do Product.
    Product.call(this, name, price)

    // Agora minha funcao construtora Shirt possui um argumento a mais que Product nao possui.
    this.color = color
}

// Antes de definirmos o prototype de Shirt abaixo o construtor dele era a funcao construtora Shirt,
// porem definindo o prototype de Shirt como Product, ele entende que o construtor tambem seria o Product.
Shirt.prototype = Object.create(Product.prototype)

// Para resolvermos isto, basta direcionarmos o construtor de Shirt para a funcao construtora dele mesmo.
Shirt.prototype.constructor = Shirt

// Definindo dessa forma, o motor do javascript vai pegar primeiro esta funcao de aumento ao inves do aumento da funcao Product,
// isso acontece pois primeiro ele busca os metodos do prototype Shirt e depois da sua herenca (o prototype de product)
Shirt.prototype.increase = function (percentual) {
    this.price = this.price + (this.price * (percentual / 100))
}

function Mug(name, price, material, stock) {

    // Chamamos os metodos de construcao de Product referenciando o this do meu objeto Mug criado.
    Product.call(this, name, price)

    this.material = material
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock
        },
        set: function(newValue) {
            if(typeof newValue !== 'number') return
            stock = newValue
        }
    })
}

// Definimos o prototype de Mug a partir da criacao de um objeto Produc.prototype
Mug.prototype = Object.create(Product.prototype)

// Corrigir o construtor
Mug.prototype.constructor = Mug

const shirt = new Shirt('Camiseta', 10, 'Amarelo')
const product = new Product('Laptop', 2000)
const mug = new Mug('Xicara Azul', 30, 'Porcelana', 10)

console.log(shirt) // Shirt { name: 'Camiseta', price: 10 }
console.log(product) // Product { name: 'Laptop', price: 2000 }
console.log(mug.stock) // 10
console.log(mug) // Mug { name: 'Xicara Azul', price: 30, material: 'Porcelana', stock: [Getter/Setter] }