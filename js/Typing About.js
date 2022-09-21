const textDisplays = document.getElementById('element')
const frases2 = ['Um pouco sobre mim...']
let k = 0
let l = 0
let fraseAtual2 = []
let isDeletings = false
let isEnds = false

function looping() {
    isEnds = false
    textDisplays.innerHTML = fraseAtual2.join('')

    if (k < frases2.length) {


        if (!isDeletings && l < frases2[k].length) {
            fraseAtual2.push(frases2[k][l])
            l++
            textDisplays.innerHTML = fraseAtual2.join('')

        }

        if (isDeletings && l <= frases2[k].length) {
            fraseAtual2.pop(frases2[k][l])
            l--
            textDisplays.innerHTML = fraseAtual2.join('')
        }

        if (l == frases2[k].length) {
            isEnds = true
            isDeletings = true

        }

        if (isDeletings && l === 0) {
            fraseAtual2 = []
            isDeletings = false
            k++
            if (k == frases2.length) {
                k = 0
            }
        }
    }
    const speedUps = Math.random() * (80 - 50) + 50
    const normalSpeeds = Math.random() * (300 - 200) + 200
    const time = isEnds ? 2000 : isDeletings ? speedUps : normalSpeeds
    setTimeout(looping, time)
}

looping()