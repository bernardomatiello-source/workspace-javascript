// Selecionar a primeira classe com 'paragrafos'
const divParagrafer = document.querySelector('.div-paragrafos')

// Seleciona todos os 'p' de dentro da 'divParagrafer' e retorna uma NodeList (Nao e um array, mas se comporta como um)
const paragrafos = divParagrafer.querySelectorAll('p')

// Pega todos os estilos passados nos argumentos da funcao. (No caso o body de document)
const estilosBody = getComputedStyle(document.body)

// Pega a cor de fundo do estilosBody declarado anteriormente
const backGroundColorBody = estilosBody.backgroundColor

for (let ps of paragrafos) {
    ps.style.backgroundColor = backGroundColorBody // Definir a mesma cor do body como fundo dos paragrafos
    ps.style.color = '#FFFF' // Definir todos os paragrafos com cor branca
}  