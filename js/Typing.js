const textDisplay = document.getElementById('text')
const frases = ['Olá, seja bem vindo!', 'Meu nome é Heitor Mariano', 'Fique à vontade para me conhecer']
let i = 0
let j = 0
let fraseAtual = []
let isDeleting = false
let isEnd = false

function loop() {
    isEnd = false
    textDisplay.innerHTML = fraseAtual.join('')

    if (i < frases.length) {


        if (!isDeleting && j < frases[i].length) {
            fraseAtual.push(frases[i][j])
            j++
            textDisplay.innerHTML = fraseAtual.join('')

        }

        if (isDeleting && j <= frases[i].length) {
            fraseAtual.pop(frases[i][j])
            j--
            textDisplay.innerHTML = fraseAtual.join('')
        }

        if (j == frases[i].length) {
            isEnd = true
            isDeleting = true

        }

        if (isDeleting && j === 0) {
            fraseAtual = []
            isDeleting = false
            i++
            if (i == frases.length) {
                i = 0
            }
        }
    }
    const speedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (90 - 80) + 80
    const time = isEnd ? 2500 : isDeleting ? speedUp : normalSpeed
    setTimeout(loop, time)
}

loop()